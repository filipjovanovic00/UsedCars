using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Collections.Immutable;
using System.Linq;
using UsedCars.API.Data;
using UsedCars.API.DTOs;
using UsedCars.API.Extensions;
using UsedCarsWebApi.Models;
using UsedCarsWebApi.Repositories.Contracts;

namespace UsedCarsWebApi.Repositories;

public class CarRepository : ICarRepository
{
    private readonly UsedCarsDbContext _usedCarsDbContext;

    public CarRepository(UsedCarsDbContext usedCarsDbContext)
    {
        _usedCarsDbContext = usedCarsDbContext;
    }

    public async Task AddCarAsync(Car car)
    {
        await _usedCarsDbContext.Cars.AddAsync(car);
        await _usedCarsDbContext.SaveChangesAsync();
    }

    public async Task DeleteCarAsync(Guid id)
    {
        var car = await _usedCarsDbContext.Cars.FirstOrDefaultAsync(x => x.Id == id);

        _usedCarsDbContext.Cars.Remove(car);
        await _usedCarsDbContext.SaveChangesAsync();
    }

    public async Task<IEnumerable<Car>> GetApprovedCarsAsync(
        int pageNumber,
        int pageSize,
        string? mark = null,
        string? type = null,
        int? yearStart = null,
        int? yearEnd = null,
        string? gear = null,
        string? drive = null,
        int? price = null,
        int? km = null)
    {
        var cars = _usedCarsDbContext.Cars
                .Where(c => c.Approved)
                .Include("Pictures")
                .AsQueryable();

        if (string.IsNullOrWhiteSpace(mark) == false)
        {
            cars = cars.Where(x => x.Mark.Contains(mark));
        }

        if (string.IsNullOrWhiteSpace(type) == false)
        {
            cars = cars.Where(x => x.CarBody.Contains(type));
        }

        if (yearStart > 0)
        {
            cars = cars.Where(x => x.Year >= yearStart);
        }

        if (yearEnd > 0)
        {
            cars = cars.Where(x => x.Year <= yearEnd);
        }

        if (string.IsNullOrWhiteSpace(gear) == false)
        {
            cars = cars.Where(x => x.GearboxType.Contains(gear));
        }

        if (string.IsNullOrWhiteSpace(drive) == false)
        {
            cars = cars.Where(x => x.DriveType.Contains(drive));
        }

        if (price > 0)
        {
            cars = cars.Where(x => x.Price <= price);
        }

        if (km > 0)
        {
            cars = cars.Where(x => x.Mileage <= km);
        }

        var skipResults = (pageNumber - 1) * pageSize;

        return await cars.Skip(skipResults).Take(pageSize).ToListAsync();
    }

    public async Task<IEnumerable<Car>> GetFirstApprovedCarsAsync()
    {
        var cars = await _usedCarsDbContext.Cars
                .Where(c => c.Approved)
                .Include("Pictures")
                .Take(8)
                .ToListAsync();

        return cars;
    }

    public async Task<CarDto> GetCarByIdAsync(Guid id)
    {
        var carDto = await _usedCarsDbContext.Cars
                .Where(car => car.Id == id)
                .Include("Pictures")
                .Join(
                    _usedCarsDbContext.Users,
                    car => car.UserId,
                    user => user.Id,
                    (car, user) => new CarDto
                        {
                            Id = car.Id,
                            Mark = car.Mark,
                            Model = car.Model,
                            Year = car.Year,
                            Mileage = car.Mileage,
                            Price = car.Price,
                            CarBody = car.CarBody,
                            DriveType = car.DriveType,
                            GearboxType = car.GearboxType,
                            Description = car.Description,
                            Location = car.Location,
                            UserId = user.Id,
                            UserName = user.FirstName + " " + user.LastName,
                            Phone = user.Phone,
                            Email = user.Email,
                            Pictures = car.Pictures
                        })
                .FirstOrDefaultAsync();

        return carDto;
    }

    public async Task<IEnumerable<Car>> GetNotApprovedCarsAsync()
    {
        var cars = await _usedCarsDbContext.Cars
                .Where(c => c.Approved == false)
                .Include("Pictures")
                .ToListAsync();

        return cars;
    }

    public async Task<IEnumerable<Car>> GetUsersApprovedCarsAsync(Guid userId)
    {
        var cars = await _usedCarsDbContext.Cars
                .Where(c => c.Approved && c.UserId == userId)
                .Include("Pictures")
                .ToListAsync();

        return cars;
    }

    public async Task<IEnumerable<Car>> GetUsersNotApprovedCarsAsync(Guid userId)
    {
        var cars = await _usedCarsDbContext.Cars
                .Where(c => c.Approved == false && c.UserId == userId)
                .Include("Pictures")
                .ToListAsync();

        return cars;
    }

    public async Task ApproveCarAsync(Guid id)
    {
        var car = await _usedCarsDbContext.Cars.FirstOrDefaultAsync(x => x.Id == id);

        car.Approved = true;

        await _usedCarsDbContext.SaveChangesAsync();
    }
}
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
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

    public async Task<Car> AddCarAsync(Car car)
    {
        await _usedCarsDbContext.Cars.AddAsync(car);
        await _usedCarsDbContext.SaveChangesAsync();
        return car;
    }

    public async Task<Car> DeleteCarAsync(Guid id)
    {
        var existingCar = await _usedCarsDbContext.Cars.FirstOrDefaultAsync(x => x.Id == id);

        if (existingCar == null)
        {
            return null;
        }

        _usedCarsDbContext.Cars.Remove(existingCar);
        await _usedCarsDbContext.SaveChangesAsync();
        return existingCar;
    }

    public async Task<IEnumerable<Car>> GetApprovedCarsAsync()
    {
        var cars = await _usedCarsDbContext.Cars
                .Where(c => c.Approved)
                .Include("Pictures")
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
}
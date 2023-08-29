using UsedCars.API.DTOs;
using UsedCarsWebApi.Models;

namespace UsedCarsWebApi.Repositories.Contracts;

public interface ICarRepository
{
    Task<IEnumerable<Car>> GetApprovedCarsAsync(
        string? mark = null, 
        string? type = null, 
        int? yearStart = null,
        int? yearEnd = null,
        string? gear = null,
        string? drive = null,
        int? price = null,
        int? km = null);
    Task<IEnumerable<Car>> GetNotApprovedCarsAsync();
    Task<IEnumerable<Car>> GetUsersApprovedCarsAsync(Guid userId);
    Task<IEnumerable<Car>> GetUsersNotApprovedCarsAsync(Guid userId);
    Task<CarDto> GetCarByIdAsync(Guid id);
    Task<Car> AddCarAsync(Car car);
    Task<Car> DeleteCarAsync(Guid id);
}
using UsedCars.API.DTOs;
using UsedCarsWebApi.Models;

namespace UsedCars.API.Extensions;

public static class CarConversions
{
    public static IEnumerable<CarShorterDto> ConvertToCarShortherDto(this IEnumerable<Car> cars)
    {
        return (from car in cars
                select new CarShorterDto
                {
                    Id = car.Id,
                    Mark = car.Mark,
                    Model = car.Model,
                    Price = car.Price,
                    Year = car.Year,
                    Picture = car.Pictures[0]
                }).ToList();
    }

    public static IEnumerable<CarShortDto> ConvertToCarShorthDto(this IEnumerable<Car> cars)
    {
        return (from car in cars
                select new CarShortDto
                {
                    Id = car.Id,
                    Mark = car.Mark,
                    Model = car.Model,
                    Price = car.Price,
                    Year = car.Year,
                    Picture = car.Pictures[0],
                    Location = car.Location
                }).ToList();
    }
}
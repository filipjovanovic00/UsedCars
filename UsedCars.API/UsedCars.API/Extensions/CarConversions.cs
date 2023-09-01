using UsedCars.API.DTOs;
using UsedCarsWebApi.Enums;
using UsedCarsWebApi.Models;

namespace UsedCars.API.Extensions;

public static class CarConversions
{
    /*public static IEnumerable<CarShorterDto> ConvertToCarShortherDto(this IEnumerable<Car> cars, string base64)
    {
        return (from car in cars
                select new CarShorterDto
                {
                    Id = car.Id,
                    Mark = car.Mark,
                    Model = car.Model,
                    Price = car.Price,
                    Year = car.Year,
                    Picture = base64
                }).ToList();
    }*/

    public static CarShorterDto ConvertToCarShortherDto(this Car car, string base64)
    {
        return new CarShorterDto
                {
                    Id = car.Id,
                    Mark = car.Mark,
                    Model = car.Model,
                    Price = car.Price,
                    Year = car.Year,
                    Picture = base64
                };
    }

    public static CarShortDto ConvertToCarShorthDto(this Car car, string base64)
    {
        return new CarShortDto
        {
            Id = car.Id,
            Mark = car.Mark,
            Model = car.Model,
            Price = car.Price,
            Year = car.Year,
            Mileage = car.Mileage,
            Picture = base64,
            Location = car.Location
        };
    }

    public static CarDto2 ConvertToCarDto2(this CarDto car, List<string> base64)
    {
        return new CarDto2
        {
            Id = car.Id,
            Mark = car.Mark,
            Model = car.Model,
            Price = car.Price,
            Year = car.Year,
            Mileage = car.Mileage,
            Pictures = base64,
            Location = car.Location,
            CarBody = car.CarBody,
            DriveType = car.DriveType,
            GearboxType = car.GearboxType,
            Description = car.Description,
            UserId = car.UserId,
            UserName = car.UserName,
            Phone = car.Phone,
            Email = car.Email
        };
    }
}
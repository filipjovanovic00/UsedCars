using UsedCarsWebApi.Models;

namespace UsedCars.API.DTOs;

public class CarDto2
{
    public Guid Id { get; set; }

    public string Mark { get; set; }

    public string Model { get; set; }

    public int Year { get; set; }

    public long Mileage { get; set; }

    public decimal Price { get; set; }

    public string CarBody { get; set; }

    public string DriveType { get; set; }

    public string GearboxType { get; set; }

    public string? Description { get; set; }

    public string StateOfCar { get; set; }

    public string Location { get; set; }

    public Guid UserId { get; set; }

    public string UserName { get; set; }

    public string Phone { get; set; }

    public string Email { get; set; }

    public List<string>? Pictures { get; set; }
}
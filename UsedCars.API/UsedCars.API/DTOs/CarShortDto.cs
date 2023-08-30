using UsedCarsWebApi.Models;

namespace UsedCars.API.DTOs;

public class CarShortDto
{
    public Guid Id { get; set; }

    public string Mark { get; set; }

    public string Model { get; set; }

    public int Year { get; set; }

    public decimal Price { get; set; }

    public long Mileage { get; set; }

    public Picture? Picture { get; set; }

    public string Location { get; set; }
}
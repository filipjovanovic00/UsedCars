using Microsoft.AspNetCore.Components;
using UsedCarsWebApi.Models;

namespace UsedCars.API.DTOs;

public class CarShorterDto
{
    public Guid Id { get; set; }

    public string Mark { get; set; }

    public string Model { get; set; }

    public decimal Price { get; set; }

    public int Year { get; set; }

    public Picture? Picture { get; set; }
}
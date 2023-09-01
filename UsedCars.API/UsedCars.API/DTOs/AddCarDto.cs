namespace UsedCars.API.DTOs;

public class AddCarDto
{
    public string Mark { get; set; }

    public string Model { get; set; }

    public int Year { get; set; }

    public long Mileage { get; set; }

    public decimal Price { get; set; }

    public string CarBody { get; set; }

    public string DriveType { get; set; }

    public string GearboxType { get; set; }

    public string? Description { get; set; }

    public string Location { get; set; }

    public AddPictureDto? Pictures { get; set; }
}
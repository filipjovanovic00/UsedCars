namespace UsedCarsWebApi.Models;

public class Car
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

    public string State { get; set; }

    public string Location { get; set; }

    public bool Approved { get; set; } = false;

    public Guid UserId { get; set; }

    public List<Picture>? Pictures { get; set; }
}
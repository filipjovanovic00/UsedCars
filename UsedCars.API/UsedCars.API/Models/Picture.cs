using System.ComponentModel.DataAnnotations;

namespace UsedCarsWebApi.Models;

public class Picture
{
    public Guid Id { get; set; }

    public string Path { get; set; }

    public Guid CarId { get; set; }
}
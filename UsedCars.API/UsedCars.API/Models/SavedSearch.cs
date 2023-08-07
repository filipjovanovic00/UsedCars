using System.ComponentModel.DataAnnotations;

namespace UsedCarsWebApi.Models;

public class SavedSearch
{
    public Guid Id { get; set; }

    public string Search { get; set; }

    public Guid UserId { get; set; }
}
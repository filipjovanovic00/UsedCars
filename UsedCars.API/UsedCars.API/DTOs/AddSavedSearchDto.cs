namespace UsedCars.API.DTOs;

public class AddSavedSearchDto
{
    public string Search { get; set; }

    public Guid UserId { get; set; }
}
using UsedCarsWebApi.Models;

namespace UsedCars.API.Repositories.Interfaces;

public interface IPictureRepository
{
    Task AddPictureAsync(Picture picture);
}
using UsedCars.API.Data;
using UsedCars.API.Repositories.Interfaces;
using UsedCarsWebApi.Models;

namespace UsedCars.API.Repositories;

public class PictureRepository : IPictureRepository
{
    private readonly UsedCarsDbContext _usedCarsDbContext;

    public PictureRepository(UsedCarsDbContext usedCarsDbContext)
    {
        _usedCarsDbContext = usedCarsDbContext;
    }

    public async Task AddPictureAsync(Picture picture)
    {
        await _usedCarsDbContext.Pictures.AddAsync(picture);
        await _usedCarsDbContext.SaveChangesAsync();
    }
}
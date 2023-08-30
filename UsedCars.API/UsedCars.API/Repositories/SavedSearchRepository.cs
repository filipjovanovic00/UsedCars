using Microsoft.EntityFrameworkCore;
using UsedCars.API.Data;
using UsedCars.API.Repositories.Interfaces;
using UsedCarsWebApi.Models;

namespace UsedCars.API.Repositories;

public class SavedSearchRepository : ISavedSearchRepository
{
    private readonly UsedCarsDbContext _usedCarsDbContext;

    public SavedSearchRepository(UsedCarsDbContext usedCarsDbContext)
    {
        _usedCarsDbContext = usedCarsDbContext;
    }

    public async Task AddSavedSearchAsync(SavedSearch savedSearch)
    {
        await _usedCarsDbContext.SavedSearches.AddAsync(savedSearch);
        await _usedCarsDbContext.SaveChangesAsync();
    }

    public async Task DeleteSavedSearchAsync(Guid id)
    {
        var search = await _usedCarsDbContext.SavedSearches.FirstOrDefaultAsync(x => x.Id == id);

        _usedCarsDbContext.SavedSearches.Remove(search);
        await _usedCarsDbContext.SaveChangesAsync();
    }

    public async Task<IEnumerable<SavedSearch>> GetUsersSavedSearchAsync(Guid userId)
    {
        var search = await _usedCarsDbContext.SavedSearches
        .Where(s => s.UserId == userId)
        .ToListAsync();

        return search;
    }
}
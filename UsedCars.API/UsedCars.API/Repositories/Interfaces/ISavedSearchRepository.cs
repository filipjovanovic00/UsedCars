using UsedCarsWebApi.Models;

namespace UsedCars.API.Repositories.Interfaces;

public interface ISavedSearchRepository
{
    Task<IEnumerable<SavedSearch>> GetUsersSavedSearchAsync(Guid userId);
    Task AddSavedSearchAsync(SavedSearch savedSearch);
    Task DeleteSavedSearchAsync(Guid id);
}
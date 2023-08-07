using Microsoft.EntityFrameworkCore;
using UsedCarsWebApi.Models;

namespace UsedCars.API.Data;

public class UsedCarsDbContext : DbContext
{
    public UsedCarsDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
    {
        
    }

    public DbSet<Car> Cars { get; set; }
    public DbSet<Picture> Pictures { get; set; }
    public DbSet<SavedSearch> SavedSearches { get; set; }
    public DbSet<User> Users { get; set; }
}
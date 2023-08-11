using Microsoft.EntityFrameworkCore;
using UsedCarsWebApi.Models;
using UsedCarsWebApi.Enums;

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

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Car>(builder =>
        {
            builder.ToTable("Cars");

            builder
                .HasMany(car => car.Pictures)
                .WithOne()
                .HasForeignKey(picture => picture.CarId)
                .OnDelete(DeleteBehavior.Cascade)
                .IsRequired();

            builder.HasData(
                new Car
                {
                    Id = Guid.Parse("d4b69b30-dad4-4673-bc49-b44ef61dd933"),
                    Mark = "test",
                    Model = "test",
                    Year = 2000,
                    Mileage = 150000,
                    Price = 5000,
                    DriveType = "test",
                    GearboxType = "test",
                    Description = "test",
                    Approved = true,
                    UserId = Guid.Parse("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"),
                    Location = "Knezevac"
                },
                new Car
                {
                    Id = Guid.Parse("f2646c1e-f0b3-48fb-9e8c-0e62411e9f30"),
                    Mark = "test",
                    Model = "test",
                    Year = 2000,
                    Mileage = 150000,
                    Price = 5000,
                    DriveType = "test",
                    GearboxType = "test",
                    Description = "test",
                    Approved = false,
                    UserId = Guid.Parse("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"),
                    Location = "Knezevac"
                },
                new Car
                {
                    Id = Guid.Parse("cb578e76-d0b3-443d-9d2d-84afd5a1c8a4"),
                    Mark = "test",
                    Model = "test",
                    Year = 2000,
                    Mileage = 150000,
                    Price = 5000,
                    DriveType = "test",
                    GearboxType = "test",
                    Description = "test",
                    Approved = true,
                    UserId = Guid.Parse("af19ba81-1376-4a55-b2f3-a0cb6782f491"),
                    Location = "Kragujevac"
                },
                new Car
                {
                    Id = Guid.Parse("a37ad9b1-8975-450a-84c5-b49869d5b7c2"),
                    Mark = "test",
                    Model = "test",
                    Year = 2000,
                    Mileage = 150000,
                    Price = 5000,
                    DriveType = "test",
                    GearboxType = "test",
                    Description = "test",
                    Approved = false,
                    UserId = Guid.Parse("af19ba81-1376-4a55-b2f3-a0cb6782f491"),
                    Location = "Kragujevac"
                },
                new Car
                {
                    Id = Guid.Parse("de1f391e-ae6e-4697-94e6-1b5445c8214e"),
                    Mark = "test",
                    Model = "test",
                    Year = 2000,
                    Mileage = 150000,
                    Price = 5000,
                    DriveType = "test",
                    GearboxType = "test",
                    Description = "test",
                    Approved = true,
                    UserId = Guid.Parse("998902da-c58d-4963-ae0d-39079971e5cd"),
                    Location = "Kragujevac"
                },
                new Car
                {
                    Id = Guid.Parse("351b2f6b-e575-4ed3-9e68-44da59482ef9"),
                    Mark = "test",
                    Model = "test",
                    Year = 2000,
                    Mileage = 150000,
                    Price = 5000,
                    DriveType = "test",
                    GearboxType = "test",
                    Description = "test",
                    Approved = false,
                    UserId = Guid.Parse("998902da-c58d-4963-ae0d-39079971e5cd"),
                    Location = "Kragujevac"
                }
            );
        });

        modelBuilder.Entity<Picture>(builder =>
        {
            builder.ToTable("Pictures");

            builder.HasData(
                new Picture
                {
                    Id = Guid.Parse("f7ba02e3-74fa-4ffb-9659-a6fef0ec9c97"),
                    Path = "path",
                    CarId = Guid.Parse("d4b69b30-dad4-4673-bc49-b44ef61dd933")
                },
                new Picture
                {
                    Id = Guid.Parse("641721fa-5687-4f73-b3a6-6057eb8911f9"),
                    Path = "path",
                    CarId = Guid.Parse("f2646c1e-f0b3-48fb-9e8c-0e62411e9f30")
                },
                new Picture
                {
                    Id = Guid.Parse("f13725a3-4f9b-4643-97fe-10531cb3e4de"),
                    Path = "path",
                    CarId = Guid.Parse("cb578e76-d0b3-443d-9d2d-84afd5a1c8a4")
                },
                new Picture
                {
                    Id = Guid.Parse("77bfb1bc-2396-42e2-9efd-95147e56817c"),
                    Path = "path",
                    CarId = Guid.Parse("a37ad9b1-8975-450a-84c5-b49869d5b7c2")
                },
                new Picture
                {
                    Id = Guid.Parse("85407744-2272-4c5f-929e-894f0e7ec415"),
                    Path = "path",
                    CarId = Guid.Parse("de1f391e-ae6e-4697-94e6-1b5445c8214e")
                },
                new Picture
                {
                    Id = Guid.Parse("327f49ec-02a3-4622-acc1-92be863fa15f"),
                    Path = "path",
                    CarId = Guid.Parse("351b2f6b-e575-4ed3-9e68-44da59482ef9")
                }
            );
        });

        modelBuilder.Entity<SavedSearch>(builder =>
        {
            builder.ToTable("SavedSearches");

            builder.HasData(
                new SavedSearch
                {
                    Id = Guid.Parse("12a2e457-aed3-4350-a2c9-efdb4a0b13a8"),
                    Search = "Mercedes C klasa",
                    UserId = Guid.Parse("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9")
                },
                new SavedSearch
                {
                    Id = Guid.Parse("de288baf-78ca-435d-b01b-57e98d84de4d"),
                    Search = "Zastava 101",
                    UserId = Guid.Parse("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9")
                },
                new SavedSearch
                {
                    Id = Guid.Parse("2507ea60-34bd-4a14-966c-533cd60b0f1b"),
                    Search = "Peugeot 206",
                    UserId = Guid.Parse("af19ba81-1376-4a55-b2f3-a0cb6782f491")
                },
                new SavedSearch
                {
                    Id = Guid.Parse("66809cf9-8021-4efb-a148-87cb2287da5b"),
                    Search = "BMW 5",
                    UserId = Guid.Parse("af19ba81-1376-4a55-b2f3-a0cb6782f491")
                },
                new SavedSearch
                {
                    Id = Guid.Parse("c6abb9e1-c82b-4de3-abd5-a5732a1a490b"),
                    Search = "Opel Astra",
                    UserId = Guid.Parse("998902da-c58d-4963-ae0d-39079971e5cd")
                },
                new SavedSearch
                {
                    Id = Guid.Parse("91b70203-f1d9-4523-83f5-0c4e14d99257"),
                    Search = "Audi A6",
                    UserId = Guid.Parse("998902da-c58d-4963-ae0d-39079971e5cd")
                }
            );
        });

        modelBuilder.Entity<User>(builder =>
        {
            builder.ToTable("Users");

            builder
                .HasMany(user => user.Cars)
                .WithOne()
                .HasForeignKey(car => car.UserId)
                .OnDelete(DeleteBehavior.Cascade)
                .IsRequired();

            builder
                .HasMany(user => user.SavedSearches)
                .WithOne()
                .HasForeignKey(savedSearch => savedSearch.UserId)
                .OnDelete(DeleteBehavior.Cascade)
                .IsRequired();

            builder.HasData(
                new User
                {
                    Id = Guid.Parse("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"),
                    FirstName = "Filip",
                    LastName = "Jovanovic",
                    Email = "filipj@gmail.com",
                    Phone = "number",
                    Password = "password1",
                    Role = Role.ADMIN
                },
                new User
                {
                    Id = Guid.Parse("af19ba81-1376-4a55-b2f3-a0cb6782f491"),
                    FirstName = "Danilo",
                    LastName = "Stevanovic",
                    Email = "danilos@gmail.com",
                    Phone = "number",
                    Password = "password2",
                    Role = Role.ADMIN
                },
                new User
                {
                    Id = Guid.Parse("998902da-c58d-4963-ae0d-39079971e5cd"),
                    FirstName = "Filip",
                    LastName = "Carovic",
                    Email = "filipc@gmail.com",
                    Phone = "number",
                    Password = "password3",
                    Role = Role.USER
                }
            );
        });
    }
}
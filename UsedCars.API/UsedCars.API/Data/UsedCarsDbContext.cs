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
                    Mark = "Citroen",
                    Model = "C4",
                    Year = 2009,
                    Mileage = 338692,
                    Price = 2800,
                    CarBody = "Hečbek",
                    DriveType = "Prednji",
                    GearboxType = "Manuelni 5 brzina",
                    Description = "Automobil ima domaće tablice, vodi se na prodavca i nije oštećen",
                    Approved = true,
                    UserId = Guid.Parse("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"),
                    Location = "Beograd"
                },
                new Car
                {
                    Id = Guid.Parse("f2646c1e-f0b3-48fb-9e8c-0e62411e9f30"),
                    Mark = "Volkswagen",
                    Model = "Golf 5",
                    Year = 2006,
                    Mileage = 222599,
                    Price = 4800,
                    CarBody = "Hečbek",
                    DriveType = "4x4",
                    GearboxType = "Manuelni 6 brzina",
                    Description = "Automobil ima domaće tablice, vodi se na prodavca i nije oštećen",
                    Approved = true,
                    UserId = Guid.Parse("af19ba81-1376-4a55-b2f3-a0cb6782f491"),
                    Location = "Niš"
                },
                new Car
                {
                    Id = Guid.Parse("cb578e76-d0b3-443d-9d2d-84afd5a1c8a4"),
                    Mark = "Volkswagen",
                    Model = "Passat B6",
                    Year = 2006,
                    Mileage = 275000,
                    Price = 5800,
                    CarBody = "Limuzina",
                    DriveType = "Prednji",
                    GearboxType = "Manuelni 6 brzina",
                    Description = "Automobil ima domaće tablice, vodi se na prodavca i nije oštećen",
                    Approved = true,
                    UserId = Guid.Parse("998902da-c58d-4963-ae0d-39079971e5cd"),
                    Location = "Novi Sad"
                },
                new Car
                {
                    Id = Guid.Parse("a37ad9b1-8975-450a-84c5-b49869d5b7c2"),
                    Mark = "Mercedes Benz",
                    Model = "B 200",
                    Year = 2007,
                    Mileage = 197000,
                    Price = 3999,
                    CarBody = "Hečbek",
                    DriveType = "Prednji",
                    GearboxType = "Manuelni 6 brzina",
                    Description = "Automobil nije registrovan, vodi se na prodavca i nije oštećen",
                    Approved = true,
                    UserId = Guid.Parse("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"),
                    Location = "Kragujevac"
                },
                new Car
                {
                    Id = Guid.Parse("de1f391e-ae6e-4697-94e6-1b5445c8214e"),
                    Mark = "Škoda",
                    Model = "Octavia",
                    Year = 2010,
                    Mileage = 169000,
                    Price = 4999,
                    CarBody = "Limuzina",
                    DriveType = "Prednji",
                    GearboxType = "Manuelni 6 brzina",
                    Description = "Automobil nije registrovan, vodi se na prodavca i nije oštećen",
                    Approved = true,
                    UserId = Guid.Parse("af19ba81-1376-4a55-b2f3-a0cb6782f491"),
                    Location = "Kragujevac"
                },
                new Car
                {
                    Id = Guid.Parse("351b2f6b-e575-4ed3-9e68-44da59482ef9"),
                    Mark = "Opel",
                    Model = "Corsa",
                    Year = 2005,
                    Mileage = 99000,
                    Price = 2999,
                    CarBody = "Hečbek",
                    DriveType = "Prednji",
                    GearboxType = "Manuelni 5 brzina",
                    Description = "Automobil nije registrovan, vodi se na prodavca i nije oštećen",
                    Approved = true,
                    UserId = Guid.Parse("998902da-c58d-4963-ae0d-39079971e5cd"),
                    Location = "Beograd"
                },
                new Car
                {
                    Id = Guid.Parse("edc2854e-5c2d-4e6b-8b80-e32f95611451"),
                    Mark = "Ford",
                    Model = "Focus",
                    Year = 2006,
                    Mileage = 190000,
                    Price = 2250,
                    CarBody = "Hečbek",
                    DriveType = "Prednji",
                    GearboxType = "Manuelni 5 brzina",
                    Description = "Automobil nije registrovan, vodi se na prodavca i nije oštećen",
                    Approved = true,
                    UserId = Guid.Parse("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"),
                    Location = "Kragujevac"
                },
                new Car
                {
                    Id = Guid.Parse("9d0eb38b-7835-491f-8ce9-7720e8368d8f"),
                    Mark = "Fiat",
                    Model = "Bravo",
                    Year = 2008,
                    Mileage = 220000,
                    Price = 3300,
                    CarBody = "Hečbek",
                    DriveType = "Prednji",
                    GearboxType = "Manuelni 5 brzina",
                    Description = "Automobil je registrovan, vodi se na prodavca i nije oštećen",
                    Approved = true,
                    UserId = Guid.Parse("af19ba81-1376-4a55-b2f3-a0cb6782f491"),
                    Location = "Novi Sad"
                },
                new Car
                {
                    Id = Guid.Parse("06b4e874-96a1-4031-9cb5-434d54d1b902"),
                    Mark = "BMW",
                    Model = "120",
                    Year = 2005,
                    Mileage = 180000,
                    Price = 4850,
                    CarBody = "Limuzina",
                    DriveType = "Zadnji",
                    GearboxType = "Manuelni 6 brzina",
                    Description = "Automobil je registrovan, vodi se na prodavca i nije oštećen",
                    Approved = true,
                    UserId = Guid.Parse("998902da-c58d-4963-ae0d-39079971e5cd"),
                    Location = "Kragujevac"
                },
                new Car
                {
                    Id = Guid.Parse("62a3299f-cdff-40d7-9fea-cf80da2503d2"),
                    Mark = "Peugeot",
                    Model = "407",
                    Year = 2007,
                    Mileage = 226000,
                    Price = 3450,
                    CarBody = "Hečbek",
                    DriveType = "Prednji",
                    GearboxType = "Manuelni 6 brzina",
                    Description = "Automobil je registrovan, vodi se na prodavca i nije oštećen",
                    Approved = true,
                    UserId = Guid.Parse("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"),
                    Location = "Niš"
                },
                new Car
                {
                    Id = Guid.Parse("32e7a3f5-92a6-483b-a953-e1641aaa8649"),
                    Mark = "Fiat",
                    Model = "EVO",
                    Year = 2011,
                    Mileage = 201350,
                    Price = 4450,
                    CarBody = "Hečbek",
                    DriveType = "Prednji",
                    GearboxType = "Manuelni 5 brzina",
                    Description = "Automobil nije registrovan, vodi se na prodavca i nije oštećen",
                    Approved = true,
                    UserId = Guid.Parse("af19ba81-1376-4a55-b2f3-a0cb6782f491"),
                    Location = "Beograd"
                },
                new Car
                {
                    Id = Guid.Parse("f4f0e37d-30fd-412f-ad77-0c618a78abbe"),
                    Mark = "Audi",
                    Model = "A4",
                    Year = 2003,
                    Mileage = 340000,
                    Price = 3350,
                    CarBody = "Limuzina",
                    DriveType = "Prednji",
                    GearboxType = "Manuelni 6 brzina",
                    Description = "Automobil je registrovan, vodi se na prodavca i nije oštećen",
                    Approved = true,
                    UserId = Guid.Parse("998902da-c58d-4963-ae0d-39079971e5cd"),
                    Location = "Niš"
                },
                new Car
                {
                    Id = Guid.Parse("fca90d2e-b548-486c-aafe-52ca64ea3bd9"),
                    Mark = "Mercedes Benz",
                    Model = "A 180",
                    Year = 2007,
                    Mileage = 213000,
                    Price = 3300,
                    CarBody = "Hečbek",
                    DriveType = "Prednji",
                    GearboxType = "Automatski",
                    Description = "Automobil je registrovan, vodi se na prodavca i nije oštećen",
                    Approved = true,
                    UserId = Guid.Parse("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"),
                    Location = "Kragujevac"
                },
                new Car
                {
                    Id = Guid.Parse("a81fdcdc-7815-4ccd-8883-165ca1abde2e"),
                    Mark = "Peugeot",
                    Model = "207",
                    Year = 2007,
                    Mileage = 250248,
                    Price = 2800,
                    CarBody = "Hečbek",
                    DriveType = "Prednji",
                    GearboxType = "Manuelni 5 brzina",
                    Description = "Automobil je registrovan, vodi se na prodavca i nije oštećen",
                    Approved = true,
                    UserId = Guid.Parse("af19ba81-1376-4a55-b2f3-a0cb6782f491"),
                    Location = "Niš"
                },
                new Car
                {
                    Id = Guid.Parse("bc272776-3e6f-4df2-b840-c79388b77794"),
                    Mark = "Ford",
                    Model = "Fiesta",
                    Year = 2010,
                    Mileage = 214000,
                    Price = 4390,
                    CarBody = "Hečbek",
                    DriveType = "Prednji",
                    GearboxType = "Manuelni 5 brzina",
                    Description = "Automobil nije registrovan, vodi se na prodavca i nije oštećen",
                    Approved = true,
                    UserId = Guid.Parse("998902da-c58d-4963-ae0d-39079971e5cd"),
                    Location = "Kragujevac"
                },
                new Car
                {
                    Id = Guid.Parse("d98d1cc7-9404-4895-8d22-b9c3d5ee39cd"),
                    Mark = "Citroen",
                    Model = "C3",
                    Year = 2005,
                    Mileage = 108454,
                    Price = 2190,
                    CarBody = "Hečbek",
                    DriveType = "Prednji",
                    GearboxType = "Manuelni 5 brzina",
                    Description = "Automobil nije registrovan, vodi se na prodavca i nije oštećen",
                    Approved = true,
                    UserId = Guid.Parse("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"),
                    Location = "Beograd"
                },
                new Car
                {
                    Id = Guid.Parse("788116b5-53cf-4c47-80b2-75a8406dae42"),
                    Mark = "Škoda",
                    Model = "Fabia",
                    Year = 2007,
                    Mileage = 198000,
                    Price = 3200,
                    CarBody = "Hečbek",
                    DriveType = "Prednji",
                    GearboxType = "Manuelni 5 brzina",
                    Description = "Automobil je registrovan, vodi se na prodavca i nije oštećen",
                    Approved = true,
                    UserId = Guid.Parse("af19ba81-1376-4a55-b2f3-a0cb6782f491"),
                    Location = "Novi Sad"
                },
                new Car
                {
                    Id = Guid.Parse("463798e9-705a-46fa-a184-727048fe76dc"),
                    Mark = "Opel",
                    Model = "Vectra",
                    Year = 2003,
                    Mileage = 195200,
                    Price = 1400,
                    CarBody = "Hečbek",
                    DriveType = "Prednji",
                    GearboxType = "Manuelni 5 brzina",
                    Description = "Automobil je registrovan, vodi se na prodavca i nije oštećen",
                    Approved = true,
                    UserId = Guid.Parse("998902da-c58d-4963-ae0d-39079971e5cd"),
                    Location = "Niš"
                },
                new Car
                {
                    Id = Guid.Parse("a9cc8f05-0998-4194-945b-f7998d0d15ec"),
                    Mark = "Audi",
                    Model = "A6",
                    Year = 2008,
                    Mileage = 243000,
                    Price = 4200,
                    CarBody = "Limuzina",
                    DriveType = "4x4",
                    GearboxType = "Automatski",
                    Description = "Automobil je registrovan, vodi se na prodavca i nije oštećen",
                    Approved = true,
                    UserId = Guid.Parse("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"),
                    Location = "Beograd"
                },
                new Car
                {
                    Id = Guid.Parse("64eb3dd8-6e42-4eec-aa14-d3461bb45530"),
                    Mark = "BMW",
                    Model = "320",
                    Year = 2006,
                    Mileage = 264000,
                    Price = 4550,
                    CarBody = "Limuzina",
                    DriveType = "Zadnji",
                    GearboxType = "Manuelni 6 brzina",
                    Description = "Automobil je registrovan, vodi se na prodavca i nije oštećen",
                    Approved = true,
                    UserId = Guid.Parse("af19ba81-1376-4a55-b2f3-a0cb6782f491"),
                    Location = "Kragujevac"
                },
                new Car
                {
                    Id = Guid.Parse("46ba5aec-5ca3-4095-9373-1a9e4c848ed4"),
                    Mark = "Fiat",
                    Model = "Punto",
                    Year = 2008,
                    Mileage = 158000,
                    Price = 2750,
                    CarBody = "Hečbek",
                    DriveType = "Prednji",
                    GearboxType = "Manuelni 5 brzina",
                    Description = "Automobil je registrovan, ne vodi se na prodavca i nije oštećen",
                    Approved = false,
                    UserId = Guid.Parse("998902da-c58d-4963-ae0d-39079971e5cd"),
                    Location = "Novi Sad"
                },
                new Car
                {
                    Id = Guid.Parse("ad0a8a56-db67-4c51-83fb-16a29fa887f7"),
                    Mark = "Volkswagen",
                    Model = "Polo",
                    Year = 2005,
                    Mileage = 205000,
                    Price = 2899,
                    CarBody = "Hečbek",
                    DriveType = "Prednji",
                    GearboxType = "Manuelni 5 brzina",
                    Description = "Automobil je registrovan, vodi se na prodavca i nije oštećen",
                    Approved = false,
                    UserId = Guid.Parse("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"),
                    Location = "Niš"
                },
                new Car
                {
                    Id = Guid.Parse("c7c96672-815e-4812-8e82-55675b77dfc2"),
                    Mark = "Škoda",
                    Model = "Superb",
                    Year = 2006,
                    Mileage = 400000,
                    Price = 1650,
                    CarBody = "Limuzina",
                    DriveType = "Prednji",
                    GearboxType = "Automatski",
                    Description = "Automobil je registrovan, vodi se na prodavca i nije oštećen",
                    Approved = false,
                    UserId = Guid.Parse("af19ba81-1376-4a55-b2f3-a0cb6782f491"),
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
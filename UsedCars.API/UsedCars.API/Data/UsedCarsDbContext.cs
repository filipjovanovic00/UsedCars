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
                    Path = "CitroenC4_1.jpg",
                    CarId = Guid.Parse("d4b69b30-dad4-4673-bc49-b44ef61dd933")
                },
                new Picture
                {
                    Id = Guid.Parse("641721fa-5687-4f73-b3a6-6057eb8911f9"),
                    Path = "CitroenC4_2.jpg",
                    CarId = Guid.Parse("d4b69b30-dad4-4673-bc49-b44ef61dd933")
                },
                new Picture
                {
                    Id = Guid.Parse("f13725a3-4f9b-4643-97fe-10531cb3e4de"),
                    Path = "VolkswagenGolf5_1.jpg",
                    CarId = Guid.Parse("f2646c1e-f0b3-48fb-9e8c-0e62411e9f30")
                },
                new Picture
                {
                    Id = Guid.Parse("77bfb1bc-2396-42e2-9efd-95147e56817c"),
                    Path = "VolkswagenGolf5_2.jpg",
                    CarId = Guid.Parse("f2646c1e-f0b3-48fb-9e8c-0e62411e9f30")
                },
                new Picture
                {
                    Id = Guid.Parse("85407744-2272-4c5f-929e-894f0e7ec415"),
                    Path = "VolkswagenPassatB6_1.jpg",
                    CarId = Guid.Parse("cb578e76-d0b3-443d-9d2d-84afd5a1c8a4")
                },
                new Picture
                {
                    Id = Guid.Parse("327f49ec-02a3-4622-acc1-92be863fa15f"),
                    Path = "VolkswagenPassatB6_2.jpg",
                    CarId = Guid.Parse("cb578e76-d0b3-443d-9d2d-84afd5a1c8a4")
                },
                new Picture
                {
                    Id = Guid.Parse("afb9c1eb-06f0-4817-acd9-0f2f7b55f329"),
                    Path = "MercedesB200_1.jpg",
                    CarId = Guid.Parse("a37ad9b1-8975-450a-84c5-b49869d5b7c2")
                },
                new Picture
                {
                    Id = Guid.Parse("221fe678-be97-478e-ac72-5f70ea048794"),
                    Path = "MercedesB200_2.jpg",
                    CarId = Guid.Parse("a37ad9b1-8975-450a-84c5-b49869d5b7c2")
                },
                new Picture
                {
                    Id = Guid.Parse("7c874b5b-babb-4c06-9cf5-5609e7cfd0bf"),
                    Path = "SkodaOctavia_1.jpg",
                    CarId = Guid.Parse("de1f391e-ae6e-4697-94e6-1b5445c8214e")
                },
                new Picture
                {
                    Id = Guid.Parse("11590676-664c-49d9-bac7-5ccbe738b85a"),
                    Path = "SkodaOctavia_2.jpg",
                    CarId = Guid.Parse("de1f391e-ae6e-4697-94e6-1b5445c8214e")
                },
                new Picture
                {
                    Id = Guid.Parse("980fcc8e-0d4d-4f24-bed5-ab9c6bc89fdd"),
                    Path = "OpelCorsa_1.jpg",
                    CarId = Guid.Parse("351b2f6b-e575-4ed3-9e68-44da59482ef9")
                },
                new Picture
                {
                    Id = Guid.Parse("e93924f6-f1e2-479a-a043-47c1cbd96d0f"),
                    Path = "OpelCorsa_2.jpg",
                    CarId = Guid.Parse("351b2f6b-e575-4ed3-9e68-44da59482ef9")
                },
                new Picture
                {
                    Id = Guid.Parse("82be7d9e-453e-4dc1-bd88-89221cfaf78c"),
                    Path = "FordFocus_1.jpg",
                    CarId = Guid.Parse("edc2854e-5c2d-4e6b-8b80-e32f95611451")
                },
                new Picture
                {
                    Id = Guid.Parse("64aea604-2d78-4469-be33-41d76a7eb84b"),
                    Path = "FordFocus_2.jpg",
                    CarId = Guid.Parse("edc2854e-5c2d-4e6b-8b80-e32f95611451")
                },
                new Picture
                {
                    Id = Guid.Parse("1509d074-de3c-476c-9f15-c8fe941c84d4"),
                    Path = "FiatBravo_1.jpg",
                    CarId = Guid.Parse("9d0eb38b-7835-491f-8ce9-7720e8368d8f")
                },
                new Picture
                {
                    Id = Guid.Parse("674bd15f-18ae-4e2d-9e01-3a3ef396bf7d"),
                    Path = "FiatBravo_2.jpg",
                    CarId = Guid.Parse("9d0eb38b-7835-491f-8ce9-7720e8368d8f")
                },
                new Picture
                {
                    Id = Guid.Parse("a80788c6-f594-4bc7-8de1-d67ee2c5c675"),
                    Path = "BMW120_1.jpg",
                    CarId = Guid.Parse("06b4e874-96a1-4031-9cb5-434d54d1b902")
                },
                new Picture
                {
                    Id = Guid.Parse("f4b204f2-9a73-45a3-b8eb-42b653661415"),
                    Path = "BMW120_2.jpg",
                    CarId = Guid.Parse("06b4e874-96a1-4031-9cb5-434d54d1b902")
                },
                new Picture
                {
                    Id = Guid.Parse("8360b702-b170-45ca-ad7d-835c0cab680c"),
                    Path = "Peugeot407_1.jpg",
                    CarId = Guid.Parse("62a3299f-cdff-40d7-9fea-cf80da2503d2")
                },
                new Picture
                {
                    Id = Guid.Parse("eeb3cd0b-07fa-47de-8545-882d4c8a6e5d"),
                    Path = "Peugeot407_2.jpg",
                    CarId = Guid.Parse("62a3299f-cdff-40d7-9fea-cf80da2503d2")
                },
                new Picture
                {
                    Id = Guid.Parse("2a6fa3ac-afca-4ae5-be38-1c7c91ccca39"),
                    Path = "FiatEVO_1.jpg",
                    CarId = Guid.Parse("32e7a3f5-92a6-483b-a953-e1641aaa8649")
                },
                new Picture
                {
                    Id = Guid.Parse("26a9b486-47ce-4529-af40-f8092be522dd"),
                    Path = "FiatEVO_2.jpg",
                    CarId = Guid.Parse("32e7a3f5-92a6-483b-a953-e1641aaa8649")
                },
                new Picture
                {
                    Id = Guid.Parse("48f47ea4-8642-4a34-b2e8-95774ad5f43a"),
                    Path = "AudiA4_1.jpg",
                    CarId = Guid.Parse("f4f0e37d-30fd-412f-ad77-0c618a78abbe")
                },
                new Picture
                {
                    Id = Guid.Parse("9a03be7b-e827-4dc6-a59f-abe1b8e7a3f3"),
                    Path = "AudiA4_2.jpg",
                    CarId = Guid.Parse("f4f0e37d-30fd-412f-ad77-0c618a78abbe")
                },
                new Picture
                {
                    Id = Guid.Parse("af8815b4-fc85-4863-b9c4-0a2b93fa6ea9"),
                    Path = "MercedesA180_1.jpg",
                    CarId = Guid.Parse("fca90d2e-b548-486c-aafe-52ca64ea3bd9")
                },
                new Picture
                {
                    Id = Guid.Parse("33ce14f6-82c6-4893-b36b-83b41c12c4a4"),
                    Path = "MercedesA180_2.jpg",
                    CarId = Guid.Parse("fca90d2e-b548-486c-aafe-52ca64ea3bd9")
                },
                new Picture
                {
                    Id = Guid.Parse("6ac59c15-7591-42f6-ac6c-266a4a33661e"),
                    Path = "Peugeot207_1.jpg",
                    CarId = Guid.Parse("a81fdcdc-7815-4ccd-8883-165ca1abde2e")
                },
                new Picture
                {
                    Id = Guid.Parse("8b280c20-fead-4665-88ec-c75aa34b98df"),
                    Path = "Peugeot207_2.jpg",
                    CarId = Guid.Parse("a81fdcdc-7815-4ccd-8883-165ca1abde2e")
                },
                new Picture
                {
                    Id = Guid.Parse("914fd5d1-0042-4ba9-98a4-26df84310c55"),
                    Path = "FordFiesta_1.jpg",
                    CarId = Guid.Parse("bc272776-3e6f-4df2-b840-c79388b77794")
                },
                new Picture
                {
                    Id = Guid.Parse("cd50526a-a0d5-4664-8349-5e0a1a314d14"),
                    Path = "FordFiesta_2.jpg",
                    CarId = Guid.Parse("bc272776-3e6f-4df2-b840-c79388b77794")
                },
                new Picture
                {
                    Id = Guid.Parse("96183982-0373-45a0-97ff-a957b10738f2"),
                    Path = "CitroenC3_1.jpg",
                    CarId = Guid.Parse("d98d1cc7-9404-4895-8d22-b9c3d5ee39cd")
                },
                new Picture
                {
                    Id = Guid.Parse("e76777ef-d413-41b2-8b2e-0e4ab04c7a39"),
                    Path = "CitroenC3_2.jpg",
                    CarId = Guid.Parse("d98d1cc7-9404-4895-8d22-b9c3d5ee39cd")
                },
                new Picture
                {
                    Id = Guid.Parse("7bd2e428-5472-4d6d-a650-b4b74b97c1d7"),
                    Path = "SkodaFabia_1.jpg",
                    CarId = Guid.Parse("788116b5-53cf-4c47-80b2-75a8406dae42")
                },
                new Picture
                {
                    Id = Guid.Parse("5e944dd4-2886-43b6-a062-1c72b4488545"),
                    Path = "SkodaFabia_2.jpg",
                    CarId = Guid.Parse("788116b5-53cf-4c47-80b2-75a8406dae42")
                },
                new Picture
                {
                    Id = Guid.Parse("0dab3936-35f1-4aab-94ce-fbc50adc7352"),
                    Path = "OpelVectra_1.jpg",
                    CarId = Guid.Parse("463798e9-705a-46fa-a184-727048fe76dc")
                },
                new Picture
                {
                    Id = Guid.Parse("83f3d38a-f170-487c-9548-fea1cb9ab62e"),
                    Path = "OpelVectra_2.jpg",
                    CarId = Guid.Parse("463798e9-705a-46fa-a184-727048fe76dc")
                },
                new Picture
                {
                    Id = Guid.Parse("84bce782-f2c0-434c-8ec4-51533e987ede"),
                    Path = "AudiA6_1.jpg",
                    CarId = Guid.Parse("a9cc8f05-0998-4194-945b-f7998d0d15ec")
                },
                new Picture
                {
                    Id = Guid.Parse("aba672e1-9170-4cfb-965d-80d60c97ba81"),
                    Path = "AudiA6_2.jpg",
                    CarId = Guid.Parse("a9cc8f05-0998-4194-945b-f7998d0d15ec")
                },
                new Picture
                {
                    Id = Guid.Parse("aaa8a1f3-bbc5-49c0-9f01-71c92941f00f"),
                    Path = "BMW320_1.jpg",
                    CarId = Guid.Parse("64eb3dd8-6e42-4eec-aa14-d3461bb45530")
                },
                new Picture
                {
                    Id = Guid.Parse("479b2630-7fbb-48fe-b3cd-b06718b607c8"),
                    Path = "BMW320_2.jpg",
                    CarId = Guid.Parse("64eb3dd8-6e42-4eec-aa14-d3461bb45530")
                },
                new Picture
                {
                    Id = Guid.Parse("e24679be-4df3-4963-afc6-f3b97fd4f109"),
                    Path = "FiatPunto_1.jpg",
                    CarId = Guid.Parse("46ba5aec-5ca3-4095-9373-1a9e4c848ed4")
                },
                new Picture
                {
                    Id = Guid.Parse("323a26b2-23e3-48d7-a9b8-1fa7c83670d9"),
                    Path = "FiatPunto_2.jpg",
                    CarId = Guid.Parse("46ba5aec-5ca3-4095-9373-1a9e4c848ed4")
                },
                new Picture
                {
                    Id = Guid.Parse("5799af10-e247-4a0a-9ff0-6933a664508c"),
                    Path = "VolkswagenPolo_1.jpg",
                    CarId = Guid.Parse("ad0a8a56-db67-4c51-83fb-16a29fa887f7")
                },
                new Picture
                {
                    Id = Guid.Parse("713d5a48-d164-4dc8-b9db-4fcfa94acd25"),
                    Path = "VolkswagenPolo_2.jpg",
                    CarId = Guid.Parse("ad0a8a56-db67-4c51-83fb-16a29fa887f7")
                },
                new Picture
                {
                    Id = Guid.Parse("6335115d-bf1c-4b2e-82ee-8d9590067a70"),
                    Path = "SkodaSuperb_1.jpg",
                    CarId = Guid.Parse("c7c96672-815e-4812-8e82-55675b77dfc2")
                },
                new Picture
                {
                    Id = Guid.Parse("8b4ca865-4233-4d06-8513-2337c1af4ed9"),
                    Path = "SkodaSuperb_2.jpg",
                    CarId = Guid.Parse("c7c96672-815e-4812-8e82-55675b77dfc2")
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
                    Phone = "062 3856 142",
                    Password = "password1",
                    Role = Role.ADMIN
                },
                new User
                {
                    Id = Guid.Parse("af19ba81-1376-4a55-b2f3-a0cb6782f491"),
                    FirstName = "Danilo",
                    LastName = "Stevanovic",
                    Email = "danilos@gmail.com",
                    Phone = "065 9934 376",
                    Password = "password2",
                    Role = Role.ADMIN
                },
                new User
                {
                    Id = Guid.Parse("998902da-c58d-4963-ae0d-39079971e5cd"),
                    FirstName = "Filip",
                    LastName = "Carovic",
                    Email = "filipc@gmail.com",
                    Phone = "060 9603 672",
                    Password = "password3",
                    Role = Role.USER
                }
            );
        });
    }
}
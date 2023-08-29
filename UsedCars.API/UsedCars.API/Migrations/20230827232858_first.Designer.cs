﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using UsedCars.API.Data;

#nullable disable

namespace UsedCars.API.Migrations
{
    [DbContext(typeof(UsedCarsDbContext))]
    [Migration("20230827232858_first")]
    partial class first
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("UsedCarsWebApi.Models.Car", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<bool>("Approved")
                        .HasColumnType("bit");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DriveType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("GearboxType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Location")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Mark")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("Mileage")
                        .HasColumnType("bigint");

                    b.Property<string>("Model")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,2)");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("Year")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Cars", (string)null);

                    b.HasData(
                        new
                        {
                            Id = new Guid("d4b69b30-dad4-4673-bc49-b44ef61dd933"),
                            Approved = true,
                            Description = "Automobil ima domaće tablice, vodi se na prodavca i nije oštećen",
                            DriveType = "Prednji",
                            GearboxType = "Manuelni 5 brzina",
                            Location = "Beograd",
                            Mark = "Citroen",
                            Mileage = 338692L,
                            Model = "C4",
                            Price = 2800m,
                            UserId = new Guid("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"),
                            Year = 2009
                        },
                        new
                        {
                            Id = new Guid("f2646c1e-f0b3-48fb-9e8c-0e62411e9f30"),
                            Approved = true,
                            Description = "Automobil ima domaće tablice, vodi se na prodavca i nije oštećen",
                            DriveType = "4x4",
                            GearboxType = "Manuelni 6 brzina",
                            Location = "Niš",
                            Mark = "Volkswagen",
                            Mileage = 222599L,
                            Model = "Golf 5",
                            Price = 4800m,
                            UserId = new Guid("af19ba81-1376-4a55-b2f3-a0cb6782f491"),
                            Year = 2006
                        },
                        new
                        {
                            Id = new Guid("cb578e76-d0b3-443d-9d2d-84afd5a1c8a4"),
                            Approved = true,
                            Description = "Automobil ima domaće tablice, vodi se na prodavca i nije oštećen",
                            DriveType = "Prednji",
                            GearboxType = "Manuelni 6 brzina",
                            Location = "Novi Sad",
                            Mark = "Volkswagen",
                            Mileage = 275000L,
                            Model = "Passat B6",
                            Price = 5800m,
                            UserId = new Guid("998902da-c58d-4963-ae0d-39079971e5cd"),
                            Year = 2006
                        },
                        new
                        {
                            Id = new Guid("a37ad9b1-8975-450a-84c5-b49869d5b7c2"),
                            Approved = true,
                            Description = "Automobil nije registrovan, vodi se na prodavca i nije oštećen",
                            DriveType = "Prednji",
                            GearboxType = "Manuelni 6 brzina",
                            Location = "Kragujevac",
                            Mark = "Mercedes Benz",
                            Mileage = 197000L,
                            Model = "B 200",
                            Price = 3999m,
                            UserId = new Guid("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"),
                            Year = 2007
                        },
                        new
                        {
                            Id = new Guid("de1f391e-ae6e-4697-94e6-1b5445c8214e"),
                            Approved = true,
                            Description = "Automobil nije registrovan, vodi se na prodavca i nije oštećen",
                            DriveType = "Prednji",
                            GearboxType = "Manuelni 6 brzina",
                            Location = "Kragujevac",
                            Mark = "Škoda",
                            Mileage = 169000L,
                            Model = "Octavia",
                            Price = 4999m,
                            UserId = new Guid("af19ba81-1376-4a55-b2f3-a0cb6782f491"),
                            Year = 2010
                        },
                        new
                        {
                            Id = new Guid("351b2f6b-e575-4ed3-9e68-44da59482ef9"),
                            Approved = true,
                            Description = "Automobil nije registrovan, vodi se na prodavca i nije oštećen",
                            DriveType = "Prednji",
                            GearboxType = "Manuelni 5 brzina",
                            Location = "Beograd",
                            Mark = "Opel",
                            Mileage = 99000L,
                            Model = "Corsa",
                            Price = 2999m,
                            UserId = new Guid("998902da-c58d-4963-ae0d-39079971e5cd"),
                            Year = 2005
                        },
                        new
                        {
                            Id = new Guid("edc2854e-5c2d-4e6b-8b80-e32f95611451"),
                            Approved = true,
                            Description = "Automobil nije registrovan, vodi se na prodavca i nije oštećen",
                            DriveType = "Prednji",
                            GearboxType = "Manuelni 5 brzina",
                            Location = "Kragujevac",
                            Mark = "Ford",
                            Mileage = 190000L,
                            Model = "Focus",
                            Price = 2250m,
                            UserId = new Guid("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"),
                            Year = 2006
                        },
                        new
                        {
                            Id = new Guid("9d0eb38b-7835-491f-8ce9-7720e8368d8f"),
                            Approved = true,
                            Description = "Automobil je registrovan, vodi se na prodavca i nije oštećen",
                            DriveType = "Prednji",
                            GearboxType = "Manuelni 5 brzina",
                            Location = "Novi Sad",
                            Mark = "Fiat",
                            Mileage = 220000L,
                            Model = "Bravo",
                            Price = 3300m,
                            UserId = new Guid("af19ba81-1376-4a55-b2f3-a0cb6782f491"),
                            Year = 2008
                        },
                        new
                        {
                            Id = new Guid("06b4e874-96a1-4031-9cb5-434d54d1b902"),
                            Approved = true,
                            Description = "Automobil je registrovan, vodi se na prodavca i nije oštećen",
                            DriveType = "Zadnji",
                            GearboxType = "Manuelni 6 brzina",
                            Location = "Kragujevac",
                            Mark = "BMW",
                            Mileage = 180000L,
                            Model = "120",
                            Price = 4850m,
                            UserId = new Guid("998902da-c58d-4963-ae0d-39079971e5cd"),
                            Year = 2005
                        },
                        new
                        {
                            Id = new Guid("62a3299f-cdff-40d7-9fea-cf80da2503d2"),
                            Approved = true,
                            Description = "Automobil je registrovan, vodi se na prodavca i nije oštećen",
                            DriveType = "Prednji",
                            GearboxType = "Manuelni 6 brzina",
                            Location = "Niš",
                            Mark = "Peugeot",
                            Mileage = 226000L,
                            Model = "407",
                            Price = 3450m,
                            UserId = new Guid("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"),
                            Year = 2007
                        },
                        new
                        {
                            Id = new Guid("32e7a3f5-92a6-483b-a953-e1641aaa8649"),
                            Approved = true,
                            Description = "Automobil nije registrovan, vodi se na prodavca i nije oštećen",
                            DriveType = "Prednji",
                            GearboxType = "Manuelni 5 brzina",
                            Location = "Beograd",
                            Mark = "Fiat",
                            Mileage = 201350L,
                            Model = "EVO",
                            Price = 4450m,
                            UserId = new Guid("af19ba81-1376-4a55-b2f3-a0cb6782f491"),
                            Year = 2011
                        },
                        new
                        {
                            Id = new Guid("f4f0e37d-30fd-412f-ad77-0c618a78abbe"),
                            Approved = true,
                            Description = "Automobil je registrovan, vodi se na prodavca i nije oštećen",
                            DriveType = "Prednji",
                            GearboxType = "Manuelni 6 brzina",
                            Location = "Niš",
                            Mark = "Audi",
                            Mileage = 340000L,
                            Model = "A4",
                            Price = 3350m,
                            UserId = new Guid("998902da-c58d-4963-ae0d-39079971e5cd"),
                            Year = 2003
                        },
                        new
                        {
                            Id = new Guid("fca90d2e-b548-486c-aafe-52ca64ea3bd9"),
                            Approved = true,
                            Description = "Automobil je registrovan, vodi se na prodavca i nije oštećen",
                            DriveType = "Prednji",
                            GearboxType = "Automatski",
                            Location = "Kragujevac",
                            Mark = "Mercedes Benz",
                            Mileage = 213000L,
                            Model = "A 180",
                            Price = 3300m,
                            UserId = new Guid("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"),
                            Year = 2007
                        },
                        new
                        {
                            Id = new Guid("a81fdcdc-7815-4ccd-8883-165ca1abde2e"),
                            Approved = true,
                            Description = "Automobil je registrovan, vodi se na prodavca i nije oštećen",
                            DriveType = "Prednji",
                            GearboxType = "Manuelni 5 brzina",
                            Location = "Niš",
                            Mark = "Peugeot",
                            Mileage = 250248L,
                            Model = "207",
                            Price = 2800m,
                            UserId = new Guid("af19ba81-1376-4a55-b2f3-a0cb6782f491"),
                            Year = 2007
                        },
                        new
                        {
                            Id = new Guid("bc272776-3e6f-4df2-b840-c79388b77794"),
                            Approved = true,
                            Description = "Automobil nije registrovan, vodi se na prodavca i nije oštećen",
                            DriveType = "Prednji",
                            GearboxType = "Manuelni 5 brzina",
                            Location = "Kragujevac",
                            Mark = "Ford",
                            Mileage = 214000L,
                            Model = "Fiesta",
                            Price = 4390m,
                            UserId = new Guid("998902da-c58d-4963-ae0d-39079971e5cd"),
                            Year = 2010
                        },
                        new
                        {
                            Id = new Guid("d98d1cc7-9404-4895-8d22-b9c3d5ee39cd"),
                            Approved = true,
                            Description = "Automobil nije registrovan, vodi se na prodavca i nije oštećen",
                            DriveType = "Prednji",
                            GearboxType = "Manuelni 5 brzina",
                            Location = "Beograd",
                            Mark = "Citroen",
                            Mileage = 108454L,
                            Model = "C3",
                            Price = 2190m,
                            UserId = new Guid("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"),
                            Year = 2005
                        },
                        new
                        {
                            Id = new Guid("788116b5-53cf-4c47-80b2-75a8406dae42"),
                            Approved = true,
                            Description = "Automobil je registrovan, vodi se na prodavca i nije oštećen",
                            DriveType = "Prednji",
                            GearboxType = "Manuelni 5 brzina",
                            Location = "Novi Sad",
                            Mark = "Škoda",
                            Mileage = 198000L,
                            Model = "Fabia",
                            Price = 3200m,
                            UserId = new Guid("af19ba81-1376-4a55-b2f3-a0cb6782f491"),
                            Year = 2007
                        },
                        new
                        {
                            Id = new Guid("463798e9-705a-46fa-a184-727048fe76dc"),
                            Approved = true,
                            Description = "Automobil je registrovan, vodi se na prodavca i nije oštećen",
                            DriveType = "Prednji",
                            GearboxType = "Manuelni 5 brzina",
                            Location = "Niš",
                            Mark = "Opel",
                            Mileage = 195200L,
                            Model = "Vectra",
                            Price = 1400m,
                            UserId = new Guid("998902da-c58d-4963-ae0d-39079971e5cd"),
                            Year = 2003
                        },
                        new
                        {
                            Id = new Guid("a9cc8f05-0998-4194-945b-f7998d0d15ec"),
                            Approved = true,
                            Description = "Automobil je registrovan, vodi se na prodavca i nije oštećen",
                            DriveType = "4x4",
                            GearboxType = "Automatski",
                            Location = "Beograd",
                            Mark = "Audi",
                            Mileage = 243000L,
                            Model = "A6",
                            Price = 4200m,
                            UserId = new Guid("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"),
                            Year = 2008
                        },
                        new
                        {
                            Id = new Guid("64eb3dd8-6e42-4eec-aa14-d3461bb45530"),
                            Approved = true,
                            Description = "Automobil je registrovan, vodi se na prodavca i nije oštećen",
                            DriveType = "Zadnji",
                            GearboxType = "Manuelni 6 brzina",
                            Location = "Kragujevac",
                            Mark = "BMW",
                            Mileage = 264000L,
                            Model = "320",
                            Price = 4550m,
                            UserId = new Guid("af19ba81-1376-4a55-b2f3-a0cb6782f491"),
                            Year = 2006
                        },
                        new
                        {
                            Id = new Guid("46ba5aec-5ca3-4095-9373-1a9e4c848ed4"),
                            Approved = false,
                            Description = "Automobil je registrovan, ne vodi se na prodavca i nije oštećen",
                            DriveType = "Prednji",
                            GearboxType = "Manuelni 5 brzina",
                            Location = "Novi Sad",
                            Mark = "Fiat",
                            Mileage = 158000L,
                            Model = "Punto",
                            Price = 2750m,
                            UserId = new Guid("998902da-c58d-4963-ae0d-39079971e5cd"),
                            Year = 2008
                        },
                        new
                        {
                            Id = new Guid("ad0a8a56-db67-4c51-83fb-16a29fa887f7"),
                            Approved = false,
                            Description = "Automobil je registrovan, vodi se na prodavca i nije oštećen",
                            DriveType = "Prednji",
                            GearboxType = "Manuelni 5 brzina",
                            Location = "Niš",
                            Mark = "Volkswagen",
                            Mileage = 205000L,
                            Model = "Polo",
                            Price = 2899m,
                            UserId = new Guid("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"),
                            Year = 2005
                        },
                        new
                        {
                            Id = new Guid("c7c96672-815e-4812-8e82-55675b77dfc2"),
                            Approved = false,
                            Description = "Automobil je registrovan, vodi se na prodavca i nije oštećen",
                            DriveType = "Prednji",
                            GearboxType = "Automatski",
                            Location = "Kragujevac",
                            Mark = "Škoda",
                            Mileage = 400000L,
                            Model = "Superb",
                            Price = 1650m,
                            UserId = new Guid("af19ba81-1376-4a55-b2f3-a0cb6782f491"),
                            Year = 2006
                        });
                });

            modelBuilder.Entity("UsedCarsWebApi.Models.Picture", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("CarId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Path")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("CarId");

                    b.ToTable("Pictures", (string)null);

                    b.HasData(
                        new
                        {
                            Id = new Guid("f7ba02e3-74fa-4ffb-9659-a6fef0ec9c97"),
                            CarId = new Guid("d4b69b30-dad4-4673-bc49-b44ef61dd933"),
                            Path = "path"
                        },
                        new
                        {
                            Id = new Guid("641721fa-5687-4f73-b3a6-6057eb8911f9"),
                            CarId = new Guid("f2646c1e-f0b3-48fb-9e8c-0e62411e9f30"),
                            Path = "path"
                        },
                        new
                        {
                            Id = new Guid("f13725a3-4f9b-4643-97fe-10531cb3e4de"),
                            CarId = new Guid("cb578e76-d0b3-443d-9d2d-84afd5a1c8a4"),
                            Path = "path"
                        },
                        new
                        {
                            Id = new Guid("77bfb1bc-2396-42e2-9efd-95147e56817c"),
                            CarId = new Guid("a37ad9b1-8975-450a-84c5-b49869d5b7c2"),
                            Path = "path"
                        },
                        new
                        {
                            Id = new Guid("85407744-2272-4c5f-929e-894f0e7ec415"),
                            CarId = new Guid("de1f391e-ae6e-4697-94e6-1b5445c8214e"),
                            Path = "path"
                        },
                        new
                        {
                            Id = new Guid("327f49ec-02a3-4622-acc1-92be863fa15f"),
                            CarId = new Guid("351b2f6b-e575-4ed3-9e68-44da59482ef9"),
                            Path = "path"
                        });
                });

            modelBuilder.Entity("UsedCarsWebApi.Models.SavedSearch", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Search")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("SavedSearches", (string)null);

                    b.HasData(
                        new
                        {
                            Id = new Guid("12a2e457-aed3-4350-a2c9-efdb4a0b13a8"),
                            Search = "Mercedes C klasa",
                            UserId = new Guid("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9")
                        },
                        new
                        {
                            Id = new Guid("de288baf-78ca-435d-b01b-57e98d84de4d"),
                            Search = "Zastava 101",
                            UserId = new Guid("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9")
                        },
                        new
                        {
                            Id = new Guid("2507ea60-34bd-4a14-966c-533cd60b0f1b"),
                            Search = "Peugeot 206",
                            UserId = new Guid("af19ba81-1376-4a55-b2f3-a0cb6782f491")
                        },
                        new
                        {
                            Id = new Guid("66809cf9-8021-4efb-a148-87cb2287da5b"),
                            Search = "BMW 5",
                            UserId = new Guid("af19ba81-1376-4a55-b2f3-a0cb6782f491")
                        },
                        new
                        {
                            Id = new Guid("c6abb9e1-c82b-4de3-abd5-a5732a1a490b"),
                            Search = "Opel Astra",
                            UserId = new Guid("998902da-c58d-4963-ae0d-39079971e5cd")
                        },
                        new
                        {
                            Id = new Guid("91b70203-f1d9-4523-83f5-0c4e14d99257"),
                            Search = "Audi A6",
                            UserId = new Guid("998902da-c58d-4963-ae0d-39079971e5cd")
                        });
                });

            modelBuilder.Entity("UsedCarsWebApi.Models.User", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Role")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Users", (string)null);

                    b.HasData(
                        new
                        {
                            Id = new Guid("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"),
                            Email = "filipj@gmail.com",
                            FirstName = "Filip",
                            LastName = "Jovanovic",
                            Password = "password1",
                            Phone = "number",
                            Role = 1
                        },
                        new
                        {
                            Id = new Guid("af19ba81-1376-4a55-b2f3-a0cb6782f491"),
                            Email = "danilos@gmail.com",
                            FirstName = "Danilo",
                            LastName = "Stevanovic",
                            Password = "password2",
                            Phone = "number",
                            Role = 1
                        },
                        new
                        {
                            Id = new Guid("998902da-c58d-4963-ae0d-39079971e5cd"),
                            Email = "filipc@gmail.com",
                            FirstName = "Filip",
                            LastName = "Carovic",
                            Password = "password3",
                            Phone = "number",
                            Role = 0
                        });
                });

            modelBuilder.Entity("UsedCarsWebApi.Models.Car", b =>
                {
                    b.HasOne("UsedCarsWebApi.Models.User", null)
                        .WithMany("Cars")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("UsedCarsWebApi.Models.Picture", b =>
                {
                    b.HasOne("UsedCarsWebApi.Models.Car", null)
                        .WithMany("Pictures")
                        .HasForeignKey("CarId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("UsedCarsWebApi.Models.SavedSearch", b =>
                {
                    b.HasOne("UsedCarsWebApi.Models.User", null)
                        .WithMany("SavedSearches")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("UsedCarsWebApi.Models.Car", b =>
                {
                    b.Navigation("Pictures");
                });

            modelBuilder.Entity("UsedCarsWebApi.Models.User", b =>
                {
                    b.Navigation("Cars");

                    b.Navigation("SavedSearches");
                });
#pragma warning restore 612, 618
        }
    }
}
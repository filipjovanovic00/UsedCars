using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace UsedCars.API.Migrations
{
    /// <inheritdoc />
    public partial class first : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Role = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Cars",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Mark = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Model = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Year = table.Column<int>(type: "int", nullable: false),
                    Mileage = table.Column<long>(type: "bigint", nullable: false),
                    Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    DriveType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    GearboxType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Location = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Approved = table.Column<bool>(type: "bit", nullable: false),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cars", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Cars_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SavedSearches",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Search = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SavedSearches", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SavedSearches_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Pictures",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Path = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CarId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pictures", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Pictures_Cars_CarId",
                        column: x => x.CarId,
                        principalTable: "Cars",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "FirstName", "LastName", "Password", "Phone", "Role" },
                values: new object[,]
                {
                    { new Guid("998902da-c58d-4963-ae0d-39079971e5cd"), "filipc@gmail.com", "Filip", "Carovic", "password3", "number", 0 },
                    { new Guid("af19ba81-1376-4a55-b2f3-a0cb6782f491"), "danilos@gmail.com", "Danilo", "Stevanovic", "password2", "number", 1 },
                    { new Guid("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"), "filipj@gmail.com", "Filip", "Jovanovic", "password1", "number", 1 }
                });

            migrationBuilder.InsertData(
                table: "Cars",
                columns: new[] { "Id", "Approved", "Description", "DriveType", "GearboxType", "Location", "Mark", "Mileage", "Model", "Price", "UserId", "Year" },
                values: new object[,]
                {
                    { new Guid("06b4e874-96a1-4031-9cb5-434d54d1b902"), true, "Automobil je registrovan, vodi se na prodavca i nije oštećen", "Zadnji", "Manuelni 6 brzina", "Kragujevac", "BMW", 180000L, "120", 4850m, new Guid("998902da-c58d-4963-ae0d-39079971e5cd"), 2005 },
                    { new Guid("32e7a3f5-92a6-483b-a953-e1641aaa8649"), true, "Automobil nije registrovan, vodi se na prodavca i nije oštećen", "Prednji", "Manuelni 5 brzina", "Beograd", "Fiat", 201350L, "EVO", 4450m, new Guid("af19ba81-1376-4a55-b2f3-a0cb6782f491"), 2011 },
                    { new Guid("351b2f6b-e575-4ed3-9e68-44da59482ef9"), true, "Automobil nije registrovan, vodi se na prodavca i nije oštećen", "Prednji", "Manuelni 5 brzina", "Beograd", "Opel", 99000L, "Corsa", 2999m, new Guid("998902da-c58d-4963-ae0d-39079971e5cd"), 2005 },
                    { new Guid("463798e9-705a-46fa-a184-727048fe76dc"), true, "Automobil je registrovan, vodi se na prodavca i nije oštećen", "Prednji", "Manuelni 5 brzina", "Niš", "Opel", 195200L, "Vectra", 1400m, new Guid("998902da-c58d-4963-ae0d-39079971e5cd"), 2003 },
                    { new Guid("46ba5aec-5ca3-4095-9373-1a9e4c848ed4"), false, "Automobil je registrovan, ne vodi se na prodavca i nije oštećen", "Prednji", "Manuelni 5 brzina", "Novi Sad", "Fiat", 158000L, "Punto", 2750m, new Guid("998902da-c58d-4963-ae0d-39079971e5cd"), 2008 },
                    { new Guid("62a3299f-cdff-40d7-9fea-cf80da2503d2"), true, "Automobil je registrovan, vodi se na prodavca i nije oštećen", "Prednji", "Manuelni 6 brzina", "Niš", "Peugeot", 226000L, "407", 3450m, new Guid("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"), 2007 },
                    { new Guid("64eb3dd8-6e42-4eec-aa14-d3461bb45530"), true, "Automobil je registrovan, vodi se na prodavca i nije oštećen", "Zadnji", "Manuelni 6 brzina", "Kragujevac", "BMW", 264000L, "320", 4550m, new Guid("af19ba81-1376-4a55-b2f3-a0cb6782f491"), 2006 },
                    { new Guid("788116b5-53cf-4c47-80b2-75a8406dae42"), true, "Automobil je registrovan, vodi se na prodavca i nije oštećen", "Prednji", "Manuelni 5 brzina", "Novi Sad", "Škoda", 198000L, "Fabia", 3200m, new Guid("af19ba81-1376-4a55-b2f3-a0cb6782f491"), 2007 },
                    { new Guid("9d0eb38b-7835-491f-8ce9-7720e8368d8f"), true, "Automobil je registrovan, vodi se na prodavca i nije oštećen", "Prednji", "Manuelni 5 brzina", "Novi Sad", "Fiat", 220000L, "Bravo", 3300m, new Guid("af19ba81-1376-4a55-b2f3-a0cb6782f491"), 2008 },
                    { new Guid("a37ad9b1-8975-450a-84c5-b49869d5b7c2"), true, "Automobil nije registrovan, vodi se na prodavca i nije oštećen", "Prednji", "Manuelni 6 brzina", "Kragujevac", "Mercedes Benz", 197000L, "B 200", 3999m, new Guid("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"), 2007 },
                    { new Guid("a81fdcdc-7815-4ccd-8883-165ca1abde2e"), true, "Automobil je registrovan, vodi se na prodavca i nije oštećen", "Prednji", "Manuelni 5 brzina", "Niš", "Peugeot", 250248L, "207", 2800m, new Guid("af19ba81-1376-4a55-b2f3-a0cb6782f491"), 2007 },
                    { new Guid("a9cc8f05-0998-4194-945b-f7998d0d15ec"), true, "Automobil je registrovan, vodi se na prodavca i nije oštećen", "4x4", "Automatski", "Beograd", "Audi", 243000L, "A6", 4200m, new Guid("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"), 2008 },
                    { new Guid("ad0a8a56-db67-4c51-83fb-16a29fa887f7"), false, "Automobil je registrovan, vodi se na prodavca i nije oštećen", "Prednji", "Manuelni 5 brzina", "Niš", "Volkswagen", 205000L, "Polo", 2899m, new Guid("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"), 2005 },
                    { new Guid("bc272776-3e6f-4df2-b840-c79388b77794"), true, "Automobil nije registrovan, vodi se na prodavca i nije oštećen", "Prednji", "Manuelni 5 brzina", "Kragujevac", "Ford", 214000L, "Fiesta", 4390m, new Guid("998902da-c58d-4963-ae0d-39079971e5cd"), 2010 },
                    { new Guid("c7c96672-815e-4812-8e82-55675b77dfc2"), false, "Automobil je registrovan, vodi se na prodavca i nije oštećen", "Prednji", "Automatski", "Kragujevac", "Škoda", 400000L, "Superb", 1650m, new Guid("af19ba81-1376-4a55-b2f3-a0cb6782f491"), 2006 },
                    { new Guid("cb578e76-d0b3-443d-9d2d-84afd5a1c8a4"), true, "Automobil ima domaće tablice, vodi se na prodavca i nije oštećen", "Prednji", "Manuelni 6 brzina", "Novi Sad", "Volkswagen", 275000L, "Passat B6", 5800m, new Guid("998902da-c58d-4963-ae0d-39079971e5cd"), 2006 },
                    { new Guid("d4b69b30-dad4-4673-bc49-b44ef61dd933"), true, "Automobil ima domaće tablice, vodi se na prodavca i nije oštećen", "Prednji", "Manuelni 5 brzina", "Beograd", "Citroen", 338692L, "C4", 2800m, new Guid("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"), 2009 },
                    { new Guid("d98d1cc7-9404-4895-8d22-b9c3d5ee39cd"), true, "Automobil nije registrovan, vodi se na prodavca i nije oštećen", "Prednji", "Manuelni 5 brzina", "Beograd", "Citroen", 108454L, "C3", 2190m, new Guid("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"), 2005 },
                    { new Guid("de1f391e-ae6e-4697-94e6-1b5445c8214e"), true, "Automobil nije registrovan, vodi se na prodavca i nije oštećen", "Prednji", "Manuelni 6 brzina", "Kragujevac", "Škoda", 169000L, "Octavia", 4999m, new Guid("af19ba81-1376-4a55-b2f3-a0cb6782f491"), 2010 },
                    { new Guid("edc2854e-5c2d-4e6b-8b80-e32f95611451"), true, "Automobil nije registrovan, vodi se na prodavca i nije oštećen", "Prednji", "Manuelni 5 brzina", "Kragujevac", "Ford", 190000L, "Focus", 2250m, new Guid("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"), 2006 },
                    { new Guid("f2646c1e-f0b3-48fb-9e8c-0e62411e9f30"), true, "Automobil ima domaće tablice, vodi se na prodavca i nije oštećen", "4x4", "Manuelni 6 brzina", "Niš", "Volkswagen", 222599L, "Golf 5", 4800m, new Guid("af19ba81-1376-4a55-b2f3-a0cb6782f491"), 2006 },
                    { new Guid("f4f0e37d-30fd-412f-ad77-0c618a78abbe"), true, "Automobil je registrovan, vodi se na prodavca i nije oštećen", "Prednji", "Manuelni 6 brzina", "Niš", "Audi", 340000L, "A4", 3350m, new Guid("998902da-c58d-4963-ae0d-39079971e5cd"), 2003 },
                    { new Guid("fca90d2e-b548-486c-aafe-52ca64ea3bd9"), true, "Automobil je registrovan, vodi se na prodavca i nije oštećen", "Prednji", "Automatski", "Kragujevac", "Mercedes Benz", 213000L, "A 180", 3300m, new Guid("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9"), 2007 }
                });

            migrationBuilder.InsertData(
                table: "SavedSearches",
                columns: new[] { "Id", "Search", "UserId" },
                values: new object[,]
                {
                    { new Guid("12a2e457-aed3-4350-a2c9-efdb4a0b13a8"), "Mercedes C klasa", new Guid("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9") },
                    { new Guid("2507ea60-34bd-4a14-966c-533cd60b0f1b"), "Peugeot 206", new Guid("af19ba81-1376-4a55-b2f3-a0cb6782f491") },
                    { new Guid("66809cf9-8021-4efb-a148-87cb2287da5b"), "BMW 5", new Guid("af19ba81-1376-4a55-b2f3-a0cb6782f491") },
                    { new Guid("91b70203-f1d9-4523-83f5-0c4e14d99257"), "Audi A6", new Guid("998902da-c58d-4963-ae0d-39079971e5cd") },
                    { new Guid("c6abb9e1-c82b-4de3-abd5-a5732a1a490b"), "Opel Astra", new Guid("998902da-c58d-4963-ae0d-39079971e5cd") },
                    { new Guid("de288baf-78ca-435d-b01b-57e98d84de4d"), "Zastava 101", new Guid("cfeb0e5e-5d09-464a-82dd-fe5d39e45ad9") }
                });

            migrationBuilder.InsertData(
                table: "Pictures",
                columns: new[] { "Id", "CarId", "Path" },
                values: new object[,]
                {
                    { new Guid("327f49ec-02a3-4622-acc1-92be863fa15f"), new Guid("351b2f6b-e575-4ed3-9e68-44da59482ef9"), "path" },
                    { new Guid("641721fa-5687-4f73-b3a6-6057eb8911f9"), new Guid("f2646c1e-f0b3-48fb-9e8c-0e62411e9f30"), "path" },
                    { new Guid("77bfb1bc-2396-42e2-9efd-95147e56817c"), new Guid("a37ad9b1-8975-450a-84c5-b49869d5b7c2"), "path" },
                    { new Guid("85407744-2272-4c5f-929e-894f0e7ec415"), new Guid("de1f391e-ae6e-4697-94e6-1b5445c8214e"), "path" },
                    { new Guid("f13725a3-4f9b-4643-97fe-10531cb3e4de"), new Guid("cb578e76-d0b3-443d-9d2d-84afd5a1c8a4"), "path" },
                    { new Guid("f7ba02e3-74fa-4ffb-9659-a6fef0ec9c97"), new Guid("d4b69b30-dad4-4673-bc49-b44ef61dd933"), "path" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Cars_UserId",
                table: "Cars",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Pictures_CarId",
                table: "Pictures",
                column: "CarId");

            migrationBuilder.CreateIndex(
                name: "IX_SavedSearches_UserId",
                table: "SavedSearches",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Pictures");

            migrationBuilder.DropTable(
                name: "SavedSearches");

            migrationBuilder.DropTable(
                name: "Cars");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}

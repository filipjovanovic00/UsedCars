using Microsoft.EntityFrameworkCore;
using UsedCars.API.Data;
using UsedCars.API.Repositories;
using UsedCars.API.Repositories.Interfaces;
using UsedCarsWebApi.Repositories;
using UsedCarsWebApi.Repositories.Contracts;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<UsedCarsDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("Topi"));
});

builder.Services.AddScoped<ICarRepository, CarRepository>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
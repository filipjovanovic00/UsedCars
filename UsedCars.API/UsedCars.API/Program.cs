using Microsoft.EntityFrameworkCore;
using Microsoft.Net.Http.Headers;
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
    options.UseSqlServer(builder.Configuration.GetConnectionString("Coda"));
});

builder.Services.AddScoped<ICarRepository, CarRepository>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost3000",
        builder =>
        {
            builder.WithOrigins("http://localhost:3000")
                   .AllowAnyHeader()
                   .AllowAnyMethod();
        });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors("AllowLocalhost3000");
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
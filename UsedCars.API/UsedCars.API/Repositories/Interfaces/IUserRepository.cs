using UsedCars.API.Data;
using UsedCars.API.DTOs;
using UsedCarsWebApi.Models;

namespace UsedCars.API.Repositories.Interfaces;

public interface IUserRepository
{
    string Generate(User user);
    Task<User> Authenticate(UserLoginDto loginDto);
    Task AddUserAsync(User user);
    Task<UserDto> GetCarByIdAsync(Guid id);
}
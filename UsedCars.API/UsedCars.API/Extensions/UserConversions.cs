﻿using UsedCars.API.DTOs;
using UsedCarsWebApi.Enums;
using UsedCarsWebApi.Models;

namespace UsedCars.API.Extensions;

public static class UserConversions
{
    public static User ConvertToUser(this UserRegisterDto userRegisterDto)
    {
        return new User
        {
            Id = Guid.NewGuid(),
            FirstName = userRegisterDto.FirstName,
            LastName = userRegisterDto.LastName,
            Phone = userRegisterDto.Phone,
            Email = userRegisterDto.Email,
            Password = userRegisterDto.Password,
            Role = Role.USER
        };
    }

    public static UserDto ConvertToUserDto(this User user)
    {
        return new UserDto
        {
            Id = user.Id,
            FirstName = user.FirstName,
            LastName = user.LastName,
            Phone = user.Phone,
            Email = user.Email,
            Role = user.Role
        };
    }
}
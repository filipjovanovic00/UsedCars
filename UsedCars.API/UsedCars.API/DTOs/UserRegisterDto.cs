﻿using UsedCarsWebApi.Enums;
using UsedCarsWebApi.Models;

namespace UsedCars.API.DTOs;

public class UserRegisterDto
{
    public string FirstName { get; set; }

    public string LastName { get; set; }

    public string Phone { get; set; }

    public string Email { get; set; }

    public string Password { get; set; }
}
﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UsedCars.API.DTOs;
using UsedCars.API.Extensions;
using UsedCarsWebApi.Repositories.Contracts;

namespace UsedCars.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CarController : ControllerBase
{
    private readonly ICarRepository _carRepository;

    public CarController(ICarRepository carRepository)
    {
        _carRepository = carRepository;
    }

    [HttpGet]
    //[Authorize(Roles = "ADMIN")]
    [Route("approved")]
    [ProducesResponseType(200, Type = typeof(IEnumerable<CarShortDto>))]
    public async Task<IActionResult> GetApprovedCars(
        [FromQuery] string? mark,
        [FromQuery] string? type,
        [FromQuery] int? yearStart,
        [FromQuery] int? yearEnd,
        [FromQuery] string? gear,
        [FromQuery] string? drive,
        [FromQuery] int? price,
        [FromQuery] int? km,
        [FromQuery] int pageNumber,
        [FromQuery] int pageSize)
    {
        try
        {
            var cars = await _carRepository.GetApprovedCarsAsync(pageNumber, pageSize, mark, type, yearStart, yearEnd, gear, drive, price, km);

            if (cars == null)
            {
                return NotFound();
            }

            var carsDto = cars.ConvertToCarShorthDto();

            return Ok(carsDto);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpGet]
    //[Authorize(Roles = "ADMIN")]
    [Route("approvedfirst")]
    [ProducesResponseType(200, Type = typeof(IEnumerable<CarShorterDto>))]
    public async Task<IActionResult> GetApprovedFirstCars()
    {
        try
        {
            var cars = await _carRepository.GetFirstApprovedCarsAsync();

            if (cars == null)
            {
                return NotFound();
            }

            var carsDto = cars.ConvertToCarShortherDto();

            return Ok(carsDto);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpGet]
    [Route("notapproved")]
    [ProducesResponseType(200, Type = typeof(IEnumerable<CarShortDto>))]
    public async Task<IActionResult> GetNotApprovedCars()
    {
        try
        {
            var cars = await _carRepository.GetNotApprovedCarsAsync();

            if (cars == null)
            {
                return NotFound();
            }

            var carsDto = cars.ConvertToCarShorthDto();

            return Ok(carsDto);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpGet]
    [Route("usernotapproved/{id:Guid}")]
    [ProducesResponseType(200, Type = typeof(IEnumerable<CarShortDto>))]
    public async Task<IActionResult> GetUsersNotApprovedCars([FromRoute] Guid id)
    {
        try
        {
            var cars = await _carRepository.GetUsersNotApprovedCarsAsync(id);

            if (cars == null)
            {
                return NotFound();
            }

            var carsDto = cars.ConvertToCarShorthDto();

            return Ok(carsDto);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpGet]
    [Route("userapproved/{id:Guid}")]
    [ProducesResponseType(200, Type = typeof(IEnumerable<CarShortDto>))]
    public async Task<IActionResult> GetUsersApprovedCars([FromRoute] Guid id)
    {
        try
        {
            var cars = await _carRepository.GetUsersApprovedCarsAsync(id);

            if (cars == null)
            {
                return NotFound();
            }

            var carsDto = cars.ConvertToCarShorthDto();

            return Ok(carsDto);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpGet]
    [Route("{id:Guid}")]
    [ProducesResponseType(200, Type = typeof(CarDto))]
    public async Task<IActionResult> GetCarById(Guid id)
    {
        try
        {
            var carDto = await _carRepository.GetCarByIdAsync(id);

            if (carDto == null)
            {
                return NotFound();
            }

            return Ok(carDto);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpPut]
    [Route("approvecar/{id:Guid}")]
    public async Task<IActionResult> ApproveCar([FromRoute] Guid id)
    {
        try
        {
            await _carRepository.ApproveCarAsync(id);

            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpDelete]
    [Route("deletecar/{id:Guid}")]
    public async Task<IActionResult> DeleteCar([FromRoute] Guid id)
    {
        try
        {
            await _carRepository.DeleteCarAsync(id);

            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}
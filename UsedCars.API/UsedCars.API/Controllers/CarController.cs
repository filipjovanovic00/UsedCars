using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using UsedCars.API.DTOs;
using UsedCars.API.Extensions;
using UsedCars.API.Repositories.Interfaces;
using UsedCarsWebApi.Models;
using UsedCarsWebApi.Repositories.Contracts;
using System.Reflection;

namespace UsedCars.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CarController : ControllerBase
{
    private readonly ICarRepository _carRepository;
    private readonly IPictureRepository _pictureRepository;
    private readonly IWebHostEnvironment _hostEnvironment;

    public CarController(ICarRepository carRepository, 
                            IPictureRepository pictureRepository,
                            IWebHostEnvironment hostEnvironment)
    {
        _carRepository = carRepository;
        _pictureRepository = pictureRepository;
        _hostEnvironment = hostEnvironment;
    }

    [HttpGet]
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
        [FromQuery] string? state,
        [FromQuery] int pageNumber,
        [FromQuery] int pageSize)
    {
        try
        {
            string projectPath = _hostEnvironment.ContentRootPath;
            string fullPath = Path.Combine(projectPath, "Pictures");

            var cars = await _carRepository.GetApprovedCarsAsync(pageNumber, pageSize, mark, type, yearStart, yearEnd, gear, drive, price, km, state);

            if (cars == null)
            {
                return NotFound();
            }

            var carsDto = new List<CarShortDto>();

            foreach (var car in cars)
            {
                var firstPicture = car.Pictures.FirstOrDefault(x => x.Path.Contains("_1"));

                if (firstPicture != null)
                {
                    var imageBytes = System.IO.File.ReadAllBytes(Path.Combine(fullPath, firstPicture.Path));
                    var base64Image = Convert.ToBase64String(imageBytes);

                    var carDto = car.ConvertToCarShorthDto(base64Image);

                    carsDto.Add(carDto);
                }
            }

            return Ok(carsDto);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpGet]
    [Route("approvedfirst")]
    [ProducesResponseType(200, Type = typeof(IEnumerable<CarShorterDto>))]
    public async Task<IActionResult> GetApprovedFirstCars()
    {
        try
        {
            string projectPath = _hostEnvironment.ContentRootPath;
            string fullPath = Path.Combine(projectPath, "Pictures");

            var cars = await _carRepository.GetFirstApprovedCarsAsync();

            if (cars == null)
            {
                return NotFound();
            }

            var carsDto = new List<CarShorterDto>();

            foreach (var car in cars)
            {
                var firstPicture = car.Pictures.FirstOrDefault(x => x.Path.Contains("_1"));

                if (firstPicture != null)
                {
                    var imageBytes = System.IO.File.ReadAllBytes(Path.Combine(fullPath, firstPicture.Path));
                    var base64Image = Convert.ToBase64String(imageBytes);

                    var carDto = car.ConvertToCarShortherDto(base64Image);

                    carsDto.Add(carDto);
                }
            }

            return Ok(carsDto);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpGet]
    [Authorize(Roles = "ADMIN")]
    [Route("notapproved")]
    [ProducesResponseType(200, Type = typeof(IEnumerable<CarShortDto>))]
    public async Task<IActionResult> GetNotApprovedCars()
    {
        try
        {
            string projectPath = _hostEnvironment.ContentRootPath;
            string fullPath = Path.Combine(projectPath, "Pictures");

            var cars = await _carRepository.GetNotApprovedCarsAsync();

            if (cars == null)
            {
                return NotFound();
            }

            var carsDto = new List<CarShortDto>();

            foreach (var car in cars)
            {
                var firstPicture = car.Pictures.FirstOrDefault(x => x.Path.Contains("_1"));

                if (firstPicture != null)
                {
                    var imageBytes = System.IO.File.ReadAllBytes(Path.Combine(fullPath, firstPicture.Path));
                    var base64Image = Convert.ToBase64String(imageBytes);

                    var carDto = car.ConvertToCarShorthDto(base64Image);

                    carsDto.Add(carDto);
                }
            }

            return Ok(carsDto);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpGet]
    [Authorize(Roles = "ADMIN,USER")]
    [Route("usernotapproved")]
    [ProducesResponseType(200, Type = typeof(IEnumerable<CarShortDto>))]
    public async Task<IActionResult> GetUsersNotApprovedCars()
    {
        try
        {
            string projectPath = _hostEnvironment.ContentRootPath;
            string fullPath = Path.Combine(projectPath, "Pictures");

            var userClaims = User as ClaimsPrincipal;
            var userId = userClaims.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            Guid id = Guid.Parse(userId);

            var cars = await _carRepository.GetUsersNotApprovedCarsAsync(id);

            if (cars == null)
            {
                return NotFound();
            }

            var carsDto = new List<CarShortDto>();

            foreach (var car in cars)
            {
                var firstPicture = car.Pictures.FirstOrDefault(x => x.Path.Contains("_1"));

                if (firstPicture != null)
                {
                    var imageBytes = System.IO.File.ReadAllBytes(Path.Combine(fullPath, firstPicture.Path));
                    var base64Image = Convert.ToBase64String(imageBytes);

                    var carDto = car.ConvertToCarShorthDto(base64Image);

                    carsDto.Add(carDto);
                }
            }

            return Ok(carsDto);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpGet]
    [Authorize(Roles = "ADMIN,USER")]
    [Route("userapproved")]
    [ProducesResponseType(200, Type = typeof(IEnumerable<CarShortDto>))]
    public async Task<IActionResult> GetUsersApprovedCars()
    {
        try
        {
            string projectPath = _hostEnvironment.ContentRootPath;
            string fullPath = Path.Combine(projectPath, "Pictures");

            var userClaims = User as ClaimsPrincipal;
            var userId = userClaims.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            Guid id = Guid.Parse(userId);

            var cars = await _carRepository.GetUsersApprovedCarsAsync(id);

            if (cars == null)
            {
                return NotFound();
            }

            var carsDto = new List<CarShortDto>();

            foreach (var car in cars)
            {
                var firstPicture = car.Pictures.FirstOrDefault(x => x.Path.Contains("_1"));

                if (firstPicture != null)
                {
                    var imageBytes = System.IO.File.ReadAllBytes(Path.Combine(fullPath, firstPicture.Path));
                    var base64Image = Convert.ToBase64String(imageBytes);

                    var carDto = car.ConvertToCarShorthDto(base64Image);

                    carsDto.Add(carDto);
                }
            }

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
            string projectPath = _hostEnvironment.ContentRootPath;
            string fullPath = Path.Combine(projectPath, "Pictures");

            var carDto = await _carRepository.GetCarByIdAsync(id);

            if (carDto == null)
            {
                return NotFound();
            }

            var pictures = new List<string>();

            foreach (var picture in carDto.Pictures)
            {
                if (picture != null)
                {
                    var imageBytes = System.IO.File.ReadAllBytes(Path.Combine(fullPath, picture.Path));
                    var base64Image = Convert.ToBase64String(imageBytes);

                    pictures.Add(base64Image);
                }
            }

            var carDto2 = carDto.ConvertToCarDto2(pictures);

            return Ok(carDto2);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpPut]
    [Authorize(Roles = "ADMIN")]
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
    [Authorize(Roles = "ADMIN,USER")]
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

    [HttpPost]
    [Authorize(Roles = "ADMIN,USER")]
    [Route("addcar")]
    public async Task<IActionResult> AddCar([FromBody] AddCarDto addCarDto)
    {
        try
        {
            var userClaims = User as ClaimsPrincipal;
            var userId = userClaims.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            Guid uid = Guid.Parse(userId);

            Guid cid = Guid.NewGuid();

            var car = addCarDto.ConvertToCar(uid, cid);
            await _carRepository.AddCarAsync(car);

            int x = 0;

            List<string> pictures = new List<string> {
                addCarDto.Pictures.Picture1,
                addCarDto.Pictures.Picture2,
                addCarDto.Pictures.Picture3,
                addCarDto.Pictures.Picture4,
                addCarDto.Pictures.Picture5,
                addCarDto.Pictures.Picture6,
            };

            foreach (string picture in pictures)
            {
                if (picture != null)
                {
                    x++;

                    string fileName = $"{car.Mark}{car.Model}_{x}.jpg";

                    byte[] imageBytes = Convert.FromBase64String(picture);

                    string projectPath = _hostEnvironment.ContentRootPath;
                    string fullPath = Path.Combine(projectPath, "Pictures");

                    string imagePath = Path.Combine(fullPath, fileName);

                    System.IO.File.WriteAllBytes(imagePath, imageBytes);

                    var pic = new Picture
                    {
                        Id = Guid.NewGuid(),
                        Path = fileName,
                        CarId = cid
                    };

                    await _pictureRepository.AddPictureAsync(pic);
                }
            }
        
            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}
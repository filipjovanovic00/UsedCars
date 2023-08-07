using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UsedCars.API.Data;

namespace UsedCars.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly UsedCarsDbContext _usedCarsDbContext;

    public UserController(UsedCarsDbContext usedCarsDbContext)
    {
        _usedCarsDbContext = usedCarsDbContext;
    }

    [HttpGet]
    public IActionResult GetUsers()
    {
        var users = _usedCarsDbContext.Users.ToList();
        
        return Ok(users);
    }

    [HttpGet]
    [Route("{id:Guid}")]
    public IActionResult GetUser([FromRoute] Guid id)
    {
        var user = _usedCarsDbContext.Users.FirstOrDefault(u => u.Id == id);

        if (user == null)
        {
            return BadRequest();
        }

        return Ok(user);
    }
}
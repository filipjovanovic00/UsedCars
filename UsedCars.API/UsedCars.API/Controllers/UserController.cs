using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UsedCars.API.DTOs;
using UsedCars.API.Extensions;
using UsedCars.API.Repositories.Interfaces;

namespace UsedCars.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] UserLoginDto userLoginDto)
        {
            var user = await _userRepository.Authenticate(userLoginDto);

            if (user != null)
            {
                var token = _userRepository.Generate(user);
                return Ok(token);
            }

            return NotFound("User not found!");
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> AddUser([FromBody] UserRegisterDto userRegisterDto)
        {
            try
            {
                var user = userRegisterDto.ConvertToUser();
                await _userRepository.AddUserAsync(user);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}

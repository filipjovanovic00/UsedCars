using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UsedCars.API.DTOs;
using UsedCars.API.Repositories.Interfaces;

namespace UsedCars.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public LoginController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [AllowAnonymous]
        [HttpPost]
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
    }
}

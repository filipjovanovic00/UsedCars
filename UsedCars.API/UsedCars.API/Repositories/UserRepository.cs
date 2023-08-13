using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using UsedCars.API.Data;
using UsedCars.API.DTOs;
using UsedCars.API.Repositories.Interfaces;
using UsedCarsWebApi.Models;

namespace UsedCars.API.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly UsedCarsDbContext _usedCarsDbContext;
        private readonly IConfiguration _configuration;

        public UserRepository(UsedCarsDbContext usedCarsDbContext, IConfiguration configuration)
        {
            _usedCarsDbContext = usedCarsDbContext;
            _configuration = configuration;
        }

        public async Task<User> Authenticate(UserLoginDto loginDto)
        {
            var currentUser = await _usedCarsDbContext.Users.FirstOrDefaultAsync(u => 
                u.Email == loginDto.Email && u.Password == loginDto.Password);

            if (currentUser == null)
            {
                return null;
            }

            return currentUser;
        }

        public string Generate(User user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.GivenName, user.FirstName),
                new Claim(ClaimTypes.Surname, user.LastName),
                new Claim(ClaimTypes.Role, user.Role.ToString())
            };

            var token = new JwtSecurityToken(_configuration["Jwt:Issuer"],
                _configuration["Jwt:Audience"],
                claims,
                expires: DateTime.Now.AddMinutes(20),
                signingCredentials: credentials);
            
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}

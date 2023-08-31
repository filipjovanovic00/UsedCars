using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using UsedCars.API.DTOs;
using UsedCars.API.Extensions;
using UsedCars.API.Repositories;
using UsedCars.API.Repositories.Interfaces;
using UsedCarsWebApi.Models;

namespace UsedCars.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class SavedSearchController : ControllerBase
{
    private readonly ISavedSearchRepository _savedSearchRepository;

    public SavedSearchController(ISavedSearchRepository savedSearchRepository)
    {
        _savedSearchRepository = savedSearchRepository;
    }

    [HttpGet]
    [Authorize]
    // [Route("{id:Guid}")]
    [ProducesResponseType(200, Type = typeof(IEnumerable<SavedSearch>))]
    public async Task<IActionResult> GetUsersSavedSearch()
    {
        try
        {
            var userClaims = User as ClaimsPrincipal;
            var userId = userClaims.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            Guid id = Guid.Parse(userId);

            var search = await _savedSearchRepository.GetUsersSavedSearchAsync(id);

            if (search == null)
            {
                return NotFound();
            }

            var searchDto = search.ConvertToSavedSearchDto();

            return Ok(searchDto);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpPost]
    [Authorize]
    public async Task<IActionResult> AddSavedSearch([FromBody] AddSavedSearchDto addSavedSearchDto)
    {
        try
        {
            var userClaims = User as ClaimsPrincipal;
            var userId = userClaims.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            Guid id = Guid.Parse(userId);

            var search = addSavedSearchDto.ConvertToSavedSearch(id);
            await _savedSearchRepository.AddSavedSearchAsync(search);

            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpDelete]
    [Route("{id:Guid}")]
    public async Task<IActionResult> DeleteSavedSearch([FromRoute] Guid id)
    {
        try
        {
            await _savedSearchRepository.DeleteSavedSearchAsync(id);

            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}
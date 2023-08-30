using UsedCars.API.DTOs;
using UsedCarsWebApi.Enums;
using UsedCarsWebApi.Models;

namespace UsedCars.API.Extensions;

public static class SavedSearchConversions
{
    public static IEnumerable<SavedSearchDto> ConvertToSavedSearchDto(this IEnumerable<SavedSearch> searches)
    {
        return (from search in searches
                select new SavedSearchDto
                {
                    Id = search.Id,
                    Search = search.Search
                }).ToList();
    }

    public static SavedSearch ConvertToSavedSearch(this AddSavedSearchDto addSavedSearchDto)
    {
        return new SavedSearch
        {
            Id = Guid.NewGuid(),
            Search = addSavedSearchDto.Search,
            UserId = addSavedSearchDto.UserId
        };
    }
}
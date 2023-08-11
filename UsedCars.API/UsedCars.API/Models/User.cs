using UsedCarsWebApi.Enums;

namespace UsedCarsWebApi.Models;

public class User
{
    public Guid Id { get; set; }

    public string FirstName { get; set; }

    public string LastName { get; set; }

    public string Phone { get; set; }

    public string Email { get; set; }

    public string Password { get; set; }

    public Role Role { get; set; }

    public List<Car>? Cars { get; set; }

    public List<SavedSearch>? SavedSearches { get; set; }
}
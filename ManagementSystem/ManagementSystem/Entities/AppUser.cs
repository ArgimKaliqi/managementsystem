using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace ManagementSystem.Entities
{
    public class AppUser : IdentityUser<int>
    {
        

        public ICollection<AppUserRole> UserRoles { get; set; }


    }
}

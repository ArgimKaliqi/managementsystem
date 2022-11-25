using ManagementSystem.Entities;
using System.Threading.Tasks;

namespace App1.Interfaces
{
    public interface ITokenService
    {
        Task<string> CreateToken(AppUser user);
    }
}

using ManagementSystem.Entities;

namespace App1.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(Appuser user);
    }
}

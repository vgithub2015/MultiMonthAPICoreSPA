using System.Threading.Tasks;
using MultiMonth.API.Models;

namespace MultiMonth.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Register(User user, string password);

         Task<User> Login(string username, string password);

         Task<bool> UserExists(string username);
    }
}
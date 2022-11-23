using ManagementSystem.Data;
using ManagementSystem.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ManagementSystem.Controllers
{


    public class UsersController : BaseApiController
    {
        private readonly DataContext _context;

        public UsersController(DataContext context)
        {
            _context = context;
        }


        [HttpGet]
        public  async Task<ActionResult<IEnumerable<CoWorkers>>> GetUsers()
        {
            var users = await _context.CoWorkers.ToListAsync();

            return users;
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<CoWorkers>> GetUser(int id)
        {
            return await _context.CoWorkers.FindAsync(id);
        }


    }
}

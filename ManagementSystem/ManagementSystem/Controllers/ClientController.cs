using AutoMapper;
using ManagementSystem.Data;
using ManagementSystem.DTOs;
using ManagementSystem.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ManagementSystem.Controllers
{
    public class ClientController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public ClientController(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Client>>> GetClients()
        {
            return await _context.Clients.ToListAsync();
        }
        [HttpGet("{id}", Name = "GetClients")]
        public async Task<ActionResult<Client>> GetClient(int id)
        {
            var client = await _context.Clients.FindAsync(id);
            if (client == null)
            {
                return NotFound();
            }
            return client;
        }
        [HttpPut]
        public async Task<ActionResult<Client>> UpdateClient([FromForm] ClientDTO clientDTO)
        {
            var client = await _context.Clients.FindAsync(clientDTO);
            if (client== null) return NotFound();
            _mapper.Map(clientDTO, client);
            var result = await _context.SaveChangesAsync() > 0;
            if (result) return Ok(client);
            return BadRequest(new ProblemDetails { Title = "Problem updating the data" });
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClient(int id)
        {
            var client = await _context.Clients.FindAsync(id);
            if (client == null)
            {
                return NotFound();
            }
            _context.Clients.Remove(client);
            var result = await _context.SaveChangesAsync() > 0;
            if (result) return Ok();
            return BadRequest(new ProblemDetails { Title = "Problem deleting the data" });
        }
        [HttpPost]
        public async Task<ActionResult<Client>> CreateClient([FromForm] ClientDTO clientDTO)
        {

            var client = _mapper.Map<Client>(clientDTO);
            _context.Clients.Add(client);
            var result = await _context.SaveChangesAsync() > 0;
            if (result) return CreatedAtRoute("GetClients", new { Id = client.ClientsId }, client);
            return BadRequest(new ProblemDetails { Title = "Problem creating new data" });
        }
    }
}

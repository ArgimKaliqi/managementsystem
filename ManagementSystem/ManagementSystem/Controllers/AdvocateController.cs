using AutoMapper;
using ManagementSystem.Data;
using ManagementSystem.DTOs;
using ManagementSystem.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ManagementSystem.Controllers
{
    public class AdvocateController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public AdvocateController(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Advocate>>> GetAdvocates()
        {
            return await _context.Advocates.ToListAsync();
        }
        [HttpGet("{id}", Name = "GetAdvocates")]
        public async Task<ActionResult<Advocate>> GetAdvocate(int id)
        {
            var advocate = await _context.Advocates.FindAsync(id);
            if (advocate == null)
            {
                return NotFound();
            }
            return advocate;
        }

        [HttpPut]
        public async Task<ActionResult<Advocate>> UpdateAdvocate(UpdateAdvocateDTO advocateDTO)
        {
            var advocate = await _context.Advocates.FindAsync(advocateDTO.AdvocateId);
            if (advocate == null) return NotFound();
            _mapper.Map(advocateDTO, advocate);
            var result = await _context.SaveChangesAsync() > 0;
            if (result) return Ok(advocate);
            return BadRequest(new ProblemDetails { Title = "Problem updating the data" });
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAdvocate(int id)
        {
            var advocate = await _context.Advocates.FindAsync(id);
            if (advocate == null)
            {
                return NotFound();
            }
            _context.Advocates.Remove(advocate);
            var result = await _context.SaveChangesAsync() > 0;
            if (result) return Ok();
            return BadRequest(new ProblemDetails { Title = "Problem deleting the data" });
        }

        [HttpPost]
        public async Task<ActionResult<Advocate>> CreateAdvocate( CreateAdvocateDTO advocateDTO)
        {

            if (await AdvocateExists(advocateDTO.Email)) return BadRequest("This advocate already exists");

            var advocate = _mapper.Map<Advocate>(advocateDTO);
            _context.Advocates.Add(advocate);
            var result = await _context.SaveChangesAsync() > 0;
            if (result) return CreatedAtRoute("GetAdvocates", new { Id = advocate.AdvocateId }, advocate);
            return BadRequest(new ProblemDetails { Title = "Problem creating new data" });
        }

        private async Task<bool> AdvocateExists(string email)
        {
            return await _context.Advocates.AnyAsync(x => x.Email == email.ToLower());
        }
    }
}

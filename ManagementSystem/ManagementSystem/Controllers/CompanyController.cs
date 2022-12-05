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
    public class CompanyController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public CompanyController(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Company>>> GetCompanies()
        {
            return await _context.Companies.ToListAsync();
        }
        [HttpGet("{id}", Name = "GetCompanies")]
        public async Task<ActionResult<Company>> GetCompany(int id)
        {
            var company = await _context.Companies.FindAsync(id);
            if (company == null)
            {
                return NotFound();
            }
            return company;
        }

        [HttpPut]
        public async Task<ActionResult<Company>> UpdateCompany( UpdateCompanyDTO companyDTO)
        {
            var company = await _context.Companies.FindAsync(companyDTO.CompanyId);
            if (company == null) return NotFound();
            _mapper.Map(companyDTO, company);
            var result = await _context.SaveChangesAsync() > 0;
            if (result) return Ok(company);
            return BadRequest(new ProblemDetails { Title = "Problem updating the data" });
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompany(int id)
        {
            var company = await _context.Companies.FindAsync(id);
            if (company == null)
            {
                return NotFound();
            }
            _context.Companies.Remove(company);
            var result = await _context.SaveChangesAsync() > 0;
            if (result) return Ok();
            return BadRequest(new ProblemDetails { Title = "Problem deleting the data" });
        }

        [HttpPost]
        public async Task<ActionResult<Company>> CreateCompany( CreateCompanyDTO companyDTO)
        {
            if (await UserExists(companyDTO.CEmail)) return BadRequest("User already exists");

            var company = _mapper.Map<Company>(companyDTO);
            _context.Companies.Add(company);
            var result = await _context.SaveChangesAsync() > 0;
            if (result) return CreatedAtRoute("GetCompanies", new { Id = company.CompanyId }, company);
            return BadRequest(new ProblemDetails { Title = "Problem creating new data" });
        }

        private async Task<bool> UserExists(string email)
        {
            return await _context.Companies.AnyAsync(x => x.CEmail == email.ToLower());
        }
    }
}

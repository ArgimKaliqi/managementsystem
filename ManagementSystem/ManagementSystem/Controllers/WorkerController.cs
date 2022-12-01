using AutoMapper;
using ManagementSystem.Data;
using ManagementSystem.DTOs;
using ManagementSystem.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;

namespace ManagementSystem.Controllers
{
    public class WorkerController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public WorkerController(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Worker>>> GetWorkers()
        {
            return await _context.Workers.ToListAsync();
        }
        [HttpGet("{id}", Name = "GetWorkers")]
        public async Task<ActionResult<Worker>> GetWorker(int id)
        {
            var worker = await _context.Workers.FindAsync(id);
            if (worker == null)
            {
                return NotFound();
            }
            return worker;
        }
        [HttpPut]
        public async Task<ActionResult<Worker>> UpdateWorker( UpdateWorkerDTO workerDTO)
        {
            var worker = await _context.Workers.FindAsync(workerDTO.WorkerId);
            if (worker == null) return NotFound();
            _mapper.Map(workerDTO, worker);
            var result = await _context.SaveChangesAsync() > 0;
            if (result) return Ok(worker);
            return BadRequest(new ProblemDetails { Title = "Problem updating the data" });
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWorker(int id)
        {
            var worker = await _context.Workers.FindAsync(id);
            if (worker == null)
            {
                return NotFound();
            }
            _context.Workers.Remove(worker);
            var result = await _context.SaveChangesAsync() > 0;
            if (result) return Ok();
            return BadRequest(new ProblemDetails { Title = "Problem deleting the data" });
        }
        [HttpPost]
        public async Task<ActionResult<Worker>> CreateProduct(CreateWorkerDTO workerDTO)
        {

            var worker = _mapper.Map<Worker>(workerDTO);
            _context.Workers.Add(worker);
            var result = await _context.SaveChangesAsync() > 0;
            if (result) return CreatedAtRoute("GetWorkers", new { Id = worker.WorkerId }, worker);
            return BadRequest(new ProblemDetails { Title = "Problem creating new data" });
        }
    }
}

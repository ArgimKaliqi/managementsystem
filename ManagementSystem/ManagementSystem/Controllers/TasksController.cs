
using AutoMapper;
using ManagementSystem.Data;
using ManagementSystem.DTOs;
using ManagementSystem.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace ManagementSystem.Controllers
{
    public class TasksController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public TasksController(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tasks>>> GetTasks()
        {
            return await _context.Tasks.ToListAsync();
        }
        [HttpGet("{id}", Name = "GetTasks")]
        public async Task<ActionResult<Tasks>> GetTask(int id)
        {
            var task = await _context.Tasks.FindAsync(id);
            if(task==null)
            {
                return NotFound();
            }
            return task;
        }
        [HttpPut]
        public async Task<ActionResult<Tasks>>UpdateTask(UpdateTaskDTO taskDTO)
        {
            var task = await _context.Tasks.FindAsync(taskDTO.TaskId);
            if(task==null) { return NotFound(); }
            _mapper.Map(taskDTO, task);
            var result = await _context.SaveChangesAsync() > 0;
            if (result) return Ok(task);
            return BadRequest(new ProblemDetails { Title = "Problem uppdating the data"});
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTask(int id)
        {
            var task = await _context.Tasks.FindAsync(id);
            if (task == null) { return NotFound(); }
            _context.Tasks.Remove(task);
            var result = await _context.SaveChangesAsync()>0;
            if (result) return Ok();
            return BadRequest(new ProblemDetails { Title = "Problem deleting the data" });
            
        }
        [HttpPost]
        public async Task<ActionResult<Tasks>>CreateTask(CreateTaskDTO taskDTO)
        {
            var task = _mapper.Map<Tasks>(taskDTO);
            _context.Tasks.Add(task);
            var result = await _context.SaveChangesAsync()>0;
            if (result) return CreatedAtRoute("GetTasks", new {Id = task.TaskId}, task);
            return BadRequest(new ProblemDetails { Title = "Problem creating the data" });
 
        }
    }
}

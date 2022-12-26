
using AutoMapper;
using ManagementSystem.Data;
using ManagementSystem.DTOs;
using ManagementSystem.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
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
        public async Task<ActionResult<List<TasksDto>>> GetTasks()
        {
          var tasks =  await _context.Tasks.ToListAsync();
           
            
            List<TasksDto> tasksDto = tasks.Select(x => new TasksDto() { 
               
                ClientId=x.ClientId,
                StartDate=x.StartDate,
                DueDate=x.DueDate,
                TotalDays=(x.DueDate-x.StartDate).Days,
                TaskDescription=x.TaskDescription,
                TaskName=x.TaskName,
                TaskId=x.TaskId,
                WorkerId=x.WorkerId,
                DaysLeft=(x.DueDate-DateTime.Now).Days
                
            }).ToList();
            //tasksDto.ForEach(x => x.LimitedDayes = x.EndDate - x.StartDate);

            return Ok(tasksDto);
        }
        [HttpGet("{id}", Name = "GetTasks")]
        public async Task<ActionResult<Tasks>> GetTask(int id)
        {
            var task = await _context.Tasks.FindAsync(id);
            if (task == null)
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
            var result = await _context.SaveChangesAsync() > 0;
            if (result) return Ok();
            return BadRequest(new ProblemDetails { Title = "Problem deleting the data" });


        }
        [HttpPost]
        public async Task<ActionResult<Tasks>>CreateTask([FromForm]CreateTaskDTO taskDTO)
        {
            
            var task = _mapper.Map<Tasks>(taskDTO);
            task.TotalDays = (task.DueDate - task.StartDate).Days;
            _context.Tasks.Add(task);
            var result = await _context.SaveChangesAsync()>0;
            if (result) return CreatedAtRoute("GetTasks", new {Id = task.TaskId}, task);
            return BadRequest(new ProblemDetails { Title = "Problem creating the data" });
 
        }
    }
}

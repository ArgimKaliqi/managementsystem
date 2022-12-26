using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ManagementSystem.DTOs
{
    public class CreateTaskDTO
    {
        public string TaskName { get; set; }
        public string TaskDescription { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime DueDate { get; set; }
        public int? WorkerId { get; set; }
        public int? ClientId { get; set; }
    }
    public class UpdateTaskDTO
    {
        public int TaskId { get; set; }
        public string TaskName { get; set; }
        public string TaskDescription { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime DueDate { get; set; }
        public int? WorkerId { get; set; }
        public int? ClientId { get; set; }
    }
    public class TasksDto
    {
        public int TaskId { get; set; }
        public string TaskName { get; set; }
        public string TaskDescription { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime DueDate { get; set; }
        public int? WorkerId { get; set; }
        public int? ClientId { get; set; }
        public int TotalDays { get; set; }
        public int DaysLeft { get; set; }

    }

}
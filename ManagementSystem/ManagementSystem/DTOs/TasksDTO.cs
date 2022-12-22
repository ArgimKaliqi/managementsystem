using System.ComponentModel.DataAnnotations;

namespace ManagementSystem.DTOs
{
    public class CreateTaskDTO
    {
        public string TaskName { get; set; }
        public string TaskDescription { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public int? WorkerId { get; set; }
        public int? ClientId { get; set; }
    }
    public class UpdateTaskDTO
    {
        public int TaskId { get; set; }
        public string TaskName { get; set; }
        public string TaskDescription { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public int? WorkerId { get; set; }
        public int? ClientId { get; set; }
    }
}
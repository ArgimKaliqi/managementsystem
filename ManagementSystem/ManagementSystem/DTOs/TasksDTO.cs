using ManagementSystem.Entities;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ManagementSystem.DTOs
{
    public class CreateTasks
    {
        public int TaskID { get; set; }
        public string TaskName { get; set; }
        public string Description { get; set; }
        public string DueDate { get; set; }
    }
    public class UodateTaskDTO
    {
        public int TaskID { get; set; }
        public string TaskName { get; set; }
        public string Description { get; set; }
        public string DueDate { get; set; }
    }
}   
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ManagementSystem.Entities
{
    public class Tasks
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TaskId { get; set; }
        [Required]
        public string TaskName { get; set; }
        [Required] 
        public string TaskDescription { get; set;}
        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public DateTime DueDate { get; set; }
        
        public int TotalDays { get; set; }
        public int DaysLeft { get; set; }
        public string TaskStatus { get; set; }
        [Required]
        public int? WorkerId { get; set; }
        [Required]
        public int? ClientId { get; set; }

    }
}

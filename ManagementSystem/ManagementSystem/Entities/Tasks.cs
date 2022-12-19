using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ManagementSystem.Entities
{
    public class Tasks
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TaskID { get; set; }
        [Required]
        public string TaskName { get; set; }
        [Required]
        public int? WorkerId { get; set; }
        [Required]
        public int? ClientId { get; set; }
        public string Description { get; set; }
        public string DueDate { get; set; }
        public virtual Worker Worker { get; set; }
        public virtual Client Client { get; set; }
    }
}
  
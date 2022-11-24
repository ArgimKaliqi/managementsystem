using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ManagementSystem.Entities
{
    public class Worker
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int WorkerId { get; set; }
        [Required]
        public string WorkersName { get; set; }
        [Required]
        public string WorkersSurnname { get; set; }
        public string WorkersPhoneNumber { get; set; }
        public string WorkersEmail { get; set; }
        public string WorkersCity { get; set; }
        public string WorkersAddress { get; set; }

        
    }
}

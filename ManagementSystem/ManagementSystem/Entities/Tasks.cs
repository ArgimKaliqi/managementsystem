using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ManagementSystem.Entities
{
    public class Tasks
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public string TaskName { get; set; }
        [Required] 
        public string TaskDescription { get;}
        [Required]
        public string startDate { get; set; }
        [Required]
        public string endDate { get; set; }
        [Required]
        public int? WorkerId { get; set; }
        [Required]
        public int ClientId { get; set; }

    }
}

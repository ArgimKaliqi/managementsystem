using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ManagementSystem.Entities
{
    public class Advocate
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AdvocatesId { get; set; }
        [Required]
        public string AdvocatesName { get; set; }
        [Required]
        public string AdvocatesSurname { get; set; }
        public string AdvocatesCity { get; set; }
        public string AdvocatesAddress { get; set; }
        public string AdvocatesPhoneNumber { get; set; }

    }
}

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
        public string Name { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string City { get; set; }
        public string Gender { get; set; }
        public string CivilStatus { get; set; }
        [Required]
        public string Location { get; set; }
        [Required]
        public string Address { get; set; }
        public string Street { get; set; }
        public string Postal { get; set; }
        public string HouseNumber { get; set; }
        public string StairsNumber { get; set; }
        public string DoorNumber { get; set; }
        public string Bank { get; set; }
        public string IBAN { get; set; }
        public string SwiftCode { get; set; }
        public long Salary { get; set; }


    }
}

using System.ComponentModel.DataAnnotations;

namespace ManagementSystem.DTOs
{
    public class WorkerDTO
    {

        [Required]
        public string Name { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string City { get; set; }
        public bool Gender { get; set; }
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

using System.ComponentModel.DataAnnotations;

namespace ManagementSystem.DTOs
{
    public class CreateWorkerDTO
    {
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string City { get; set; }
        public string Gender { get; set; }
        public string CivilStatus { get; set; }
        public string Location { get; set; }
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
    public class UpdateWorkerDTO
    {
        public int WorkerId { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string City { get; set; }
        public string Gender { get; set; }
        public string CivilStatus { get; set; }
        public string Location { get; set; }
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

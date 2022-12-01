using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ManagementSystem.DTOs
{
    public class AdvocateDTO
    {



        [Required]
        public string Name { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string City { get; set; }


        public string Gender { get; set; }

        public string CivilStatus { get; set; }

        [Required]
        public string Location { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        public string street { get; set; }
        public string Postal { get; set; }
        public string HouseNumber { get; set; }
        public string StairsNumber { get; set; }
        public string DoorNumber { get; set; }

        public string Email { get; set; }

        public string Bank { get; set; }

        public string IBAN { get; set; }
        public string SwiftCode { get; set; }
        public string Department { get; set; }
        public long? Salary { get; set; }
        public long? AdministrativeTax { get; set; }
        public bool? IsDisabled { get; set; }

    }
}

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Globalization;
using System.Xml.Linq;

namespace ManagementSystem.Entities
{
    public class Client
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }


        public string Name { get; set; }

        public string Surname { get; set; }

        public bool Gender { get; set; }

        public string CivilStatus { get; set; }

        public string City { get; set; }


        public string Address { get; set; }
        public int HouseNumber { get; set; }

        public int DoorNumber { get; set; }

        public int StairsNumber { get; set; }

        public string Postal { get; set; }

        public string Email { get; set; }
        public bool Status { get; set; }

        public string Bank { get; set; }


        public string IBAN { get; set; }

        public string SwiftCode { get; set; }
        public string Disease { get; set; }


        public int? AdvocateId { get; set; }
        public int? WorkerId { get; set; }
        public virtual Worker Worker { get; set; }
        public virtual Advocate Advocate { get; set; }



    }
}

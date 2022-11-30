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
        public int ClientId { get; set; }

        [Required(ErrorMessage = "Name ist erforderlich")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Nachname ist erforderlich")]
        public string Surname { get; set; }
        [Required(ErrorMessage = "Geschlecht ist erforderlich")]
        public bool Gender { get; set; }
        [Required(ErrorMessage = "Personenstand ist erforderlich")]
        public string CivilStatus { get; set; }
        [Required(ErrorMessage = "Stadt ist erforderlich")]
        public string City { get; set; }
        [Required(ErrorMessage = "Adresse ist erforderlich")]

        public string Address { get; set; }
        [Required(ErrorMessage = "Hausnummer ist erforderlich")]
        public int HouseNumber { get; set; }
        [Required(ErrorMessage = "Türnummer ist erforderlich")]
        public int DoorNumber { get; set; }
        [Required(ErrorMessage = "Stiegenummer ist erforderlich")]
        public int StairsNumber { get; set; }
        [Required(ErrorMessage = "Postleitzahl ist erforderlich")]
        public string Postal { get; set; }
        [Required(ErrorMessage = "Email ist erforderlich")]
        public string Email { get; set; }
        public bool Status { get; set; }
        [Required(ErrorMessage = "Bankkonto ist erforderlich")]
        public string Bank { get; set; }

        [Required(ErrorMessage = "IBAN ist erforderlich")]
        public string IBAN { get; set; }
        [Required(ErrorMessage = "Bic ist erforderlich")]
        public string SwiftCode { get; set; }
        public string Disease { get; set; }


        public int? AdvocateId { get; set; }
        public int? WorkerId { get; set; }
        public virtual Worker Worker { get; set; }
        public virtual Advocate Advocate { get; set; }



    }
}

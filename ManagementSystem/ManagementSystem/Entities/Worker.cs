using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ManagementSystem.Entities
{
    public class Worker
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int WorkerId { get; set; }
        [Required(ErrorMessage = "Name ist erforderlich")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Nachname ist erforderlich")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Email ist erforderlich")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Stadt ist erforderlich")]
        public string City { get; set; }

        [Required(ErrorMessage = "Geschlecht ist erforderlich")]
        public bool Gender { get; set; }

        [Required(ErrorMessage = "Personenstand ist erforderlich")]
        public string CivilStatus { get; set; }

        [Required(ErrorMessage = "Ort ist erforderlich")]
        public string Location { get; set; }

        [Required(ErrorMessage = "Adresse ist erforderlich")]
        public string Address { get; set; }

        [Required(ErrorMessage = "Strasse ist erforderlich")]
        public string Street { get; set; }

        [Required(ErrorMessage = "Postleitzahl ist erforderlich")]
        public string Postal { get; set; }

        [Required(ErrorMessage = "Hausnummer ist erforderlich")]
        public string HouseNumber { get; set; }

        [Required(ErrorMessage = "Stiegenummer ist erforderlich")]
        public string StairsNumber { get; set; }

        [Required(ErrorMessage = "Türnummer ist erforderlich")]
        public string DoorNumber { get; set; }

        [Required(ErrorMessage = "Bankkonto ist erforderlich")]
        public string Bank { get; set; }

        [Required(ErrorMessage = "IBAN ist erforderlich")]
        public string IBAN { get; set; }

        [Required(ErrorMessage = "Bic ist erforderlich")]
        public string SwiftCode { get; set; }

        [Required(ErrorMessage = "Salaris ist erforderlich")]
        public long Salary { get; set; }


    }
}

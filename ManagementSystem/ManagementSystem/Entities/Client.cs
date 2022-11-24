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
        public int ClientsId { get; set; }
        [Required]
        public string ClientsName { get; set; }
        [Required]
        public string ClientsSurname { get; set; }
        public string ClientsPhoneNumber { get; set; }
        public string ClientsCity { get; set; }
        public string ClientsAddres { get; set; }
        public int HouseNumber { get; set; }
        public int DoorNumber { get; set; }
        public int StairNumber { get; set; }
        public int? WorkerId { get; set; }
        public int? AdvocateId { get; set; }
        public virtual Worker Worker { get; set; }
        public virtual Advocate Advocate { get; set; }



    }
}

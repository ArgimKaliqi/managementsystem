using ManagementSystem.Entities;
using System.ComponentModel.DataAnnotations;

namespace ManagementSystem.DTOs
{
    public class ClientDTO
    {
        public int ClientsId { get; set; }
        public string ClientsName { get; set; }
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

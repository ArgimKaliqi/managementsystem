using System.ComponentModel.DataAnnotations;

namespace ManagementSystem.Entities
{
    public class Company
    {

        public int CompanyId { get; set; }
        [Required]
        public string CName { get; set; }
        [Required]
        public string CPhonenumber { get; set; }
        [Required]
        public string CAddress { get; set; }
        [Required]
        public string CEmail { get; set; }

        public string CBank { get; set; }

        public string CIBAN { get; set; }

        public string CSwiftCode { get; set; }
        [Required]
        public string ComType { get; set; }

    }
}

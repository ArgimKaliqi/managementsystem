using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ManagementSystem.DTOs
{
    public class  CreateCompanyDTO
    {
        public string CName { get; set; }
        public string CPhonenumber { get; set; }
        public string CAddress { get; set; }
        public string CEmail { get; set; }
        public string CBank { get; set; }
        public string CIBAN { get; set; }
        public string CSwiftCode { get; set; }
        public string ComType { get; set; }
    }
    public class UpdateCompanyDTO
    {
        public int CompanyId { get; set; }
        public string CName { get; set; }
        public string CPhonenumber { get; set; }
        public string CAddress { get; set; }
        public string CEmail { get; set; }
        public string CBank { get; set; }
        public string CIBAN { get; set; }
        public string CSwiftCode { get; set; }
        public string ComType { get; set; }

    }
}

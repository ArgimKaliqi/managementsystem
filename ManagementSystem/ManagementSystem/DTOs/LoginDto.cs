﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace App1.Controllers.DTOs
{
    public class LoginDto

    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}

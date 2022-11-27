﻿using AutoMapper;
using ManagementSystem.DTOs;
using ManagementSystem.Entities;

namespace ManagementSystem.Services
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<ClientDTO, Client>();
        }
    }
}

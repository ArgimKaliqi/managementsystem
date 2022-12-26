using AutoMapper;
using ManagementSystem.DTOs;
using ManagementSystem.Entities;
using System.Collections.Generic;

namespace ManagementSystem.Services
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<CreateClientDTO, Client>();
            CreateMap<UpdateClientDTO, Client>();
            CreateMap<CreateWorkerDTO, Worker>();
            CreateMap<UpdateWorkerDTO, Worker>();
            CreateMap<CreateAdvocateDTO, Advocate>();
            CreateMap<UpdateAdvocateDTO, Advocate>();
            CreateMap<CreateCompanyDTO, Company>();
            CreateMap<UpdateCompanyDTO, Company>();
            CreateMap<CreateTaskDTO, Tasks>();
            CreateMap<UpdateTaskDTO, Tasks>();
            CreateMap<TasksDto, Tasks>();
            

        }
    }
}

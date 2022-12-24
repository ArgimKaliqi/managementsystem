using App1.Interfaces;
using App1.Services;
using ManagementSystem.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace App1.Extensions
{
    //We use static so we dont need to create a new instance of this class in order to use it
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {



            services.AddDbContext<DataContext>(opt =>
            {
                // SQLITE
                //opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
                //SQL SERVER
                opt.UseSqlServer(config.GetConnectionString("DefaultConnection"));
            });
            services.AddScoped<ITokenService, TokenService>();
          
      

            return services;

        }
    }
}

using ManagementSystem.Entities;
using Microsoft.EntityFrameworkCore;

namespace ManagementSystem.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Appuser> Users { get; set; }
        public DbSet<Client> Clients { get; set; }  
        public DbSet<Worker> Workers { get; set; }
        public DbSet<Advocate> Advocates { get; set; }

        
    }
}

using ManagementSystem.Entities;
using Microsoft.EntityFrameworkCore;

namespace ManagementSystem.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<CoWorkers> CoWorkers { get; set; }
    }
}

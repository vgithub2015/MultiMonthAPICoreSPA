using Microsoft.EntityFrameworkCore;
using MultiMonth.API.Models;

namespace MultiMonth.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}

        public DbSet<Value> Values { get; set; }
    
    }

}
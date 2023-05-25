using Microsoft.EntityFrameworkCore;

namespace ReactCheescakeOrdering.Data
{
    public class OrdersDataContext : DbContext
    {
        private readonly string _connectionString;

        public OrdersDataContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }

        public DbSet<Order> Orders { get; set; }
        
    }

}



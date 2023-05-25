using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace ReactCheescakeOrdering.Data
{
    public class OrdersContextFactory : IDesignTimeDbContextFactory<OrdersDataContext>
    {
        public OrdersDataContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}ReactCheescakeOrdering.Web"))
                .AddJsonFile("appsettings.json")
                .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new OrdersDataContext(config.GetConnectionString("ConStr"));
        }
    }

}



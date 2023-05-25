namespace ReactCheescakeOrdering.Data
{
    public class OrdersRepository
    {
        private readonly string _connectionString;

        public OrdersRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Order> GetOrders()
        {
            using var context = new OrdersDataContext(_connectionString);
            return context.Orders.ToList();
        }

        public void AddOrder(Order order)
        {
            using var context = new OrdersDataContext(_connectionString);
            context.Orders.Add(order);
            context.SaveChanges();
        }

        public Order GetById(int id)
        {
            using var context = new OrdersDataContext(_connectionString);
            return context.Orders.FirstOrDefault(o => o.Id == id);
        }

        
    }

}



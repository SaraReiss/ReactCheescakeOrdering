using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactCheescakeOrdering.Data;
using System;

namespace ReactCheescakeOrdering.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {


        private string _connectionString;

        public OrdersController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpGet]
        [Route("getall")]
        public List<Order> GetAll()
        {
            var repo = new OrdersRepository(_connectionString);
            return repo.GetOrders();
        }

        [HttpPost]
        [Route("addorder")]
        public void AddPerson(Order order)
        {
            var repo = new OrdersRepository(_connectionString);
            repo.AddOrder(order);
        }

        [HttpGet]
        [Route("GetById")]
        public Order GetById(int id)
        {
            var repo = new OrdersRepository(_connectionString);
            return repo.GetById(id);
        }
    }
}

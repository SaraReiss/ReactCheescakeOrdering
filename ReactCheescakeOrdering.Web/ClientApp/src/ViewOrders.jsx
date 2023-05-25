import React,{useState, useEffect} from 'react';
import OrderRow from './OrderRow';
import axios from 'axios';

const VeiwOrders = ({ }) => {
    
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        const getOrders = async () => {
            const { data } = await axios.get('/api/orders/getall');
            setOrders(data);
        }

        getOrders();
    }, []);

    return (
        <div className="container" style={{ marginTop: '80px' }}>
        <div className="d-flex justify-content-center">
          <table className="table text-center shadow-lg" style={{ borderCollapse: 'separate', borderSpacing: '0px 15px', maxWidth: '80%' }}>
            <thead>
              <tr style={{ backgroundColor: 'rgb(33, 37, 41)', color: 'white', borderRadius: '15px' }}>
                <th>Name/Email</th>
                <th>Base Flavor</th>
                <th>Toppings</th>
                <th>Special Requests</th>
                <th>Quantity</th>
                <th>Delivery Date</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order =>
                            <OrderRow
                                key={order.id}
                                order={order}

                            />)}
            </tbody>
          </table>
        </div>
      </div>
          
    )
}

export default VeiwOrders;
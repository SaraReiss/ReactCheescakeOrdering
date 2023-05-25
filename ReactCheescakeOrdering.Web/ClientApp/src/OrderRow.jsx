import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

const OrderRow = ({ order }) => {
    const { id, name, email, baseFlavor, toppings, specialRequest, quantity, date, total} = order;
    
    return (
        <tr style={{ backgroundColor: "rgb(248, 249, 250)", borderRadius: 15 }}>
             <td style={{ paddingTop: 15, paddingBottom: 15 }}>
                <Link to={`/orderdetails/${id}`}>
                    {name} - {email}
                </Link>
            </td>
            <td>{baseFlavor}</td>
            <td>{toppings || 'N/A'}</td>
            <td>{specialRequest || 'N/A'}</td>
            <td>{quantity}</td>
            <td>{dayjs(date).format("MM/DD/YYYY")}</td>
            <td style={{ fontWeight: 'bold', color: 'green' }}>{total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
            
        </tr>
    )
}

export default OrderRow;
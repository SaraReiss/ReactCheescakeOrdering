
import React, { useState, } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const baseFlavors = ['Choose..', 'Classic', 'Red Velvet', 'Brownie'];
const toppingsArray = ['Chocolate Chips', 'Caramel Drizzle', 'Whipped Cream', ' Pecans', ' Almonds', 'Toasted Coconut ', 'Graham Cracker Crumble ', ' Cookie Dough', ' Mint Chocolate Chips', 'Caramelized Bananas ', ' Rainbow Sprinkles', 'Powdered Sugar ', ' White Chocolate Shavings', ' Peanut Butter Drizzle', 'Dark Chocolate Drizzle'];

const Order = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [baseFlavor, setBaseFlavor] = useState(baseFlavors[0]);
    const [selectedToppings, setSelectedToppings] = useState([]);
    const [specialRequest, setSpecialRequest] = useState('');
    const [quantity, SetQuantity] = useState(1);
    const [date, SetDate] = useState('');

    const getTotal = () => {
        if (baseFlavor === baseFlavors[0]) {
            return 0;
        }
        return (quantity * 49.99) + (selectedToppings.length * 3.95)
    }
    const onCheckBoxChange = topping => {
        if (selectedToppings.includes(topping)) {
            setSelectedToppings(selectedToppings.filter(t => t != topping))

        }
        else {
            setSelectedToppings([...selectedToppings, topping])
        }

    }
    const onFlavorChange = e => {

        setBaseFlavor(e.target.value)
        // const orderCopy = { ...order };
        // orderCopy[e.target.name] = e.target.value;
        // setOrder(orderCopy);
    }
    const onSubmitClick = async () => {

        await axios.post('/api/orders/addorder', {
            name, email, baseFlavor, toppings: selectedToppings.join(', '), specialRequest, quantity, date, total: getTotal()
        });
        navigate('/success');
    }

    return (
        <div className="container" style={{ marginTop: "80px" }}>
            <h1 className="text-center my-4">Cheesecake Factory Order Form</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input onChange={e => setName(e.target.value)} type="text" className="form-control" name='name' value={name} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" name='email' value={email} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Cheesecake Base Flavor ($49.99)</label>
                        <select className="form-select" value={baseFlavor} onChange={onFlavorChange} >
                            {baseFlavors.map((f) => <option key={f}>{f}</option>)}

                            {/* <option name=''>Choose...</option>
                            <option name='Classic'>Classic</option>
                            <option name='baseflavor'>Chocolate</option>
                            <option name='Red Velvet'>Red Velvet</option>
                            <option name='Brownie'>Brownie</option> */}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Toppings (each topping adds an additional $3.95)</label>
                        {toppingsArray.map (t =>{
                            return <div key={t} className="form-check">
                            <input className="form-check-input" type="checkbox" checked={selectedToppings.includes(t)} onChange={() => onCheckBoxChange(t)}/>
                            <label className="form-check-label">{t}</label>
                        </div>})
}

                       
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Special Requests</label>
                        <textarea onChange={e => setSpecialRequest(e.target.value)} type ="text" value={specialRequest} className="form-control" name='specialRequest' rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Quantity</label>
                        <input onChange={e => SetQuantity(e.target.value)} name='quantity' type="number" className="form-control" min="1" value={quantity} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Delivery Date</label>
                        <input onChange={e => SetDate(e.target.value)} name='date' type="date" className="form-control" value={date} />
                    </div>
                    <button type="submit" onClick={onSubmitClick} disabled={ date ==='' || name === '' || email === '' || +quantity < 1 || baseFlavor == baseFlavor[0]} className="btn btn-primary">Submit Order</button>
                </div>
                <div className="col-md-6 position-sticky" style={{ top: "2rem" }}>
                    <h2 className="mb-4">Live Preview</h2>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="data:image/jpeg;base64,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" className="card-img-top" alt="Cheesecake" />
                        <div className="card-body">
                            <h5 className="card-title">Your Custom Cheesecake</h5>
                            <p className="card-text">Base: {baseFlavor}</p>
                            <p className="card-text">Toppings: {selectedToppings.join(', ')}</p>
                            <p className="card-text">Special Requests: {specialRequest} </p>
                            <p className="card-text">Quantity: {quantity}</p>
                            <p className="card-text">Delivery Date: {dayjs(date).format("MM/DD/YYYY")}</p>
                            <p className="card-text fw-bold">Total: {getTotal()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Order;
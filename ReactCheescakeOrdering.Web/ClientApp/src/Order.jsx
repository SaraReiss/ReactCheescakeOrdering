
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

                        {/* <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Chocolate Chips</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Caramel Drizzle</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Whipped Cream</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Pecans</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label" >Almonds</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label" >Toasted Coconut</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label" >Graham Cracker Crumble</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label" >Cookie Dough</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label" >Mint Chocolate Chips</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label" >Caramelized Bananas</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Rainbow Sprinkles</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Powdered Sugar</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label" >White Chocolate Shavings</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Peanut Butter Drizzle</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Dark Chocolate Drizzle</label>
                        </div> */}
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
                        <img src="https://react-cheesecake-ordering.lit-projects.com/cheesecake.jpg" className="card-img-top" alt="Cheesecake" />
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
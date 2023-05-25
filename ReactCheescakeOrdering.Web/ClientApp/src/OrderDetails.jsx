import React, { useEffect, useState } from 'react'
import { Link, useParams, } from 'react-router-dom'
import axios from 'axios'
import dayjs from 'dayjs';

const OrderDetails = () => {

    const [order, setOrder] = useState([])


    const { Id } = useParams();
    //console.log(Id);
    useEffect(() => {
        const getbyid = async () => {
            const { data } = await axios.get(`/api/orders/getbyid?Id=${Id}`)
            setOrder(data)
            //console.log(data)
        }
        getbyid()
    }, [])

    const { name, email, baseFlavor, toppings, specialRequest, quantity, date, total } = order
    return (

        <div className="container" style={{ marginTop: 80 }}>
            <div className="d-flex align-items-center justify-content-center" style={{ height: 600 }}>
                <div className="card text-center shadow p-3 mb-5 bg-body rounded" style={{ width: 300, backgroundColor: "rgb(248, 249, 250)" }}>
                    <div className="card-body">
                        <h3 className="card-title fw-bold">{name}</h3>
                        <p className="card-text fs-5">{email}</p>
                        <p className="card-text fs-5">{baseFlavor}</p>
                        <p className="card-text fs-5">{toppings }</p>
                        <p className="card-text fs-5">{specialRequest}</p>
                        <p className="card-text fs-5">{quantity}</p>
                        <p className="card-text fs-5">{dayjs(date).format("MM/DD/YYYY")}</p>
                        <p className="card-text fs-5">
                            {!!total && total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                        </p>
                    </div>
                    <Link to="/viewOrders">
                        <button className="btn btn-primary w-100">Back to Orders</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default OrderDetails;
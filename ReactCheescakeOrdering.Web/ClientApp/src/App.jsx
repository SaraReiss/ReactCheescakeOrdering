import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Order from './Order';
import ViewOrders from './ViewOrders'
import OrderDetails from './OrderDetails'
import Success from './Success'
import Layout from './layout';


const App = () => {
    return   (
        <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/order' element={<Order />} />
                    <Route exact path='/ViewOrders' element={<ViewOrders />} />
                    <Route exact path='/success' element={<Success />} />
                    <Route exact path='/orderdetails/:Id' element={<OrderDetails />} />
                </Routes>
            </Layout>
    );
}

export default App;
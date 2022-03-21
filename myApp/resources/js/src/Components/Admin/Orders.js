import React, { useState, useEffect } from 'react';

const Orders = () => {
    let i=1
    const [Orders, setOrders] = useState([])

    const [click, setClick] = useState(false)
    useEffect(async () => {

        await axios.get("http://127.0.0.1:8000/api/Orders").then((response) => {
            setOrders(response.data.orders);

        });
    }, [click]);

const acceptedOrder=(Order)=>{

    axios.patch(`http://127.0.0.1:8000/api/acceptedOrder/${Order}`);
    setClick(click+1)

}


    return (
        <div >
            <h1>Orders Details</h1>

            <br /><br />
            <table id="customers" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>Farm Name</th>
                        <th>Governorate Name</th>
                        <th>Phone User</th>
                        {/* <th>price</th> */}
                        <th>Booking Date</th>
                        <th>Status</th>

                    </tr>
                </thead>
                {Orders ? Orders.map(Order =>


                    <tbody>
                        <tr>
                            <td>{i++}</td>
                            <td>{Order.name}</td>
                            <td>{Order.farmName}</td>
                            <td>{Order.governorateName}</td>
                            <td>{Order.phone}</td>
                            {/* <td>{Order.price}</td> */}
                            {/* <td><img src={'img/Farms/' + Order.image} width='100' /></td> */}
                            <td>{Order.date}</td>

                            <td>
                                <button variant="danger" onClick={() =>acceptedOrder(Order.id)}>
                                    {Order.status}
                                </button></td>





                        </tr>
                    </tbody>) : null}

            </table>
        </div>
    )
}

export default Orders

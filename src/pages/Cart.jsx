import React from 'react'
import HeroSection from '../components/home/HeroSection ';

const Cart = () => {
    return (
        <React.Fragment>
            <HeroSection />
            <div className="untree_co-section before-footer-section">
                <div className="container">

                    {/* Table */}
                    <div className="row mb-5">
                        <div className="col-md-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {cart.map(item => (
                                        <tr key={item.id}>
                                            <td>
                                                <img
                                                    src={`/images/${item.img}`}
                                                    className="img-fluid"
                                                    alt={item.name}
                                                    width="80"
                                                />
                                            </td>

                                            <td>{item.name}</td>

                                            <td>${item.price}</td>

                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <button
                                                        className="btn btn-outline-dark btn-sm"
                                                        onClick={() => decrease(item.id)}
                                                    >
                                                        -
                                                    </button>

                                                    <span className="mx-2">{item.qty}</span>

                                                    <button
                                                        className="btn btn-outline-dark btn-sm"
                                                        onClick={() => increase(item.id)}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </td>

                                            <td>${item.price * item.qty}</td>

                                            <td>
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => removeItem(item.id)}
                                                >
                                                    X
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="row">

                        {/* Left */}
                        <div className="col-md-6">
                            <button className="btn btn-dark me-2">Update Cart</button>
                            <button className="btn btn-outline-dark">Continue Shopping</button>

                            <div className="mt-4">
                                <label className="h5">Coupon</label>
                                <input
                                    type="text"
                                    className="form-control my-2"
                                    placeholder="Coupon Code"
                                />
                                <button className="btn btn-dark">Apply Coupon</button>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="col-md-6 text-end">
                            <h4>Cart Totals</h4>

                            <p>
                                Subtotal: <strong>${total}</strong>
                            </p>

                            <p>
                                Total: <strong>${total}</strong>
                            </p>

                            <button
                                className="btn btn-dark"
                                onClick={() => (window.location = "/checkout")}
                            >
                                Proceed To Checkout
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Cart








import { useState, useEffect } from 'react'
import axios from 'axios'

import product1 from '../../assets/images/product-1.png'
import product2 from '../../assets/images/product-2.png'
import product3 from '../../assets/images/product-3.png'
import cross from '../../assets/images/cross.svg'


const ProductSection = () => {
    const [products, setProducts] = useState([])


     const getProducts = async () => {
        const res = await axios.get('https://dummyjson.com/products')
        return res
    }
    useEffect(() => {
        console.log(getProducts())
    }, [])

    return (
        <div className="product-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                        <h2 className="mb-4 section-title">
                            Crafted with excellent material.
                        </h2>

                        <p className="mb-4">
                            Donec vitae odio quis nisl dapibus malesuada...
                        </p>
                        <p>
                            <a href="/shop" className="btn">
                                Explore
                            </a>
                        </p>
                    </div>
                    {[
                        { img: product1, title: "Nordic Chair", price: "$50.00" },
                        { img: product2, title: "Kruzo Aero Chair", price: "$78.00" },
                        { img: product3, title: "Ergonomic Chair", price: "$43.00" },
                    ].map((item, i) => (
                        <div key={i} className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="/cart">
                                <img
                                    src={item.img}
                                    className="img-fluid product-thumbnail"
                                    alt={item.title}
                                />
                                <h3 className="product-title">{item.title}</h3>
                                <strong className="product-price">{item.price}</strong>

                                <span className="icon-cross">
                                    <img src={cross} alt="cross" />
                                </span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductSection

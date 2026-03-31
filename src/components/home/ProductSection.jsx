import { useState, useEffect } from 'react'
import { getProduct } from '../../services/products'

import product1 from '../../assets/images/product-1.png'
import product2 from '../../assets/images/product-2.png'
import product3 from '../../assets/images/product-3.png'
import cross from '../../assets/images/cross.svg'


const ProductSection = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const featchData = async () => {
            try {
                const data = await getProduct()
                setProducts(data)
            }
            catch (err) {
                setError("Error fetching products");
            }
            finally {
                setLoading(false)
            }
        }
        featchData()
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
                    {
                        products.map((element, index) => (
                            <div key={index} className="col-12 col-md-4 col-lg-3 mb-5">
                                <a className="product-item" href="/cart">
                                    <img
                                        src={element.images}
                                        className="img-fluid product-thumbnail"
                                        alt={element.title}
                                    />
                                    <h3 className="product-title">{element.title}</h3>
                                    <strong className="product-price">{element.price}</strong>
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

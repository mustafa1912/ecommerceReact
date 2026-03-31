import React from 'react' 

const ProductSection = () => {
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
                </div>
            </div>
        </div>
    )
}

export default ProductSection

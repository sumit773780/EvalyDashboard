import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { products } from '../../data/products';
import { MdMoreVert } from 'react-icons/md';

const TreandingProducts = () => {
    const sideProducts = products;
    return (
        <>
            <Row>
                <Col lg={12} className="ps-lg-4">
                    <div>
                        <div className="d-flex justify-content-between p-3 pb-0 mb-0">
                            <h5 className="card-title-custom">Trending Products</h5>
                            <MdMoreVert size={20} className="card-actions-custom" />
                        </div>
                        <div className='ps-3 pt-0'><p>Total 10.4k Visitors</p></div>
                    </div>
                    <div className="side-product-list p-4">
                        {sideProducts.map((prod, id) => (
                            <div key={id} className="side-product-item">
                                <div className="product-details ms-5">
                                    <span className="product-title">{prod.name}</span>
                                    <span className="product-code">Item: {prod.itemCode}</span>
                                </div>
                                <span className="product-price">{prod.price}</span>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </>
    )
};
export default TreandingProducts
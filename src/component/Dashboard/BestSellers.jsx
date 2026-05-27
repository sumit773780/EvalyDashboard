import React from 'react';
import { Table, Row, Col, Badge } from 'react-bootstrap';
import { products } from '../../data/products';
import { MdMoreVert } from 'react-icons/md';

const BestSellers = () => {
  // Relational mappings: first 5 products for table, full catalog for side panel
  const tableProducts = products.slice(0, 5);

  return (
    <div className="premium-card">
      <Row className="gy-4">
        {/* Left Side: Product Stock Details Table */}
        <Col lg={12}>
          <div className="card-header-custom align-items-center mb-3">
            <h5 className="card-title-custom">Best Selling Products</h5>
            <MdMoreVert className="card-actions-custom" />
          </div>
          <div className="table-responsive">
            <Table className="table-custom" hover>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Total Order</th>
                  <th>Status</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {tableProducts.map((prod, id) => (
                  <tr key={id}>
                    <td className="fw-semibold text-dark">{prod.name}</td>
                    <td className="text-secondary">{prod.orders}</td>
                    <td>
                      <Badge  bg="white" className={`status-badge status-${prod.status.toLowerCase()}`}>
                        {prod.status}
                      </Badge>
                    </td>
                    <td className="fw-bold text-dark">{prod.price}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
        {/* Right Side: Product Codes & Quick Pricing Panel */}
      </Row>
    </div>
  );
};

export default BestSellers;

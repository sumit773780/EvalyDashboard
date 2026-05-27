import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { MdOutlineArrowBack } from 'react-icons/md';

const ProductList = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="p-0">
      <Card className="premium-card">
        <Card.Body className="d-flex flex-column align-items-center justify-content-center py-5">
          <h3 className="fw-bold mb-3">Product Catalog</h3>
          <p className="text-secondary text-center mb-4 text-desc-max-width">
            Filter products by categories, stock levels, rating metrics, wholesale values, search matches, and bulk tag options.
          </p>
          <Button 
            variant="primary" 
            onClick={() => navigate('/')} 
            className="d-flex align-items-center gap-2"
          >
            <MdOutlineArrowBack size={18} />
            Back to Dashboard
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductList;

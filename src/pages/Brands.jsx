import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { MdOutlineArrowBack } from 'react-icons/md';

const Brands = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="p-0">
      <Card className="premium-card">
        <Card.Body className="d-flex flex-column align-items-center justify-content-center py-5">
          <h3 className="fw-bold mb-3">Brands Registry</h3>
          <p className="text-secondary text-center mb-4 text-desc-max-width">
            Maintain supplier relationships, trademark documents, logo assets, brand performance figures, and product association grids.
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

export default Brands;

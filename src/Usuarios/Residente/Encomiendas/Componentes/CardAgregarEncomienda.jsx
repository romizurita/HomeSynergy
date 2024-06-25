import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';

function CardAgregarEncomienda() {
    const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/residente/encomiendas/agregar_encomiendas');
  };
  return (
    <Card style={{ width: '18rem' }}>
      <div><FontAwesomeIcon icon={faBoxOpen} size="4x" /></div>
      <Card.Body>
        <Card.Title>Agregar Encomienda</Card.Title>
        <Button variant="primary" onClick={handleRedirect}>Ir</Button>
      </Card.Body>
    </Card>
  );
}

export default CardAgregarEncomienda;
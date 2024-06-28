import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

function Juegos() {
    const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/residente/reservas');
  };
  return (
    <div style={{marginLeft:'100px',marginTop: '10px'}}>
    <Card style={{ width: '18rem' , height:'5rem'}}>
    <div style={{ marginLeft: '180px', marginTop: '9px'}}>
      <FontAwesomeIcon icon={faGamepad} size="4x" />
      </div> 
      
      <Card.Body>
      <div style={{marginTop: '-85px'}}>
        <Card.Title>Sala de Juegos</Card.Title>
        </div>
        <div style={{marginTop: '1px',marginLeft: '30px'}}>
        <Card style={{ width: '6rem' }}>
        <Button variant="primary" onClick={handleRedirect}>ir</Button>
        </Card>
        </div>
      </Card.Body>
      
    </Card>
    </div>
  );
}

export default Juegos;
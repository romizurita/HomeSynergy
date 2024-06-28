import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDoorOpen} from '@fortawesome/free-solid-svg-icons';

function CardAcceso_principal() {
    const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/residente/acceso');
  };
  return (
    <div style={{marginLeft:'250px'}}>
    <Card style={{ width: '18rem' , height:'8rem'}}>
    <div style={{ marginLeft: '180px', marginTop: '25px'}}>
      <FontAwesomeIcon icon={faDoorOpen} size="5x" />
      </div> 
      
      <Card.Body>
      <div style={{marginTop: '-95px'}}>
        <Card.Title>Acceso Principal</Card.Title>
        </div>
        <div style={{marginTop: '15px',marginLeft: '30px'}}>
        <Card style={{ width: '6rem' }}>
        <Button variant="primary" onClick={handleRedirect}>ir</Button>
        </Card>
        </div>
      </Card.Body>
      
    </Card>
    </div>
  );
}

export default CardAcceso_principal;
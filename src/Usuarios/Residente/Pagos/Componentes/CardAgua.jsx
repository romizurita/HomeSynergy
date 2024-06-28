import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';

function CardAgua() {
    const navigate = useNavigate();

    const handleRedirect = () => {
      navigate('/residente/pagos/agua');
    };
    return (
        <Card style={{ width: '18rem' , height:'8rem'}}>
            <div style={{ marginLeft: '180px', marginTop: '25px'}}><FontAwesomeIcon icon={faDroplet} size="5x" color='blue'/></div> 
            <Card.Body>
                <div style={{marginTop: '-95px'}}> <Card.Title>Agua</Card.Title></div>
                <div style={{marginTop: '15px',marginLeft: '30px'}}>
                    <Card style={{ width: '6rem' }}>
                    <Button variant="primary" onClick={handleRedirect}>ir</Button>
                    </Card>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CardAgua;
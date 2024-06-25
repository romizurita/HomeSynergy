import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';

function CardAgregarEncomienda() {
  return (
    <Card style={{ width: '18rem' }}>
      <div><FontAwesomeIcon icon={faBoxOpen} size="4x" /></div>
      <Card.Body>
        <Card.Title>Agregar Encomienda</Card.Title>
        <Button variant="primary">Ir</Button>
      </Card.Body>
    </Card>
  );
}

export default CardAgregarEncomienda;
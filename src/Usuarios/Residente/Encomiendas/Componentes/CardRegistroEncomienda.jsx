import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faAddressCard } from '@fortawesome/free-solid-svg-icons';

function CardRegistroEncomienda() {
  return (
    <Card style={{ width: '18rem' }}>
      <div><FontAwesomeIcon icon={faAddressCard} size="4x" /></div>
      <Card.Body>
        <Card.Title>Registrar Encomienda</Card.Title>
        <Button variant="primary">Ir</Button>
      </Card.Body>
    </Card>
  );
}

export default CardRegistroEncomienda;
import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import CardAgua from './Componentes/CardAgua';
import CardLuz from './Componentes/CardLuz';
import CardGastosComunes from './Componentes/CardGastosComunes';
import CardArriendo from './Componentes/CardArriendo';


function ResidentePagos() {

    return (
      <div style={{ marginLeft: '130px', padding: '20px' }}>
        <h1>Pagos</h1>
        <Row className="mb-4">
        <Col md={6}>
          <CardArriendo className="mb-4"/>
          <CardAgua className="mb-4"/>
        </Col>
        <Col md={6}>
          <CardLuz className="mb-4"/>
          <CardGastosComunes className="mb-4"/>
        </Col>
      </Row>
      </div>
    );
}
export default ResidentePagos;
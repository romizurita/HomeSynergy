import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import '../../../EstilosGlobales/tablas.css';

function PagoAgua() {


    const navigate = useNavigate();
    const [identificador, setIdentificador] = useState('');

    const handleRedirect = () => {
      navigate('/residente/pagos/agua/pagar');
    };
    const handleInputChange = (e) => {
        setIdentificador(e.target.value);
    };

  return (
    <div style={{ marginLeft: '130px', padding: '20px' }}>
        <h1>Pagos</h1>
        <h2>Agua</h2>
        <div className='rounded-div' style={{ backgroundColor: '#3264ec', padding: '10px', marginBottom: '10px' }}>
            <div className='rounded-div' style={{ backgroundColor: 'white', padding: '10px', marginBottom: '10px' }}>
                <Form>
                    <Form.Group controlId="formRut">
                      <Form.Label>Ingresa identificador</Form.Label>
                      <Form.Control
                        type="text"
                        value={identificador}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                </Form>
                <div style={{ textAlign: 'right' }}>
                        <Button variant="primary" onClick={handleRedirect}>Continuar</Button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default PagoAgua;
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import TablaPagar from './Componentes/TablaPagar';
import '../../../EstilosGlobales/basicos.css'

function Pagar() {

    const { identificador } = useParams();
    return (
      <div style={{ marginLeft: '130px', padding: '20px' }}>
          {/* <h2>Identificador recibido: {identificador}</h2> */}
          <h1>Pagar</h1>
          <div className='rounded-div' style={{ backgroundColor: '#3264ec', padding: '10px', marginBottom: '10px' }}>
            <div className='rounded-div' style={{ backgroundColor: 'white', padding: '10px', marginBottom: '10px' }}>
                <TablaPagar/>
            </div>
            <div style={{ textAlign: 'right' }}>
                <Button variant="primary" style={{backgroundColor:'#f2eb3f', color:'black'}}>Pagar</Button>
            </div>
        </div>
      </div>


    );
}

export default Pagar;
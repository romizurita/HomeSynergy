import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'; 
import '../../../EstilosGlobales/tablas.css';

function TablaLavadora() {
  const [data, setData] = useState([
    { tipo: 'Disponible', nombre: 'Lavadora 1', confirmar: '@mdo' },
    { tipo: 'Finalizando', nombre: 'Lavadora 2', confirmar: '@fat' },
    { tipo: 'Reservada', nombre: 'Secadora 2', confirmar: '@twitter' },
  ]);

  return (
    
    <>
      <div style={{ width: '70%', margin: '0 auto', marginTop: '30px' }}>
        <Table striped bordered hover className="rounded-table">
          <thead>
            <tr>
              <th className="encabezado-tabla">Estado</th>
              <th className="encabezado-tabla">Equipo</th>
              <th className="encabezado-tabla">Reservar</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>
                  {item.tipo}
                  {item.tipo === 'Disponible' && (
                    <FontAwesomeIcon
                      icon={faCheckCircle} 
                      style={{ marginLeft: '10px', color: 'green' }} 
                    />
                  )}
                  {item.tipo === 'Finalizando' && (
                    <FontAwesomeIcon
                      icon={faCircle} 
                      style={{ marginLeft: '10px', color: 'orange' }} 
                    />
                  )}
                  {item.tipo === 'Reservada' && (
                    <FontAwesomeIcon
                      icon={faTimesCircle} 
                      style={{ marginLeft: '10px', color: 'red' }} 
                    />
                  )}
                </td>
                <td>{item.nombre}</td>
                <td style={{ textAlign: 'center' }}>
                  {item.tipo !== 'Reservada' && <Form.Check type="checkbox" />}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>


  );
}

export default TablaLavadora;
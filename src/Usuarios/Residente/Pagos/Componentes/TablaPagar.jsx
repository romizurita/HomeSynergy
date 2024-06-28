import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import '../../../../EstilosGlobales/tablas.css';

function TablaPagar() {
  const [data, setData] = useState([
      { tipo: '1', nombre: 'Mark', fecha: 'Otto', confirmar: '@mdo' },
      { tipo: '2', nombre: 'Jacob', fecha: 'Thornton', confirmar: '@fat' },
      { tipo: '3', nombre: 'Larry the Bird', fecha: '', confirmar: '@twitter' },
  ]);

  return (
      <>
          <Table striped bordered hover className="rounded-table">
              <thead>
                  <tr>
                      <th className='encabezado-tabla'>Detalle</th>
                      <th className='encabezado-tabla'>Fecha de Emisión</th>
                      <th className='encabezado-tabla'>Fecha de vencimiento</th>
                      <th className='encabezado-tabla'>Valor</th>
                      <th className='encabezado-tabla'>Seleccionar</th>
                  </tr>
              </thead>
              <tbody>
                <tr>
                    <td>Saldo mes anterior</td>
                    <td>2024-05-01</td>
                    <td>2024-05-31</td>
                    <td>$28.950</td>
                    <td style={{ textAlign: 'center' }}><Form.Check type="checkbox" /></td> 
                </tr>
                <tr>
                    <td>Saldo mes actual</td>
                    <td>2024-06-01</td>
                    <td>2024-06-31</td>
                    <td>$25.300</td>
                    <td style={{ textAlign: 'center' }}><Form.Check type="checkbox" /></td> 
                </tr>
              </tbody>
          </Table>

      </>
  );
}

export default TablaPagar;
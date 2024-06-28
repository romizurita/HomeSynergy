import React from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import '../../../../EstilosGlobales/tablas.css';

function TablaResidente() {

  return (
    <>
      <Table striped bordered hover className="rounded-table">
        <thead>
          <tr>
            <th className='encabezado-tabla' colSpan="2">Residentes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><FontAwesomeIcon icon={faCircle} style={{ color: 'green' }} /> Residente 1</td>
          </tr>
          <tr>
            <td><FontAwesomeIcon icon={faCircle} style={{ color: 'green' }} /> Residente 2</td>
          </tr>
          <tr>
            <td><FontAwesomeIcon icon={faCircle} style={{ color: 'green' }} /> Residente 3</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default TablaResidente;
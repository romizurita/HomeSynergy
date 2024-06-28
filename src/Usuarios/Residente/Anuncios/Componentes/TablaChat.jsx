import React from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faScaleBalanced, faPerson, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import '../../../../EstilosGlobales/tablas.css';

function TablaChat() {

  return (
    <>
      <Table striped bordered hover className="rounded-table">
        <thead>
          <tr>
            <th className='encabezado-tabla' colSpan="2">Administrador 1</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Les informamos que el próximo miércoles 30 de junio de 2024, se llevará a cabo el mantenimiento preventivo de los ascensores. Los trabajos comenzarán a las 8:00 AM y se espera que finalicen a las 5:00 PM. Durante este periodo, los ascensores no estarán en funcionamiento. Les recomendamos tomar las precauciones necesarias y utilizar las escaleras.</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default TablaChat;
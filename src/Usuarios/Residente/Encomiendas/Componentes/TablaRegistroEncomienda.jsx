import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen, faCircle } from '@fortawesome/free-solid-svg-icons';
import '../../../../EstilosGlobales/tablas.css';

function TablaRegistroEncomienda({data}) {
    
    const handleEdit = (index) => {
      // Lógica para editar la fila
      console.log('Editando fila:', index);
    };
  
    const handleDelete = (index) => {
      const newData = data.filter((_, i) => i !== index);
      setData(newData);
    };

    const getColorByEstado = (estado) => {
      switch (estado) {
        case 'Espera':
          return 'red';
        case 'Recepción':
          return 'yellow';
        case 'Entregado':
          return 'green';
        default:
          return 'gray';
      }
    };
    return (
      <Table striped bordered hover className="rounded-table">
        <thead>
          <tr>
            <th className='encabezado-tabla'>Tipo</th>
            <th className='encabezado-tabla'>Destinatario</th>
            <th className='encabezado-tabla'>Fecha estimada de llegada</th>
            <th className='encabezado-tabla'>Estado</th>
            <th className='encabezado-tabla'>Acción</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.tipo}</td>
              <td>{row.destinatario}</td>
              <td>{row.fecha}</td>
              <td>
                <FontAwesomeIcon icon={faCircle} style={{ color: getColorByEstado(row.estado) }} />
                <span style={{ marginLeft: '8px' }}>{row.estado}</span>
              </td>
              <td>
              <Button variant="link" onClick={() => handleEdit(index)}>
                <FontAwesomeIcon icon={faPen} />
              </Button>
              <Button variant="link" onClick={() => handleDelete(index)}>
                <FontAwesomeIcon icon={faTrash} color="red"/>
              </Button>
            </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  
  export default TablaRegistroEncomienda;
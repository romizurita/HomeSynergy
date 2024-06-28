import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import ModalAgregarEncomienda from './ModalAgregarEncomienda';
import '../../../../EstilosGlobales/tablas.css';

function TablaAgregarEncomienda() {
  const [data, setData] = useState([
      { tipo: '1', nombre: 'Mark', fecha: 'Otto', confirmar: '@mdo' },
      { tipo: '2', nombre: 'Jacob', fecha: 'Thornton', confirmar: '@fat' },
      { tipo: '3', nombre: 'Larry the Bird', fecha: '', confirmar: '@twitter' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newData, setNewData] = useState({ tipo: '', nombre: '', fecha: '' });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e, rowIndex, field) => {
      const newData = [...data];
      newData[rowIndex][field] = e.target.value;
      setData(newData);
  };

  const handleOpenModal = (rowIndex) => {
      setEditingIndex(rowIndex);
      setNewData(data[rowIndex]);
      setShowModal(true);
  };

  const handleCloseModal = () => {
      setShowModal(false);
      setNewData({ tipo: '', nombre: '', fecha: '' });
  };

  const handleConfirm = () => {
      setData(prevData => {
          const newDataArray = [...prevData];
          newDataArray[editingIndex] = newData;
          return newDataArray;
      });
      setShowModal(false);
      setNewData({ tipo: '', nombre: '', fecha: '' });
  };

  return (
      <>
          <Table striped bordered hover>
              <thead>
                  <tr>
                      <th className='encabezado-tabla'>Tipo</th>
                      <th className='encabezado-tabla'>A nombre de</th>
                      <th className='encabezado-tabla'>Fecha estimada</th>
                      <th className='encabezado-tabla'>Confirmar</th>
                  </tr>
              </thead>
              <tbody>
                  {data.map((row, index) => (
                      <tr key={index}>
                          <td>
                              <Form.Control
                                  type="text"
                                  value={row.tipo}
                                  onChange={(e) => handleInputChange(e, index, 'tipo')}
                              />
                          </td>
                          <td>
                              <Form.Control
                                  type="text"
                                  value={row.nombre}
                                  onChange={(e) => handleInputChange(e, index, 'nombre')}
                              />
                          </td>
                          <td>
                              <Form.Control
                                  type="text"
                                  value={row.fecha}
                                  onChange={(e) => handleInputChange(e, index, 'fecha')}
                              />
                          </td>
                          <td>
                              <Button variant="primary" onClick={() => handleOpenModal(index)}>
                                  Confirmar
                              </Button>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </Table>

          <ModalAgregarEncomienda
              show={showModal}
              handleClose={handleCloseModal}
              handleConfirm={handleConfirm}
              newData={newData}
          />
      </>
  );
}

export default TablaAgregarEncomienda;
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import TablaRegistroEncomienda from './Componentes/TablaRegistroEncomienda';
import ModalAgregarEncomienda from './Componentes/ModalAgregarEncomienda';

function RegistroEncomiendas() {
  const [showModal, setShowModal] = useState(false);
  const [newData, setNewData] = useState({ tipo: '',destinatario: '', fecha: '', estado: 'Espera'});
  const [data, setData] = useState([
    { tipo: 'Paquete', destinatario: 'Emily', fecha: '2024-06-26', estado:'Entregado' },
    { tipo: 'Caja', destinatario: 'Yulissa', fecha: '2024-09-08', estado:'Recepción' },
    { tipo: 'Sobre', destinatario: 'Romina', fecha: '2024-11-13', estado: 'Espera'},
  ]);

  const handleInputChange = (e, field) => {
    setNewData({
      ...newData,
      [field]: e.target.value
    });
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewData({ tipo: '', destinatario: '', fecha: '', estado: ''});
  };

  const handleConfirm = () => {
    setData([...data, newData]);
    setShowModal(false);
    setNewData({ tipo: '', destinatario: '', fecha: '', estado: ''});
  };

  return (
    <div>
      <div className="text-end mb-3">
        <Button variant="primary" onClick={handleOpenModal}>Agregar Encomienda</Button>
      </div>
      <TablaRegistroEncomienda data={data} />
      <ModalAgregarEncomienda
        show={showModal}
        handleClose={handleCloseModal}
        handleConfirm={handleConfirm}
        newData={newData}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}

export default RegistroEncomiendas;
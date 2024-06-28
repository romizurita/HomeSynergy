import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import '../../../../EstilosGlobales/modal.css';

function ModalAgregarEncomienda({ show, handleClose, handleConfirm, newData, handleInputChange }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header className='encabezado-modal' closeButton>
        <Modal.Title>Agregar Encomienda</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="formTipo">
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              type="text"
              value={newData.tipo}
              onChange={(e) => handleInputChange(e, 'tipo')}
            />
          </Form.Group>

          <Form.Group controlId="formDestinatario">
            <Form.Label>Destinatario</Form.Label>
            <Form.Control
              type="text"
              value={newData.destinatario}
              onChange={(e) => handleInputChange(e, 'destinatario')}
            />
          </Form.Group>

          <Form.Group controlId="formFecha">
            <Form.Label>Fecha estimada de llegada</Form.Label>
            <Form.Control
              type="date"
              value={newData.fecha}
              onChange={(e) => handleInputChange(e, 'fecha')}
            />
          </Form.Group>

          
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
        <Button variant="primary" onClick={handleConfirm}>Agregar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalAgregarEncomienda;
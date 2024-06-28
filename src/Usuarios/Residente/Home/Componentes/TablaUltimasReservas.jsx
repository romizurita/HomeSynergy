import React from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faScaleBalanced, faPerson, faCircle, faCommentDots, faShirt } from '@fortawesome/free-solid-svg-icons';
import '../../../../EstilosGlobales/tablas.css';

function TablaUltimasReservas() {
    const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/residente/anuncios/chat');
  };
  return (
    <>
      <Table striped bordered hover className="rounded-table">
        <thead>
          <tr>
            <th className='encabezado-tabla' colSpan="2">Próximas Reservas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: '60px', textAlign: 'center' }}><FontAwesomeIcon icon={faCircle} color ="#3264EC"/> Lavandería 26 de Junio</td>
            <td style={{ width: '60px', textAlign: 'center' }}><Button style={{width: '40px', height: '40px',backgroundColor:'#24116F', color:'black', borderRadius:'10px'}} onClick={handleRedirect}><FontAwesomeIcon icon={faShirt} color="white" text-align="center"/></Button></td>
          </tr>
          <tr>
            <td style={{ width: '60px', textAlign: 'center' }}><FontAwesomeIcon icon={faCircle} color ="#3264EC"/> Lavandería 26 de Junio</td>
            <td style={{ width: '60px', textAlign: 'center' }}><Button style={{width: '40px', height: '40px',backgroundColor:'#24116F', color:'black', borderRadius:'10px'}} onClick={handleRedirect}><FontAwesomeIcon icon={faShirt} color="white" text-align="center"/></Button></td>
          </tr>
          <tr>
            <td style={{ width: '60px', textAlign: 'center' }}><FontAwesomeIcon icon={faCircle} color ="#3264EC"/> Lavandería 26 de Junio</td>
            <td style={{ width: '60px', textAlign: 'center' }}><Button style={{width: '40px', height: '40px',backgroundColor:'#24116F', color:'black', borderRadius:'10px'}} onClick={handleRedirect}><FontAwesomeIcon icon={faShirt} color="white" text-align="center"/></Button></td>
          </tr>
          <tr>
            <td style={{ width: '60px', textAlign: 'center' }}><FontAwesomeIcon icon={faCircle} color ="#3264EC"/> Lavandería 26 de Junio</td>
            <td style={{ width: '60px', textAlign: 'center' }}><Button style={{width: '40px', height: '40px',backgroundColor:'#24116F', color:'black', borderRadius:'10px'}} onClick={handleRedirect}><FontAwesomeIcon icon={faShirt} color="white" text-align="center"/></Button></td>
          </tr>
          <tr>
            <td style={{ width: '60px', textAlign: 'center' }}><FontAwesomeIcon icon={faCircle} color ="#3264EC"/> Lavandería 26 de Junio</td>
            <td style={{ width: '60px', textAlign: 'center' }}><Button style={{width: '40px', height: '40px',backgroundColor:'#24116F', color:'black', borderRadius:'10px'}} onClick={handleRedirect}><FontAwesomeIcon icon={faShirt} color="white" text-align="center"/></Button></td>
          </tr>
          <tr>
            <td style={{ width: '60px', textAlign: 'center' }}><FontAwesomeIcon icon={faCircle} color ="#3264EC"/> Lavandería 26 de Junio</td>
            <td style={{ width: '60px', textAlign: 'center' }}><Button style={{width: '40px', height: '40px',backgroundColor:'#24116F', color:'black', borderRadius:'10px'}} onClick={handleRedirect}><FontAwesomeIcon icon={faShirt} color="white" text-align="center"/></Button></td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default TablaUltimasReservas;
import React from 'react';
import Lavanderia from './CardLavanderia';
import Eventos from './CardSalaEventos';
import Card from 'react-bootstrap/Card';
import Juegos from './CardSalaJuegos';
import Gym from './CarGimnasio';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { faCalendarAlt, faCircle, faShirt } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function ResidenteReservas() {
    return (
      <div style={{ marginLeft: '130px', padding: '20px' }}>
          <h1>Reservas y Eventos</h1>
          
         
          <div className='row'>
            <div className='col-7'>
              <Card >
              <Lavanderia/>
              <Eventos/>
              <Juegos/>
              <Gym/>
              </Card>
            </div>
            
            <div className='col-5'>
              <Table striped bordered hover className="rounded-table">
                <thead>
                  <tr>
                    <th className='encabezado-tabla' colSpan="2">Próximas Reservas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ width: '60px', textAlign: 'center' }}><FontAwesomeIcon icon={faCircle} color ="#3264EC"/> Lavandería 26 de Junio</td>
                    <td style={{ width: '60px', textAlign: 'center' }}><Button style={{width: '40px', height: '40px',backgroundColor:'#24116F', color:'black', borderRadius:'10px'}}><FontAwesomeIcon icon={faShirt} color="white" text-align="center"/></Button></td>
                  </tr>
                  <tr>
                    <td style={{ width: '60px', textAlign: 'center' }}><FontAwesomeIcon icon={faCircle} color ="#3264EC"/> Lavandería 26 de Junio</td>
                    <td style={{ width: '60px', textAlign: 'center' }}><Button style={{width: '40px', height: '40px',backgroundColor:'#24116F', color:'black', borderRadius:'10px'}}><FontAwesomeIcon icon={faShirt} color="white" text-align="center"/></Button></td>
                  </tr>
                  <tr>
                    <td style={{ width: '60px', textAlign: 'center' }}><FontAwesomeIcon icon={faCircle} color ="#3264EC"/> Lavandería 26 de Junio</td>
                    <td style={{ width: '60px', textAlign: 'center' }}><Button style={{width: '40px', height: '40px',backgroundColor:'#24116F', color:'black', borderRadius:'10px'}}><FontAwesomeIcon icon={faShirt} color="white" text-align="center"/></Button></td>
                  </tr>
                  <tr>
                    <td style={{ width: '60px', textAlign: 'center' }}><FontAwesomeIcon icon={faCircle} color ="#3264EC"/> Lavandería 26 de Junio</td>
                    <td style={{ width: '60px', textAlign: 'center' }}><Button style={{width: '40px', height: '40px',backgroundColor:'#24116F', color:'black', borderRadius:'10px'}}><FontAwesomeIcon icon={faShirt} color="white" text-align="center"/></Button></td>
                  </tr>
                  <tr>
                    <td style={{ width: '60px', textAlign: 'center' }}><FontAwesomeIcon icon={faCircle} color ="#3264EC"/> Lavandería 26 de Junio</td>
                    <td style={{ width: '60px', textAlign: 'center' }}><Button style={{width: '40px', height: '40px',backgroundColor:'#24116F', color:'black', borderRadius:'10px'}}><FontAwesomeIcon icon={faShirt} color="white" text-align="center"/></Button></td>
                  </tr>
                  <tr>
                    <td style={{ width: '60px', textAlign: 'center' }}><FontAwesomeIcon icon={faCircle} color ="#3264EC"/> Lavandería 26 de Junio</td>
                    <td style={{ width: '60px', textAlign: 'center' }}><Button style={{width: '40px', height: '40px',backgroundColor:'#24116F', color:'black', borderRadius:'10px'}}><FontAwesomeIcon icon={faShirt} color="white" text-align="center"/></Button></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
      </div>
        
      );
}
export default ResidenteReservas;
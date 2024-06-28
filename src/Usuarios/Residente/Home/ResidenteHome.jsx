import React from 'react';
import '../../../EstilosGlobales/basicos.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faLock, faCreditCard, faCalendarDays, faBullhorn, faBox} from '@fortawesome/free-solid-svg-icons';
import TablaUltimosAnuncios from './Componentes/TablaUltimosAnuncios';
import TablaUltimasReservas from './Componentes/TablaUltimasReservas';

function ResidenteHome() {
    return (
      <div style={{ marginLeft: '130px', padding: '20px' }}>
        <div className='row'>
          <div className='col-7'>
            <div className='row'>
              <div className='rounded-div' style={{ backgroundColor: '#3264EC', padding: '10px', marginBottom: '10px', color:'white'}}><h1>Bienvenido Usuario</h1></div>
            </div>
            <div className='row'>
              <div className='rounded-div' style={{ backgroundColor: 'white', padding: '10px', marginBottom: '10px', color:'black', borderColor: '#3264EC', borderWidth: '4px', borderStyle: 'solid'}}><TablaUltimosAnuncios/></div>
            </div>
            <div className='row'>
              <div className='col'>
                <td style={{ width: '60px', textAlign: 'center' }}><Button style={{width: '100px', height: '100px',backgroundColor:'#24116F', color:'black', borderRadius:'10px'}}><FontAwesomeIcon icon={faBox} color="white" text-align="center" size="3x"/></Button></td>
              </div>
              <div className='col'>
              <td style={{ width: '60px', textAlign: 'center' }}><Button style={{width: '100px', height: '100px',backgroundColor:'#24116F', color:'black', borderRadius:'10px'}}><FontAwesomeIcon icon={faLock} color="white" text-align="center" size="3x"/></Button></td>
              </div>
              <div className='col'>
              <td style={{ width: '60px', textAlign: 'center' }}><Button style={{width: '100px', height: '100px',backgroundColor:'#24116F', color:'black', borderRadius:'10px'}}><FontAwesomeIcon icon={faCreditCard} color="white" text-align="center" size="3x"/></Button></td>
              </div>
              <div className='col'>
              <td style={{ width: '60px', textAlign: 'center' }}><Button style={{width: '100px', height: '100px',backgroundColor:'#24116F', color:'black', borderRadius:'10px'}}><FontAwesomeIcon icon={faCalendarDays} color="white" text-align="center" size="3x"/></Button></td>
              </div>
              <div className='col'>
              <td style={{ width: '60px', textAlign: 'center' }}><Button style={{width: '100px', height: '100px',backgroundColor:'#24116F', color:'black', borderRadius:'10px'}}><FontAwesomeIcon icon={faBullhorn} color="white" text-align="center" size="3x"/></Button></td>
              </div>
            </div>
          </div>
          <div className='col-5'>
          <div className='rounded-div' style={{ backgroundColor: 'white', padding: '10px', marginBottom: '10px', color:'black'}}><TablaUltimasReservas/></div>
          </div>
        </div>
      </div>
    );
}
export default ResidenteHome;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQrcode} from '@fortawesome/free-solid-svg-icons';
import {faDumbbell} from '@fortawesome/free-solid-svg-icons';

function A_gym() {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/residente/acceso/gym');
  };

    return (
    <div style={{ marginLeft: '130px', padding: '20px' }}>
      <h1>Control de Acceso</h1>
      <h2>Gimnasio</h2>
      <div style={{marginLeft:'250px', marginTop: '-15px'}}>
        <Card style={{ width: '40rem' , height:'25rem',backgroundColor: '#3264ec'}}>

          <div style={{ marginLeft: '50px', marginTop: '45px'}}>
          <Card style={{ width: '33rem' , height:'19rem'}}>
          <div style={{ marginLeft: '200px', marginTop: '70px'}}>
            <FontAwesomeIcon icon={faQrcode} size="10x" />
            </div> 
              
              <Card.Body>
              <div style={{ marginLeft: '150px', marginTop: '-320px'}}>
              <Card style={{ width: '13rem' , height:'6rem',backgroundColor: '#24116F'}}>
             
              <div style={{ marginLeft: '65px', marginTop: '15px'}}>
                <FontAwesomeIcon icon={faDumbbell} size="4x" color='white' />
                </div>
              
              <div style={{marginLeft: '20px',marginTop: '310px'}}>
                <Card.Title>Escanear Codigo</Card.Title>
                </div>
                <div style={{marginTop: '15px',marginLeft: '30px'}}>
                </div>
                </Card>
                </div>
              </Card.Body>
              </Card>
              </div>
            </Card>
            </div>
            </div>
      );
}
export default A_gym;
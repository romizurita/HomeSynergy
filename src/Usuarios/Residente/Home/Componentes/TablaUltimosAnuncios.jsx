import React from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faScaleBalanced, faPerson, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import '../../../../EstilosGlobales/tablas.css';

function TablaUltimosAnuncios() {
    const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/residente/anuncios');
  };
  return (
    <>
      <Table striped bordered hover className="rounded-table">
        <thead>
          <tr>
            <th colSpan="2"><h2>Últimos Anuncios</h2></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: '60px', textAlign: 'center' }}><Button style={{width: '60px', height: '60px', backgroundColor:'#24116F', color:'black', borderRadius:'10px'}} onClick={handleRedirect}><FontAwesomeIcon icon={faGear} size="2x" color="white"/></Button></td>
            <td>Les informamos que el próximo miércoles 30 de junio de 2024, se llevará a cabo el mantenimiento preventivo de los ascensores. Los trabajos comenzarán a las 8:00 AM y se espera que finalicen a las 5:00 PM.</td>
          </tr>
          <tr>
          <td style={{ width: '60px', textAlign: 'center' }}><Button style={{width: '60px', height: '60px',backgroundColor:'#24116F', color:'black', borderRadius:'10px'}} onClick={handleRedirect}><FontAwesomeIcon icon={faScaleBalanced} size="2x" color="white"/></Button></td>
            <td>Les recordamos que el horario de silencio en el edificio es de 10:00 PM a 7:00 AM. Durante este periodo, se debe evitar la realización de actividades ruidosas que puedan perturbar la tranquilidad de los vecinos.</td>
          </tr>
          <tr>
          <td style={{ width: '60px', textAlign: 'center' }}><Button style={{width: '60px', height: '60px',backgroundColor:'#24116F', color:'black', borderRadius:'10px'}} onClick={handleRedirect}><FontAwesomeIcon icon={faPerson} size="2x" color="white"/></Button></td>
            <td>Se les convoca a la reunión ordinaria de la comunidad que se celebrará el próximo martes 5 de julio de 2024, a las 7:00 PM en el salón de eventos del edificio.</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default TablaUltimosAnuncios;
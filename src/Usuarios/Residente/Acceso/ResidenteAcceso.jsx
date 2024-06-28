import React from 'react';
import CardAcceso_principal from './CardAcceso_Principal';
import Lavanderia from './CardLavanderia';
import SalaEventos from './CardSalaEventos';
import Juegos from './CardSalaJuegos';
import Bicicletero from './CardBicicletero';
import Gym from './CardGimnasio';


function ResidenteAcceso() {
  
    return (
        
          <div style={{ marginLeft: '130px', padding: '20px' }}>
          <h1>Control de Acceso</h1>
          <CardAcceso_principal/>
          <Lavanderia/>
          <SalaEventos/>
          <Juegos/>
          <Bicicletero/>
          <Gym/>
        </div>
      );
}
export default ResidenteAcceso;
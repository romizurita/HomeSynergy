import React from 'react';
import CardAgregarEncomienda from './Componentes/CardAgregarEncomienda';
import CardRegistroEncomienda from './Componentes/CardRegistroEncomienda';
import RegistroEncomiendas from './RegistroEncomienda';
function ResidenteEncomiendas() {
    return (
        <div style={{ marginLeft: '130px', padding: '20px' }}>
          <h1>Encomiendas</h1>
          <RegistroEncomiendas/>
        </div>
      );
}
export default ResidenteEncomiendas;
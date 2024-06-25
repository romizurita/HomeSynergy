import React from 'react';
import CardAgregarEncomienda from './Componentes/CardAgregarEncomienda';
import CardRegistroEncomienda from './Componentes/CardRegistroEncomienda';
function ResidenteEncomiendas() {
    return (
        <div style={{ marginLeft: '130px', padding: '20px' }}>
          <h1>Encomiendas</h1>
          <CardAgregarEncomienda/>
          <CardRegistroEncomienda/>
        </div>
      );
}
export default ResidenteEncomiendas;
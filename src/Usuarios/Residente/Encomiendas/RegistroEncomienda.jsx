import React from 'react';
import TablaRegistroEncomienda from './Componentes/TablaRegistroEncomienda';
function ResidenteEncomiendas() {
    return (
        <div style={{ marginLeft: '130px', padding: '20px' }}>
          <h1>Encomiendas</h1>
          <h2>Registro de Encomiendas</h2>
          <TablaRegistroEncomienda/>
        </div>
      );
}
export default ResidenteEncomiendas;
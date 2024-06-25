import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faAddressCard } from '@fortawesome/free-solid-svg-icons';

function TablaAgregarEncomienda() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>A nombre de</th>
            <th>Fecha estimada</th>
            <th>Confirmar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  
  export default TablaAgregarEncomienda;
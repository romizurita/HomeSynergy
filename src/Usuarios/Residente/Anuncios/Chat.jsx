import React from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import TablaChat from './Componentes/TablaChat';
import TablaAdmin from './Componentes/TablaAdmin';
import TablaResidente from './Componentes/TablaResidente';

function Chat() {
  return (
    <div style={{ marginLeft: '130px', padding: '20px' }}>
        <h1>Chat</h1>
        <div className='row'>
            <div className='col'>
                <TablaChat/>
            </div>
            <div className='col'>
                <div className='row'>
                    <TablaAdmin/>
                </div>
                <div className='row'>
                    <TablaResidente/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Chat;
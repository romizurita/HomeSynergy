import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ResidenteLayout from '../Usuarios/Residente/ResidenteLayout';
import ResidenteHome from '../Usuarios/Residente/Home/ResidenteHome';
import ResidenteEncomiendas from '../Usuarios/Residente/Encomiendas/ResidenteEncomiendas';
import AgregarEncomienda from '../Usuarios/Residente/Encomiendas/AgregarEncomienda'
import RegistroEncomienda from '../Usuarios/Residente/Encomiendas/RegistroEncomienda'
import ResidenteAnuncios from '../Usuarios/Residente/Anuncios/ResidenteAnuncios';
import Chat from '../Usuarios/Residente/Anuncios/Chat';
import ResidenteAcceso from '../Usuarios/Residente/Acceso/ResidenteAcceso';
import A_gym from '../Usuarios/Residente/Acceso/A_gym';
import ResidentePagos from '../Usuarios/Residente/Pagos/ResidentePagos';
import PagoAgua from '../Usuarios/Residente/Pagos/PagoAgua';
import Pagar from '../Usuarios/Residente/Pagos/Pagar';
import ResidenteReservas from '../Usuarios/Residente/Reservas/ResidenteReservas';
import R_lavanderia from '../Usuarios/Residente/Reservas/lavanderia';



const AppRutas = () => {
    return(
        <Routes> 
            <Route path="/residente/*" element={<ResidenteLayout />}>
                <Route path="home" element={<ResidenteHome />} />
                <Route path="encomiendas" element={<ResidenteEncomiendas />} />
                <Route path="encomiendas/agregar_encomiendas" element={<AgregarEncomienda />} />
                <Route path="encomiendas/registro_encomiendas" element={<RegistroEncomienda />} />
                <Route path="anuncios" element={<ResidenteAnuncios />} />
                <Route path="anuncios/chat" element={<Chat />} />
                <Route path="acceso" element={<ResidenteAcceso />} />
                <Route path="acceso/gym" element={<A_gym />} />
                <Route path="pagos" element={<ResidentePagos />} />
                <Route path="pagos/agua" element={<PagoAgua />} />
                <Route path="pagos/agua/pagar" element={<Pagar />} />
                <Route path="reservas" element={<ResidenteReservas />} />
                <Route path="reservas/lavanderia" element={<R_lavanderia/>} />
            </Route>
        </Routes>
    );
};
export default AppRutas;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ResidenteHome from '../Usuarios/Residente/Home/ResidenteHome';
import ResidenteEncomiendas from '../Usuarios/Residente/Encomiendas/ResidenteEncomiendas';
import ResidenteAnuncios from '../Usuarios/Residente/Anuncios/ResidenteAnuncios';
import ResidenteAcceso from '../Usuarios/Residente/Acceso/ResidenteAcceso';
import ResidentePagos from '../Usuarios/Residente/Pagos/ResidentePagos';
import ResidenteReservas from '../Usuarios/Residente/Reservas/ResidenteReservas';

const AppRutas = () => {
    return(
        <Routes>
        <Route path="/residente/home" element={<ResidenteHome />} />
        <Route path="/residente/encomiendas" element={<ResidenteEncomiendas />} />
        <Route path="/residente/anuncios" element={<ResidenteAnuncios />} />
        <Route path="/residente/acceso" element={<ResidenteAcceso />} />
        <Route path="/residente/pagos" element={<ResidentePagos />} />
        <Route path="/residente/reservas" element={<ResidenteReservas />} />
        </Routes>
    );
};
export default AppRutas;
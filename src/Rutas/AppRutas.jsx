import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ResidenteLayout from '../Usuarios/Residente/ResidenteLayout';
import ResidenteHome from '../Usuarios/Residente/Home/ResidenteHome';
import ResidenteEncomiendas from '../Usuarios/Residente/Encomiendas/ResidenteEncomiendas';
import AgregarEncomienda from '../Usuarios/Residente/Encomiendas/AgregarEncomienda'
import RegistroEncomienda from '../Usuarios/Residente/Encomiendas/RegistroEncomienda'
import ResidenteAnuncios from '../Usuarios/Residente/Anuncios/ResidenteAnuncios';
import ResidenteAcceso from '../Usuarios/Residente/Acceso/ResidenteAcceso';
import ResidentePagos from '../Usuarios/Residente/Pagos/ResidentePagos';
import ResidenteReservas from '../Usuarios/Residente/Reservas/ResidenteReservas';

const AppRutas = () => {
    return(
        <Routes>
            <Route path="/residente/*" element={<ResidenteLayout />}>
                <Route path="home" element={<ResidenteHome />} />
                <Route path="encomiendas" element={<ResidenteEncomiendas />} />
                <Route path="encomiendas/agregar_encomiendas" element={<AgregarEncomienda />} />
                <Route path="encomiendas/registro_encomiendas" element={<RegistroEncomienda />} />
                <Route path="anuncios" element={<ResidenteAnuncios />} />
                <Route path="acceso" element={<ResidenteAcceso />} />
                <Route path="pagos" element={<ResidentePagos />} />
                <Route path="reservas" element={<ResidenteReservas />} />
            </Route>
        </Routes>
    );
};
export default AppRutas;
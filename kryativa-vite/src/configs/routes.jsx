import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Soon from '../pages/soon.jsx';
import Triotec from '../pages/triotec.jsx';



export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Soon />} />
            <Route path="/clientes/triotec" element={<Triotec />} />
            <Route path="*" element={<h1>Não encontrado</h1>} />


        </Routes>
    );

}
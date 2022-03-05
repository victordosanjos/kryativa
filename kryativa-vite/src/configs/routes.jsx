import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Triotec from '../pages/clients/triotec.jsx';
import Pagamentos from '../pages/pagamentos.jsx';
import Soon from '../pages/soon.jsx';
import PaginadeTeste from '../payment/dominio.jsx';
export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Soon />} />
            <Route path="/clientes/triotec" element={<Triotec />} />
            <Route path="Pagamento" element={<Pagamentos />}>
                <Route path="dominio" element={<PaginadeTeste />} />
            </Route>
            <Route path="*" element={<h1>Não encontrado</h1>} />


        </Routes>
    );

}
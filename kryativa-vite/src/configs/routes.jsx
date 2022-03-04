import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultDomain from '../components/dominio.jsx';
import Pagamentos from '../pages/pagamentos.jsx';
import Soon from '../pages/soon.jsx';
import Triotec from '../pages/clients/triotec.jsx';


export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Soon />} />
            <Route path="/clientes/triotec" element={<Triotec />} />
            <Route path="Pagamento" element={<Pagamentos />}>
                <Route path="dominio" element={<DefaultDomain />} />
            </Route>
            <Route path="*" element={<h1>Não encontrado</h1>} />


        </Routes>
    );

}
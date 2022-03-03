import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Soon from '../pages/soon.jsx';
import Triotec from '../pages/triotec.jsx';
import Pagamentos from '../pages/pagamento.jsx';



export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Soon />} />
            <Route path="/clientes/triotec" element={<Triotec />} />
            <Route path="teste" element={<Pagamentos />}>
                <Route path="pag" element={<h1>Sei lá</h1>} />
            </Route>
            <Route path="*" element={<h1>Não encontrado</h1>} />


        </Routes>
    );

}
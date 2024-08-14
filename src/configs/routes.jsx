import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DrResende from '../pages/clients/drresende.jsx';
import MatchedBefore from '../pages/leagueoflegends.jsx';
import NotFound from '../pages/notFound.jsx';
import Soon from '../pages/soon.jsx';




export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Soon />} />
            <Route path="/leagueoflegends" element={<MatchedBefore />} />
            <Route path="/clientes/drresende" element={<DrResende />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );

}
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./configs/routes";

function App() {

    return (
        <>
            <Router>
                <Routes />
            </Router>
        </>
    );
}

export default App;
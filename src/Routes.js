import React from 'react';
import { Routes} from "react-router-dom"
import {Route} from "react-router";
import HomePage from "./pages/HomePage";
import StatisticsPage from "./pages/StatisticsPage";
import CostumersPage from "./pages/CostumersPage";
import DiagramsPage from "./pages/DiagramsPage";
const Routers = () => {
    return (
        <Routes>
<Route path={"/"} element={<HomePage/>}/>
            <Route path={"/statistics"} element={<StatisticsPage/>}/>
            <Route path={"/costumers"} element={<CostumersPage/>}/>
            <Route path={"/diagrams"} element={<DiagramsPage/>}/>
        </Routes>
    );
};

export default Routers;
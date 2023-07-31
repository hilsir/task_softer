import React from 'react';
import {Route, Routes} from 'react-router-dom'
import {publicRoutes} from "../routes";
import {v4 as uuidv4} from 'uuid';

const AppRouter = () => {
    return (
        //вместо switch!
        <Routes>
            {
                publicRoutes.map(({path, Component}) =>
                    <Route path={path} Component={Component} key={uuidv4()}/>
                )
            }
        </Routes>
    );
};

export default AppRouter;
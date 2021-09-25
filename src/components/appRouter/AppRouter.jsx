import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {routes} from "../../routes/routes";
import {WEATHER_LIST} from "../../utils/constants";

const AppRouter = () => {
    return (<Switch>
            {routes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact={true}/>
            )}
            <Redirect to={WEATHER_LIST}/>
        </Switch>
    );
};

export default AppRouter;
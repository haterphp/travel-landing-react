import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";

interface RouteInterface {
    path: string;
    component: React.ComponentType<any> | undefined,
}

const routes: Array<RouteInterface> = [
    {
        path: '/',
        component: require('../pages/index/index.page').default
    }
]

function Router(){
    return (
        <BrowserRouter>
            <Switch>
                { routes.map((props: RouteInterface, key: number) => <Route key={key} {...props} exact={true}/>) }
            </Switch>
        </BrowserRouter>
    )
}

export default Router;

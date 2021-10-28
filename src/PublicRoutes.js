import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoutes = ({component: Component, isAuth, ...rest}) => {
    return (    
   
        <Route {...rest} render={props => (
            isAuth  ?
                <Redirect to="/home" />
            : <Component {...props} />
        )} />      
    )
}

export default PublicRoutes;
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoutes = ({component: Component, setIsAuth, isAuth, ...rest}) => {
    return (    
   
        <Route {...rest} render={props => (
            isAuth  ?
                <Redirect to="/home" />
            : <Component setIsAuth={setIsAuth} {...props} />
        )} />      
    )
}

export default PublicRoutes;
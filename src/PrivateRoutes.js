import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoutes = ({component: Component, setIsAuth, isAuth, ...rest}) => {

    return (
        <Route {...rest}  render={props => (
            isAuth ?
                <Component setIsAuth={setIsAuth} {...props} />
            : <Redirect to="/" />
        )} />       
    )
}

export default PrivateRoutes;
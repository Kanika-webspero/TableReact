import React from "react";
import { Route } from "react-router-dom";
import { privateRoutes } from "./data/routes";

const PrivateRoutes = () => {

    return (

         <div >
                {privateRoutes.map((val) => (
                    <Route path={val.to} component={val.component} />
                ))}
            </div>
               
    )
}

export default PrivateRoutes;
import React from "react";
import { Route } from "react-router-dom";
import { publicRoutes } from "./data/routes";

const PublicRoutes = () => {

   

    return (      
            <div>
                {publicRoutes.map((val, index) => (
                    <Route key={index}  path={val.to} component={val.component} />
                ))}
            </div>        
    )
}

export default PublicRoutes;
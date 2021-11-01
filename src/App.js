import './App.css';
import {
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import { useState } from 'react';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import { privateRoutes, publicRoutes } from './data/routes';
import { getAuth } from './services';


function App() {

  const [isAuth , setIsAuth] = useState(getAuth())

  return (
    <Router>
      <Switch>

        {publicRoutes.map((element, index) => (
          <PublicRoutes key={index} isAuth={isAuth} setIsAuth={setIsAuth} component={element.component} path={element.to} exact />
        ))}
        {privateRoutes.map((element, index) => (
          <PrivateRoutes key={index} isAuth={isAuth} setIsAuth={setIsAuth} component={element.component} path={element.to} exact />
        ))}
      </Switch>
    </Router>
  );
}

export default App;

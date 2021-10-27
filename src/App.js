// import logo from './logo.svg';
import './App.css';
// import DataTable from './pages/DataTable'
// import Home from './pages/Home';
// import About from './pages/About';
// import Other from './pages/Other'
// import MainContainer from ''
import { 
  Route, 
  Redirect,
  Switch, 
  BrowserRouter as Router
 } from 'react-router-dom';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import { useState } from 'react';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

function App({ component: Component, ...rest }) {

  const [isAuth, setIsAuth] = useState(false)
  return (
    <Router>   
    <Switch>    
   
     { isAuth
          ? <PrivateRoutes {...rest}/>
          : <PublicRoutes {...rest}/>
 }
    </Switch>
    </Router>
  );
}

export default App;

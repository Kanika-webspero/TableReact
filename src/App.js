// import logo from './logo.svg';
import './App.css';
import DataTable from './Pages/DataTable'
import Home from './Pages/Home';
import About from './Pages/About';
// import MainContainer from ''
import { 
  Route, 
  Switch, 
  BrowserRouter as Router
 } from 'react-router-dom';
import MainHeader from './Components/MainHeader';

function App() {
  return (
    <Router>
    <div style={{backgroundColor: 'lightgray', height: '80px',position:'fixed', top: '0px', width: '100%'}}>
        <MainHeader />
        </div>
    <Switch>
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/about">
    <About />
    </Route>
    <Route path="/dataTable">
    <DataTable />
    </Route>
    </Switch>
    </Router>
   
  );
}

export default App;

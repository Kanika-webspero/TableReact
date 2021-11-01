// import logo from './logo.svg';
import './App.css';
import DataTable from './pages/DataTable'
import Home from './pages/Home';
import About from './pages/About';
import Other from './pages/Other'
// import MainContainer from ''
import { 
  Route, 
  Switch, 
  BrowserRouter as Router
 } from 'react-router-dom';
import MainHeader from './components/MainHeader';

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
    <Route path="/other">
    <Other />
    </Route>
    </Switch>
    </Router>
   
  );
}

export default App;

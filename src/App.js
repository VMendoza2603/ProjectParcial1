import logo from './logo.svg';
import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './componentes/autentificacion/Login';
import Proyectos from './componentes/proyectos/Proyectos';
import Cuenta from './componentes/autentificacion/Cuenta';

function App() {
  return (
   <Router>
     <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/cuenta" component={Cuenta}/>
        <Route exact path="/proyectos" component={Proyectos}/>
     </Switch>
   </Router>
  );
}

export default App;
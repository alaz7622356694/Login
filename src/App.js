
import './App.css';
import LoginForm from './Form/LoginForm';
import RegistrationForm from './Form/RegistrationForm';
import MainPage from './MainPage/MainPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
       <Router>
    <Switch>
      
      <Route path="/" exact>
        <MainPage/>
      </Route>

      <Route path="/RegistrationForm" exact>
        <RegistrationForm />
      </Route>

      <Route path="/LoginForm" exact>
        <LoginForm />
      </Route>

    </Switch>
  </Router>
  
  </div>
   
  );
}

export default App;

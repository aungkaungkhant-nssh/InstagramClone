
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import ProtectedRoute from './ProtectedRoute';

import Instagram from './components/Instagram'
function App() {
  return (
      <Router>
          <div className="App">
            <Switch>
                  <ProtectedRoute exact path="/" component={Instagram} />
                  <ProtectedRoute  path="/profile" component={Profile}  />
                  <Route path="/login" component={Login} ></Route>
                  <Route path="/register" component={Register}></Route>
            </Switch>
        </div>
    </Router>
   
   
   
  );
}

export default App;

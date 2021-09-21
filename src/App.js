
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import ProtectedRoute from './ProtectedRoute';
import { AuthPorvider } from './components/Auth';
import Instagram from './components/Instagram'
function App() {
  return (
    <AuthPorvider>
      <Router>
          <div className="App">
            <Switch>
                  <ProtectedRoute exact path="/" component={Instagram} />
                  <Route exact path="/login" component={Login}></Route>
                  <Route exact path="/register" component={Register}></Route>
            </Switch>
        </div>
    </Router>
    </AuthPorvider>
   
   
  );
}

export default App;

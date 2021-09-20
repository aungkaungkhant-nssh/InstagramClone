
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            
              <Route path="/login" component={Login} exact></Route>
              <Route path="/" component={Home}></Route>
              <Route path="/register" component={Register}></Route>
        </Switch>
     </div>
    </Router>
   
  );
}

export default App;

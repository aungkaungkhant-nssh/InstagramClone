
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import ProtectedRoute from './ProtectedRoute';
import Instagram from './components/Instagram'
import CreatePost from './components/CreatePost'
function App() {
  return (
      <Router>
          <div className="App">
            <Switch>
                  <ProtectedRoute exact path="/" component={Instagram} />
                  <ProtectedRoute  path="/profile" component={Profile}  />
                  <ProtectedRoute path="/createPost" component={CreatePost} />
                  <Route path="/login" component={Login} ></Route>
                  <Route path="/register" component={Register}></Route>
            </Switch>
        </div>
    </Router>
   
   
   
  );
}

export default App;

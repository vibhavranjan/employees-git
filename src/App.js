import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import './assets/sass/style.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      
        <Router>
          <Route exact path="/" component={Home} />
          <Route  path="/Contact" component={Contact} />
          <Route  path="/About" component={About} />
        </Router>
    </div>
  );
}

export default App;

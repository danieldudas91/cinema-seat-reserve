import './App.css';
import Reservation from './components/Reservation';
import Seats from './components/Seats';
import { BrowserRouter as Router, Routes as Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" element={<Seats/>} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/buy/:id" element={<Reservation/>} />
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          {/* <Redirect to="/" /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

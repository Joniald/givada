import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./Navbar" 
import CardTitle from "./cardTitle"
import Team from "./Team"
import Services from "./Services"
import Contact from "./Contact"
import Work from "./Work"
import Footer from "./Footer"


  function App() {
  return (
    <Router>
    <div className="App">
     
  

        <Navbar />
        
  

        <CardTitle />
        <Services />
        <Work />
        <Team />
        <Contact />
        <Footer />

        

        <Switch>
          <Route path="/">
           
           

           
           
          </Route>
        </Switch>
        </div>
      
    
    </Router>
  );
}

export default App;

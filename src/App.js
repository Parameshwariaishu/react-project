// import logo from './logo.svg';
import './App.css';
import About from './About';
import Nav from './Nav';
import Service from './Service';
import Home from './Home'
import Contact from './contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Service />
      <Contact />
    </div>
  );
}

export default App;

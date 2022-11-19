import React from "react"
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import './styles/App.css';
import Image from "./images/image 12.png"

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Card 
      img={Image}
        rate="5.0"
        score={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}  
      />
    </div>
  );
}

export default App;

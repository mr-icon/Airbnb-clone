import React from "react"
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import './styles/App.css';
{/*  */}

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Card 
        rate="5.0"
        score="(6) ."
        country="USA"
        name="Life lessons with Katie Zaferes"
        price="From $136/person"  
      />
    </div>
  );
}

export default App;

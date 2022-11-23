import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./components/Data";
import "./styles/App.css";

function App() {
  const cards = Data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div className="App">
      <Nav />
      <Hero />
      <section className="card-list">{cards}</section>
    </div>
  );
}

export default App;

import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <div className="App__header">
        <NavBar />
      </div>
      <div className="App__main">
        <Main />
      </div>
    </div>
  );
}

export default App;

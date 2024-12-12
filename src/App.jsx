import { useState } from 'react'

import './App.css'


function App() {
  const [bgColor, setBgColor] = useState("white");

  // Function to change background color
  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: "100vh",
        width:"100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "background-color 0.5s ease", // Smooth transition
      }}
    >
      <h1 style={{ color: "#333" }}>Click a Button to Change Background Color</h1>
      <div>
        <button
          onClick={() => changeColor("red")}
          style={{ backgroundColor: "red", color: "white", margin: "5px" }}
        >
          Red
        </button>
        <button
          onClick={() => changeColor("blue")}
          style={{ backgroundColor: "blue", color: "white", margin: "5px" }}
        >
          Blue
        </button>
        <button
          onClick={() => changeColor("green")}
          style={{ backgroundColor: "green", color: "white", margin: "5px" }}
        >
          Green
        </button>
        <button
          onClick={() => changeColor("yellow")}
          style={{ backgroundColor: "yellow", color: "black", margin: "5px" }}
        >
          Yellow
        </button>
        <button
          onClick={() => changeColor("white")}
          style={{ backgroundColor: "white", color: "black", margin: "5px" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;




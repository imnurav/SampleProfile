import React from "react";
import "./index.css";
import Header from "./Header";
import Container from "./Container";
const App = () => {
  return (
    <>
      <div className="bodystyle">
        <Header />
        <hr />
        <Container />
        <hr style={{ border: "none", backgroundColor: "rgb(221, 217, 217)" }} />
      </div>
    </>
  );
};
export default App;

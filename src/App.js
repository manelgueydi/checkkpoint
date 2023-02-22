import React from "react";
import "./App.css";
import ProfilPhoto from "./components/Profil/ProfilPhoto";
import FullName from "./components/profile/FullName";
import Address from "./components/profile/Address";

function App() {
  return (
    <div className="App">
      <ProfilPhoto />
      <FullName />
      <Address />
      <br />
    </div>
  );
}

export default App;

import React from "react";
import NavBar from "./components/NavBar";
import GameScreen from "./components/GameScreen";
import Options from "./components/Options";

const App = () => {
  return (
    <div className="bg-[#AF0922] h-screen">
      <NavBar />
      <GameScreen />
      <Options />
    </div>
  );
};

export default App;

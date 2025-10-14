import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Profile from "./pages/Profile";
import Explore from "./pages/explore-page/Explore";

function App() {
  // Show Explore only if URL is /search
  const showExplore = window.location.pathname === "/search";

  return (
    <div className="App">
      <NavBar />
              {showExplore ? <Explore /> : <Profile />}
    </div>
  );
}

export default App;

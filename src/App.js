import React, { useState } from "react";
import "./App.css";
import Albums from "./components/Albums";
import AdminPanel from "./components/AdminPanel";

const views = {
  ALBUMS: "ALBUMS",
  ADMIN: "ADMIN",
};


function App() {
  const [view, setView] = useState(views.ALBUMS);

  function setAndChange(v)
  {
    setView(v);
    if (views.ALBUMS === v)
    {
      document.getElementById("albumButton").classList.add("selected-button");
      document.getElementById("adminButton").classList.remove("selected-button");
    }
    else if (views.ADMIN === v)
    {
      document.getElementById("adminButton").classList.add("selected-button");
      document.getElementById("albumButton").classList.remove("selected-button");
    }
  }
  
  return (
    <div>
      <header>
        <nav>
          <button id="albumButton" className="nav-button" onClick={() => setAndChange(views.ALBUMS)}>
            Albums 
          </button>
          <button id="adminButton" className="nav-button" onClick={() => setAndChange(views.ADMIN)}>
            Admin
          </button>
        </nav>
      </header>
      <main>
        {view === views.ALBUMS && <Albums />}
        {view === views.ADMIN && <AdminPanel />}
      </main>
    </div>
  );
}

export default App;

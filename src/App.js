import React from "react";
import ScrollNav from "./ScrollNav";
import { HashRouter } from 'react-router-dom';
import './styles.css'

function App() {
  return (
    <div id="app">
      <HashRouter>
        <ScrollNav/>
      </HashRouter>
    </div>
  );
}

export default App;

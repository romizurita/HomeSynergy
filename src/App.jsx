import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRutas from "./Rutas/AppRutas";

function App() {
  return (
    <div className="App">
        <Router>
          <AppRutas />
        </Router>
    </div>
  );
}
export default App;

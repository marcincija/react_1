import "../styles/App.css";
import CurrencyList from "../components/Button/CurrencyList";

import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row mb-5">
            <div className="col-sm-6">Logo</div>
            <div className="col-sm-6  text-center border border-primary px-2 py-2">
              Przelicznik walut
            </div>
          </div>
          <CurrencyList />
        </div>
      </header>
    </div>
  );
}

export default App;

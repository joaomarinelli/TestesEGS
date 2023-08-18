import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import TabelaDados from "./components/TabelaDados";
import { FormDataProvider } from "./components/FormDataContext";

import "./App.css";

function App() {
  return (
    <Router>
      <FormDataProvider>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/tabela-dados" element={<TabelaDados />} />
        </Routes>
      </FormDataProvider>
    </Router>
  );
}

export default App;

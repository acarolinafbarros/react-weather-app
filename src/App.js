import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./pages/Home/Home";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

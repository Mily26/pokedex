import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import Login from "./pages/Login";
import Unauthorized from "./pages/Unauthorized";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/pokedex">
          <Pokedex />
        </Route>
        <Route path="/unauthorized">
          <Unauthorized />
        </Route>
        <Route path="/pokemon">
          <Pokemon />
        </Route>
        <Route path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

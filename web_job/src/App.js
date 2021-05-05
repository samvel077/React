import React from "react";
import { Header } from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import "../src/App.css";
import { Login } from "./components/Login";
import { Registor } from "./components/Registor";
import { BrowseBootcamp } from "./components/BrowseBootcamp";
import { ResetPassword } from "./components/ResetPassword";
import { UpdatePassword } from "./components/UpdatePassword";

function App() {
  return (
    <BrowserRouter>
      <Header success={localStorage.getItem("success")} />

      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/login" component={Login} />
        <Route path="/registor" component={Registor} />
        <Route path="/bootcamps" component={BrowseBootcamp} />
        <Route path="/reset_password" component={ResetPassword} />
        <Route path="/update_password" component={UpdatePassword} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

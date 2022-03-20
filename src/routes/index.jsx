import { Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Register from "../pages/Register";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default Routes;

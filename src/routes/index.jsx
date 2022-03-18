import { Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Client from "../pages/DashboardClient";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Register from "../pages/Register";
import DashboardSuplier from "../pages/DashboardSuplier";

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
      <Route path="/client">
        <Client />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/suplier">
        <DashboardSuplier />
      </Route>
    </Switch>
  );
};

export default Routes;

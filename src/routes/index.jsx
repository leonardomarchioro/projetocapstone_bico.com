import { Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Client from "../pages/DashboardClient";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Register from "../pages/Register";
import DashboardSuplier from "../pages/DashboardSuplier";
import { AnimatePresence } from "framer-motion";

const Routes = () => {
  return (
    <AnimatePresence exitBeforeEnter>
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
    </AnimatePresence>
  );
};

export default Routes;

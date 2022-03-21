import { Switch } from "react-router-dom";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Register from "../pages/Register";
import { AnimatePresence } from "framer-motion";
import { Route } from "react-router-dom";

const Routes = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route isPrivate path="/dashboard" component={Dashboard} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;

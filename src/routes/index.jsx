import { Switch } from "react-router-dom";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Route from "./route";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route isPrivate path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Routes;

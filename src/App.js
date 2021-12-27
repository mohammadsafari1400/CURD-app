import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CreateLog from "./components/logs/CreateLog";
import Home from "./components/pages/Home";
import CreateTechs from "./components/techs/CreateTechs";
import Techs from "./components/techs/Techs";
import Header from "./components/UI/Header";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/create-log" exact>
            <CreateLog />
          </Route>
          <Route path="/edit-log/:id" exact>
            <CreateLog isEdit />
          </Route>
          <Route path="/techs" exact>
            <Techs />
          </Route>
          <Route path="/create-techs" exact>
            <CreateTechs />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;

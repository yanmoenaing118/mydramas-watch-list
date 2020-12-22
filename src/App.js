import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import DramasPage from "./pages/dramas";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/dramas/kdramas"
          render={(props) => <DramasPage title="korean" />}
        />
        <Route
          path="/dramas/cdramas"
          render={(props) => <DramasPage title="chinese" />}
        />
        <Route
          path="/dramas/tdramas"
          render={(props) => <DramasPage title="thailand" />}
        />
      </Switch>
    </Router>
  );
}

export default App;

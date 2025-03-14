import { Route, Switch } from "wouter";
import { Header } from "./components/header/Header";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/" component={Home} />
        <Route>404: No such page!</Route>
      </Switch>
    </>
  );
}

export default App;

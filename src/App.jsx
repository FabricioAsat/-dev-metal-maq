import { Route, Switch } from "wouter";
import { Header } from "./components/header/Header";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Services } from "./pages/Services";
import { Support } from "./pages/Support";
import { Footer } from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/services" component={Services} />
        <Route path="/support" component={Support} />
        <Route>404: No such page!</Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;

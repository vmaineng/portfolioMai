import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Banner />

        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;

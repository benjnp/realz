import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies"
import Residences from "./components/Residences/Residences";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact"
import GetStarted from "./components/GetStarted/GetStarted"

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residences />
      <Value />
      <Contact />
      <GetStarted />
    </div>
  );
}

export default App;

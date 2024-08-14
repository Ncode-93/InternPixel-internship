import './App.css';
import Home from "./Components/Home"
import Card from "./Components/Card"
import Features from "./Components/Features"
import Decentralized from "./Components/Decentralized"
import SimpleFairpricing from "./Components/SimpleFairpricing"
import Howitworks from "./Components/Howitworks"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App">
      <Home />
      <Card />
      <Features />
      <Decentralized />
      <SimpleFairpricing />
      <Howitworks />
      <Footer />
    </div>
  );
}

export default App;

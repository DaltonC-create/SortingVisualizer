import logo from "./logo.svg";
import "./App.css";
import SortingVisualizer from "./SortingVisualizer/SortingVisualizer";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <SortingVisualizer />
      <Footer />
    </div>
  );
}

export default App;

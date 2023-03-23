import logo from './logo.svg';
import './App.css';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";

function App() {
  return (
    <div className="App">
      <Header />
      <SortingVisualizer></SortingVisualizer>
      <Body />
      <Footer />
    </div>
  );
}

export default App;

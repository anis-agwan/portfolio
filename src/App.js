import './App.css';
import NavBar from './components/NavBar/NavBar.component';
import CarouselSection from "./components/CarouselSection/Carousel.component";
import TitleHeader from "./components/TitleHeader/TitleHeader.component";

function App() {
  return (
    <div className="App">
        <NavBar />
        <CarouselSection />
        <TitleHeader />
    </div>
  );
}

export default App;

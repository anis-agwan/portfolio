import './App.css';

import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container';

import NavBar from './components/NavBar/NavBar.component';
import CarouselSection from './components/CarouselSection/Carousel.component';
import TitleHeader from './components/TitleHeader/TitleHeader.component';
import AboutSection from './pages/about/about.component';

function App() {
  return (
    <div className='App' style={{ position: 'relative' }}>
      <NavBar />
      <CarouselSection />
      <TitleHeader />
      {/* About me section */}
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require('./assets/img/parallax/background.webp')}
          bgImageAlt=''
          strength={-200}
        >
          <div>
            <Fade left duration={800}>
              <Container className='container-box rounded'>
                <AboutSection />
              </Container>
            </Fade>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default App;

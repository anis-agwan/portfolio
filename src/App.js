import './App.css';
import React, { useEffect } from 'react';

import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container';
import Slide from 'react-reveal/Slide';
import Experience from './pages/experience/experience.component';
import NavBar from './components/NavBar/NavBar.component';
import CarouselSection from './components/CarouselSection/Carousel.component';
import TitleHeader from './components/TitleHeader/TitleHeader.component';
import AboutSection from './pages/about/about.component';
import Skills from './pages/skills/skills.component';
import ProjectTimeline from './components/ProjectTimeline/ProjectTimeline.component';
import ContactPage from './pages/contact/contact.component';
import Footer from './components/Footer/Footer.component';
import Particles from 'react-particles-js';
import { particlesOptions } from './particleOptions';

const App = () => {
  return (
    <div className='App' style={{ position: 'relative' }}>
      <NavBar />
      <CarouselSection />
      <TitleHeader />
      <Particles
        className='particles particles-box'
        params={particlesOptions}
        width="100vw"
        height="100vw"
      />

      {/* About me section */}
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require('./assets/img/parallax/background.webp')}
          bgImageAlt='Parallax'
          strength={-200}
        >
          <div>
            <Fade left duration={800}>
              <Container className='container-box rounded abo'>
                <AboutSection />
              </Container>
            </Fade>
          </div>
        </Parallax>
      </div>
      {/* skills section */}
      <Container className='container-box rounded skills-box'>
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>

      {/* Experience */}
      <div>
        <Fade left duration={800}>
          <Container className='container-box rounded exp-section'>
            <hr />
            <Experience />
          </Container>
        </Fade>
      </div>

      {/* Projects */}
      <div>
        <Fade left duration={800}>
          <Container className='container-box rounded exp-section'>
            <hr />
            <ProjectTimeline />
          </Container>
        </Fade>
      </div>
      {/* Contact */}
      <div>
        <Fade left duration={800}>
          <Container className='container-box rounded exp-section'>
            <hr />
            <ContactPage />
          </Container>
        </Fade>
      </div>

      <hr />
      <Footer />
    </div>
  );
};

export default App;

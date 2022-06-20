import './App.scss';
import { useContext, useEffect } from 'react';
import { ThemeContext } from './contexts/Theme';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Experience from './components/Experience';
import { ExperienceInput } from './components/Experience/ExperienceCard';
import Projects from './components/Projects';
import { setNavLinkColors } from './utils/set-nav-link-colors.util';
const experiencesData = require('./assets/data/experience-data.json');

const experiences = experiencesData.map((experience: ExperienceInput) => ({
  ...experience,
  logoSrc: require(`./assets/images/experience/${experience.logoSrc}`),
}));

const App = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.title = 'Muhammad Sohail';
  }, []);

  window.onscroll = () => {
    const header = document.getElementsByTagName('header')[0];

    if (window.scrollY >= header.offsetHeight / 2) header.classList.add('active');
    else header.classList.remove('active');

    setNavLinkColors();
  };

  return (
    <div className={`page ${theme} center`}>
      <Header showMain={true} />

      <main className='content center'>
        <About />
        <Experience experiences={experiences} />
        <Projects />
      </main>

      <Footer />
    </div>
  );
};

export default App;

import LayeredBackground from './components/LayeredBackground';
import Projects from './components/Projects';
import Skills from './components/Skills';
import FrontEnd from './components/FrontEnd';
import Mobile from './components/Mobile';

const App = () => {
  return (
    <div className="text-white">
      <LayeredBackground />
      <FrontEnd />
      <Mobile />
      <Projects />
      <Skills />
    </div>
  );
};

export default App;

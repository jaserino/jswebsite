import LayeredBackground from './components/LayeredBackground';
import About from './components/About';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="text-white">
      <LayeredBackground />
      <About />
      <Projects />
    </div>
  );
};

export default App;

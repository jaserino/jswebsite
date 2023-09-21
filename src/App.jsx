import LayeredBackground from './components/LayeredBackground';
import About from './components/About';

const App = () => {
  return (
    <div className="text-white">
      <LayeredBackground />
      <div
        className="w-full py-40 "
        style={{
          backgroundImage: `url(space.jpg)`,
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
        }}
      >
        <About />
        <div className="max-w-lg space-y-6 mx-auto py-24 font-zeb">
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            ab, consequuntur itaque, reprehenderit asperiores tenetur voluptate
            soluta laudantium nam voluptas magni in ipsam doloremque possimus.
            Expedita iusto molestias eum voluptas?
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            ab, consequuntur itaque, reprehenderit asperiores tenetur voluptate
            soluta laudantium nam voluptas magni in ipsam doloremque possimus.
            Expedita iusto molestias eum voluptas?
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            ab, consequuntur itaque, reprehenderit asperiores tenetur voluptate
            soluta laudantium nam voluptas magni in ipsam doloremque possimus.
            Expedita iusto molestias eum voluptas?
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            ab, consequuntur itaque, reprehenderit asperiores tenetur voluptate
            soluta laudantium nam voluptas magni in ipsam doloremque possimus.
            Expedita iusto molestias eum voluptas?
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            ab, consequuntur itaque, reprehenderit asperiores tenetur voluptate
            soluta laudantium nam voluptas magni in ipsam doloremque possimus.
            Expedita iusto molestias eum voluptas?
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            ab, consequuntur itaque, reprehenderit asperiores tenetur voluptate
            soluta laudantium nam voluptas magni in ipsam doloremque possimus.
            Expedita iusto molestias eum voluptas?
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            ab, consequuntur itaque, reprehenderit asperiores tenetur voluptate
            soluta laudantium nam voluptas magni in ipsam doloremque possimus.
            Expedita iusto molestias eum voluptas?
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

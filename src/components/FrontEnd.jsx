import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Laptop from '../features/components/Laptop';

const FrontEnd = () => {
  return (
    <div
      style={{
        backgroundImage: `url(top.png)`,
        backgroundSize: 'cover',
      }}
      className=""
    >
      <div className="h-[200vh] ">
        <div className="sticky top-0 max-w-screen-md p-20">
          <h1 className="text-7xl p-6 drop-shadow-textneon  ">FRONT END</h1>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            esse dolore consequatur est in minus error nisi, dolorum sunt
            similique, cupiditate nulla dicta. Eaque rem nobis maxime corporis
            sunt distinctio?
          </p>
        </div>
        <Canvas
          camera={{
            fov: 70,
            near: 0.1,
            far: 2000,
            position: [2, 1.5, 3.5],
          }}
        >
          <Suspense>
            <Laptop />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default FrontEnd;

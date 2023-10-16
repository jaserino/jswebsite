import Laptop from './Laptop';
import Iphone from './Iphone';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

const AboutOverlay = () => {
  return (
    <div className="h-full font-orbitron top-0 right-0">
      <div className="h-[150vh]">
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

      <div className="h-[200vh]">
        <div className="sticky top-0 inline-block max-w-screen-lg p-20 text-lg">
          <h1 className="text-7xl p-6 drop-shadow-textneon ">
            MOBILE DEVELOPMENT
          </h1>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            deserunt quis molestiae labore enim, vitae itaque nobis libero,
            accusamus adipisci atque corporis ea animi fugit nostrum distinctio
            laboriosam ipsam quos!
          </p>
        </div>
        <Canvas
          camera={{
            fov: 90,
            near: 0.1,
            far: 2000,
            position: [0, 0, 5],
          }}
        >
          <Suspense>
            <Iphone />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default AboutOverlay;

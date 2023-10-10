import Laptop from './Laptop';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

const AboutOverlay = () => {
  return (
    <div className="h-full font-zeb top-0 right-0">
      <div className="h-[150vh]">
        <div className="sticky top-0 max-w-screen-lg p-20 text-lg">
          <h1 className="text-7xl p-6">Front End</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa deserunt
          quis molestiae labore enim, vitae itaque nobis libero, accusamus
          adipisci atque corporis ea animi fugit nostrum distinctio laboriosam
          ipsam quos!
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
          <h1 className="text-7xl p-6">Mobile Development</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa deserunt
          quis molestiae labore enim, vitae itaque nobis libero, accusamus
          adipisci atque corporis ea animi fugit nostrum distinctio laboriosam
          ipsam quos!
        </div>
      </div>
      <div className="h-[200vh]">
        <div className="sticky top-0 inline-block max-w-screen-lg p-20 text-lg">
          <h1 className="text-7xl p-6">Fitness</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa deserunt
          quis molestiae labore enim, vitae itaque nobis libero, accusamus
          adipisci atque corporis ea animi fugit nostrum distinctio laboriosam
          ipsam quos!
        </div>
      </div>
      <div className="h-[200vh]">
        <div className="sticky top-0 inline-block max-w-screen-lg p-20 text-lg">
          <h1 className="text-7xl p-6">Coffee</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa deserunt
          quis molestiae labore enim, vitae itaque nobis libero, accusamus
          adipisci atque corporis ea animi fugit nostrum distinctio laboriosam
          ipsam quos!
        </div>
      </div>
    </div>
  );
};

export default AboutOverlay;

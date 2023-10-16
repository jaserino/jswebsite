import Iphone from '../features/components/Iphone';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

const Mobile = () => {
  return (
    <div
      style={{
        backgroundImage: `url(image-full.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: '0% 100%',
      }}
    >
      <div className="h-[200vh]">
        <div className="sticky top-0 inline-block max-w-screen-lg p-20 text-lg min-[2500px]:top-60">
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

export default Mobile;

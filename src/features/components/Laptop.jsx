/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import * as THREE from 'three';
import {
  Html,
  useGLTF,
  Environment,
  Float,
  PresentationControls,
} from '@react-three/drei';

const Laptop = () => {
  const model = useGLTF('./model.gltf');

  // eslint-disable-next-line react/no-unknown-property
  return (
    <>
      <Environment preset="city" />
      {/* <OrbitControls makeDefault /> */}
      <PresentationControls
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        snap={{ mass: 2, tension: 200 }}
      >
        <Float rotationIntensity={0.4}>
          <primitive object={model.scene} position-y={-1.2} />
          <Html
            transform
            distanceFactor={1.17}
            position={[0, 0.33, -1.4]}
            rotation-x={-0.256}
          >
            <iframe
              src="https://drive.google.com/file/d/1HD21Z6RrBPn1IdNx4FZVz9hhDw9w9NN4/preview"
              width="1024"
              height="670"
              className=" rounded-3xl"
            ></iframe>
          </Html>
        </Float>
      </PresentationControls>
    </>
  );
};

export default Laptop;

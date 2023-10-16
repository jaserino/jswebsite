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

const Iphone = () => {
  const model = useGLTF('./iphone.gltf');

  // eslint-disable-next-line react/no-unknown-property
  return (
    <>
      <Environment preset="city" />
      {/* <OrbitControls makeDefault /> */}
      <PresentationControls
        rotation={[0.15, -0.4, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        snap={{ mass: 2, tension: 200 }}
      >
        <Float rotationIntensity={0}>
          <primitive object={model.scene} position={[1, -1.2, 0]} />
          <Html
            transform
            distanceFactor={1}
            position={[1.15, 0.6, 0.05]}
            className=""
          >
            <iframe
              src="https://wolfpacktravel.netlify.app/"
              width="580"
              height="1180"
              className="rounded-lg"
            ></iframe>
          </Html>
        </Float>
      </PresentationControls>
    </>
  );
};

export default Iphone;

import * as THREE from 'three';
import { useRef } from 'react';

const AboutModel = () => {
  const group = useRef();
  return (
    <group ref={group}>
      <group>
        <mesh name="laptop"></mesh>
        <mesh name="iphone"></mesh>
        <mesh name="fitness"></mesh>
        <mesh name="coffee"></mesh>
      </group>
    </group>
  );
};

export default AboutModel;

import React, { Suspense, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';
import neurotechpinkblue from '../../resources/logos/neurotechpinkblue.png';
import { Canvas, useLoader, useFrame } from 'react-three-fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import brain from '../../resources/3d/brain.glb'
import Controls from './Controls';
import Scene from './Scene';

function Loading() {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        opacity={0.6}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}

function Brain() {
  const group = useRef();
  const { nodes } = useLoader(GLTFLoader, "C:/Users/marko/Documents/NEUROTECH/BCI-NeuroTech-UI/resources/3d/brain.glb");
  // useFrame will run outside of react in animation frames to optimize updates.
  useFrame(() => {
    group.current.rotation.y += 0.004;
  });
  return (
    <group>
      <mesh visible geometry={nodes.Default.geometry}>
        <meshStandardMaterial
          attach="material"
          color="white"
          roughness={0.3}
          metalness={0.3}
        />
      </mesh>
    </group>
  );
}
export default function Home(): JSX.Element {
  const [clicked, set] = useState(false);

  return (
    <Canvas>
    <Scene />
    <Controls />
  </Canvas>
  );
}

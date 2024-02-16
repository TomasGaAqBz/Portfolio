import React from "react";

import boatScene from "../assets/3d/boat.glb";
import { useGLTF } from "@react-three/drei";

const Boat = ({ isRotating, boatScale, boatPosition, rotation, ...props }) => {
  const { scene, animations } = useGLTF(boatScene);
  return (
    <mesh
      scale={boatScale}
      position={boatPosition}
      rotation={rotation}
      {...props}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Boat;

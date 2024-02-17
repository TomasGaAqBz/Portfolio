import React, { useEffect, useRef } from "react";

import boatScene from "../assets/3d/boat.glb";
import { useAnimations, useGLTF } from "@react-three/drei";


const Boat = ({ isRotating, boatScale, boatPosition, rotation, ...props }) => {
    const ref = useRef()
  const { scene, animations } = useGLTF(boatScene);
  const {actions} =useAnimations(animations,ref)

  useEffect(()=>{
    if(isRotating){
        actions['Animation'].play()
    }else{
        actions['Animation'].stop()
    }
  },[actions, isRotating])
  return (
    <mesh
      scale={boatScale}
      position={boatPosition}
      rotation={rotation}
      {...props}
    >
      <primitive object={scene} ref={ref} />
    </mesh>
  );
};

export default Boat;

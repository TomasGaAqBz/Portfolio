import React, { useEffect, useRef } from "react";

import boatScene from "../assets/3d/boat.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";


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

  useFrame(({ clock, camera }) => {
    // Ajusta la amplitud y la velocidad para lograr un movimiento más dramático
    const amplitude = 0.1;
    const speed = 1.02;
  
    // Mueve la ballena hacia adelante y hacia arriba simulando salir del agua
    ref.current.position.x = Math.sin(clock.elapsedTime * speed) * amplitude + 2;
    ref.current.position.y = Math.cos(clock.elapsedTime * speed) * amplitude + 1;
  
    // Verifica si la ballena ha salido lo suficiente y cambia la dirección
    if (ref.current.position.x > camera.position.x + 10) {
      // Cambia la dirección a hacia atrás y rota la ballena 180 grados en el eje y
      ref.current.rotation.y = Math.PI;
    } else if (ref.current.position.x < camera.position.x - 10) {
      // Cambia la dirección a hacia adelante y restablece la rotación de la ballena
      ref.current.rotation.y = 0;
    }
  
    // // Actualiza las posiciones X, Y y Z según la dirección
    // if (ref.current.rotation.y === 0) {
    //   // Moviéndose hacia adelante
    //   ref.current.position.z -= 0.01;
    // } else {
    //   // Moviéndose hacia atrás
    //   ref.current.position.z += 0.01;
    // }
  });

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

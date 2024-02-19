import { useEffect, useRef } from "react";

import laboonScene from '../assets/3d/laboon.glb'
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'
import { Clock } from "three";


const Laboon = () => {
    const {scene, animations} = useGLTF(laboonScene)
    const laboonRef = useRef()

    useFrame(({ clock, camera }) => {
      // Ajusta la amplitud y la velocidad para lograr un movimiento más dramático
      const amplitude = 0.9;
      const speed = 2.0;    
      // Mueve la ballena hacia adelante y hacia arriba simulando salir del agua
      laboonRef.current.position.x = Math.sin(clock.elapsedTime * speed) * amplitude + 2;
      laboonRef.current.position.y = Math.cos(clock.elapsedTime * speed) * amplitude + 1;
    
      // Verifica si la ballena ha salido lo suficiente y cambia la dirección
      if (laboonRef.current.position.x > camera.position.x + 10) {
        // Cambia la dirección a hacia atrás y rota la ballena 180 grados en el eje y
        laboonRef.current.rotation.y = Math.PI;
      } else if (laboonRef.current.position.x < camera.position.x - 10) {
        // Cambia la dirección a hacia adelante y restablece la rotación de la ballena
        laboonRef.current.rotation.y = 0;
      }
    console.log(laboonRef.position);
      // // Actualiza las posiciones X, Y y Z según la dirección
      // if (laboonRef.current.rotation.y === 0) {
      //   // Moviéndose hacia adelante
      //   laboonRef.current.position.z -= 0.01;
      // } else {
      //   // Moviéndose hacia atrás
      //   laboonRef.current.position.z += 0.01;
      // }
    });
    



  return (
    <mesh 
      position={[35, -13 ,-50]} 
      scale={[0.12, 0.12 ,0.12]} 
      rotation={[0, 1.6, 0 ]}
      ref={laboonRef}
    >
      <primitive object={scene}/>
    </mesh>
  )
}

export default Laboon

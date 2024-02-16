import React from 'react'

import laboonScene from '../assets/3d/laboon.glb'
import { useGLTF } from '@react-three/drei'
const Laboon = () => {
    const {scene, animations} = useGLTF(laboonScene)
  return (
    <mesh position={[25, -15 ,-50]} scale={[0.12, 0.12 ,0.12]} rotation={[0, 1, 0 ]}>
      <primitive object={scene}/>
    </mesh>
  )
}

export default Laboon

import React from 'react'

import boatScene from '../assets/3d/boat.glb'
import { useGLTF } from '@react-three/drei'

const Boat = () => {
    const {scene , animations } = useGLTF(boatScene)
  return (
    <mesh>
      <primitive object={scene}/>
    </mesh>
  )
}

export default Boat

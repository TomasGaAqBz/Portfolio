import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { Loader } from '../components'

import Island from '../models/Island'
import Sky from '../models/Sky';
import Laboon from '../models/Laboon';
import Boat from '../models/Boat';



const Home = () => {
  const 


  const adjustIslandForScreenSize = () =>{
    let screenScale = null;
    let screenPosition =[0, -6.5 , -170]
    let rotation = [4.8 , 0 , 1.4]

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9 , 0.9]

    } else{
      screenScale = [1.2, 1 , 1.2]

    }
    return [screenScale, screenPosition, rotation]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize()

  return (
    <section className='w-full h-screen relative'>
      <Canvas 
      className='w-full h-screen bg-transparent'
      camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={"loading"}>
        <directionalLight position={[4, -12, 1]} intensity={4} />
          <ambientLight intensity={0.6} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />
          <Laboon/>
          <Boat/>
          <Sky/>
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />

        </Suspense>

      </Canvas>
        
    </section>
  )
}

export default Home

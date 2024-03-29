/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Animateria (https://sketchfab.com/Animateria)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/volcano-island-lowpoly-4a6591dc9fee40d8bfda8350683af9af
Title: Volcano Island Lowpoly
*/

import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { events, useFrame, useThree } from "@react-three/fiber";

import islandScene from "../assets/3d/island.glb";

const Island = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  // Island Model : https://sketchfab.com/3d-models/volcano-island-lowpoly-4a6591dc9fee40d8bfda8350683af9af
  const islandRef = useRef();
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);

    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    lastX.current = clientX;
  };

  const handlePointerUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotating) {
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      islandRef.current.rotation.z += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);

      islandRef.current.rotation.z += 0.008 * Math.PI;
      rotationSpeed.current = 0.0125;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);

      islandRef.current.rotation.z -= 0.008 * Math.PI;
      rotationSpeed.current = -0.0125;
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      islandRef.current.rotation.z += rotationSpeed.current 
    }else {
        const rotation = islandRef.current.rotation.z;
        /**
         * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
         * The goal is to ensure that the rotation value remains within a specific range to
         * prevent potential issues with very large or negative rotation values.
         *  Here's a step-by-step explanation of what this code does:
         *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
         *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
         *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
         *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
         *     This is done to ensure that the value remains positive and within the range of
         *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
         *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
         *     modulo operation to the value obtained in step 2. This step guarantees that the value
         *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
         *     circle in radians.
         */
        const normalizedRotation =
          ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

        // Set the current stage based on the island's orientation
        switch (true) {
          case normalizedRotation >= 2.6 && normalizedRotation <= 2.8:
            setCurrentStage(4);
            break;
          case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
            setCurrentStage(3);
            break;
          case normalizedRotation >= 5.85 && normalizedRotation <= 6.45:
            setCurrentStage(2);
            break;
          case normalizedRotation >= 0.9 && normalizedRotation <= 1.5:
            setCurrentStage(1);
            break;
          default:
            setCurrentStage(null);
        }
      }
    }
  );

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Remove event listeners when component unmounts
    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  return (
    <a.group ref={islandRef} {...props}>
      <mesh
        geometry={nodes.Clouds_Clouds_0.geometry}
        material={materials.Clouds}
      />
      <mesh
        geometry={nodes.hammock_hammock_0.geometry}
        material={materials.hammock}
        position={[180.509, 1151.676, 5904.325]}
      />
      <mesh
        geometry={nodes.Tequila_Bottle_Tequila_Bottle_0.geometry}
        material={materials.Tequila_Bottle}
        position={[3492.547, 1112.371, 3620.925]}
      />
      <mesh
        geometry={nodes.skeleton_skeleton_0.geometry}
        material={materials.skeleton}
        position={[3541.67, 1110.094, 3568.021]}
      />
      <mesh
        geometry={nodes.Pyramid_Pyramid_0.geometry}
        material={materials.Pyramid}
      />
      <mesh
        geometry={nodes.Island_Grass_Island_Grass_0.geometry}
        material={materials.Island_Grass}
      />
      <mesh
        geometry={nodes.shrubbery_shrubbery_0.geometry}
        material={materials.shrubbery}
      />
      <mesh
        geometry={nodes.Lava_bubble_Lava_bubble_0.geometry}
        material={materials.Lava_bubble}
      />
      <mesh
        geometry={nodes.Volcanic_lava_Volcanic_lava_0.geometry}
        material={materials.Volcanic_lava}
      />
      <mesh
        geometry={nodes.Palm_tree_2_Palm_tree_2_0.geometry}
        material={materials.Palm_tree_2}
      />
      <mesh
        geometry={nodes.Palm_tree_1_Palm_tree_1_0.geometry}
        material={materials.Palm_tree_1}
      />
      <mesh
        geometry={nodes.Volacano_Sand_Volacano_Sand_0.geometry}
        material={materials.Volacano_Sand}
      />
      <mesh
        geometry={nodes.Ocean_Ocean_0.geometry}
        material={materials.Ocean}
      />
      <mesh
        geometry={nodes.Volcano_Grass_Volcano_Grass_0.geometry}
        material={materials.Volcano_Grass}
      />
      <mesh
        geometry={nodes.Volcano_Base_Volcano_Base_0.geometry}
        material={materials.Volcano_Base}
      />
    </a.group>
  );
};

export default Island;

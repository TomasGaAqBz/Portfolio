/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: SHEEP CODE (https://sketchfab.com/Sheep_Code)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/viking-d69782bead884a1aa54a41cf134b54d1
Title: Viking
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import scene from '../assets/3d/viking.glb'


//Model : https://sketchfab.com/3d-models/viking-d69782bead884a1aa54a41cf134b54d1#download
const Viking = ({currentAnimation, ...props}) => {

  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  useEffect( () => {
    Object.values(actions).forEach((action) => action.stop())
    if(actions[currentAnimation]){
        actions[currentAnimation].play()
    }
  }, [actions,currentAnimation])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="metarig_55" position={[0, -1, 0]}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Material}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials["Material.005"]}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials["Material.006"]}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials["Material.007"]}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <skinnedMesh
                    name="Object_12"
                    geometry={nodes.Object_12.geometry}
                    material={materials.Material}
                    skeleton={nodes.Object_12.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials["Material.001"]}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name="Object_14"
                    geometry={nodes.Object_14.geometry}
                    material={materials["Material.002"]}
                    skeleton={nodes.Object_14.skeleton}
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials["Material.003"]}
                    skeleton={nodes.Object_15.skeleton}
                  />
                  <skinnedMesh
                    name="Object_16"
                    geometry={nodes.Object_16.geometry}
                    material={materials["Material.004"]}
                    skeleton={nodes.Object_16.skeleton}
                  />
                  <group name="Cube_53" />
                  <group name="Cube001_54" />
                </group>
              </group>
              <group
                name="Circle001_56"
                position={[0.831, 0.969, -0.502]}
                rotation={[-0.062, -0.062, -0.787]}
                scale={[-0.06, 0.06, 0.06]}
              >
                <mesh
                  name="Object_69"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_69.geometry}
                  material={materials["Material.008"]}
                />
                <mesh
                  name="Object_70"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_70.geometry}
                  material={materials["Material.009"]}
                />
                <mesh
                  name="Object_71"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_71.geometry}
                  material={materials["Material.010"]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export default Viking

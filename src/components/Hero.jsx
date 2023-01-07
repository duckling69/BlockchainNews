import React, { useRef, Suspense } from 'react';
import heroImage from '../assets/hero.svg'
import { motion } from 'framer-motion';
import { BoxGeometry, Mesh} from 'three'
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei'
import { useGLTF } from "@react-three/drei";

import { OrbitControls } from '@react-three/drei'
import Social from './Social';
import Footer1 from './Footer1';
import Button from './Button';




function Model(props) {
    const { nodes, materials } = useGLTF("earth.glb");
    const meshRef = React.createRef();

    useFrame(() => {
        if(!meshRef.current){
            return;
        }
        // meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.006;
    })

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            // position={[-0.05, 1.25, 0.07]}
            // rotation={[Math.PI, 0, Math.PI]}
            scale={[2,2,2]}
          >
            <mesh
              ref={meshRef}
              castShadow
              receiveShadow
              geometry={nodes.Object_Planet_0.geometry}
              material={materials.Planet}
            //   position={[0, -1, 0]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}



const Component = () => {
    return (
        <>
        <div className=" font-mono px-4 py-2 mt-[12vh] flex items-center lg:flex-row flex-col-reverse">
            {/* Text and input */}
            <div className="text-gray-500 leading-tight pl-[5vw] w-2/5 lg:ml-0 lg:mr-auto lg:mx-0 ">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount: 0.5}}
                    transition={{ delay: 0.0, duration: 0.5}}
                    variants={{
                        hidden: {opacity:0, x: -50},
                        visible: {opacity:1, x: 0}
                    }}
                >
                    <h1 className="text-5xl font-semibold mb-3"> Let the Truth Reach <span className='hero-text z-50 bg-gray-700 text-gray-50 mt-3'>Everyone</span></h1>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount: 0.5}}
                    transition={{ delay: 0.2, duration: 0.5}}
                    variants={{
                        hidden: {opacity:0, x: -50},
                        visible: {opacity:1, x: 0}
                    }}
                >
                    <p className="mt-2"> Post anonymous bits that are useful for the community. </p>
                </motion.div>

                <div className="mt-6 lg:flex flex flex-col lg:justify-between">
                    <p className="mt-2"></p>
                    <motion.div className='flex flex-row mt-2'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true, amount: 0.5}}
                        transition={{ delay: 0.3, duration: 0.5}}
                        variants={{
                            hidden: {opacity:0, x: -50},
                            visible: {opacity:1, x: 0}
                        }}
                    >
                        
                        {/* {"Icons for social"} */}
                        <div className='text-center flex gap-5 w-full'>

                        <button className='inline-block text-xl px-4 py-2 leading-none border bg-purple-500 text-white rounded-md   hover:bg-purple-700 mt-4 lg:mt-0 transition duration-150 ease-in-out'>
                            Login
                        </button>
                        <a href="/addforms">
                        <Button text="Getting Started"/>
                        </a>
                        <button className='inline-block text-xl px-4 py-2 leading-none border bg-purple-500 text-white rounded-md   hover:bg-purple-700 mt-4 lg:mt-0 transition duration-150 ease-in-out'>
                            Signup
                        </button>
                        </div>
                    </motion.div>

                </div>
            </div>
            {/* Image */}
            {/* <img src={heroImage} alt="Image" className="h-full w-fit object-cover" /> */}
            <div className=' w-[35vw] aspect-square mt-0 mr-11 '>
                {/* <Threed/> */}
                 <Canvas>
                    <OrbitControls enableZoom = {false}/>
                    <ambientLight/>
                    <PerspectiveCamera makeDefault fov = {75} position={[0,0,4]}/>
                    <pointLight position={[10,10,10]}/>
                    {/* <Cube/> */}
                    <Suspense fallback={null}>
                        <Model/>
                    </Suspense>
                </Canvas>
            </div>
            <Social/>
        </div>
        <Footer1 className = 'fixed bottom-0'/>
    </>
    );
};

export default Component;

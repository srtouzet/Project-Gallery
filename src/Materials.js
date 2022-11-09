import { Center,MeshReflectorMaterial} from '@react-three/drei'
import {useLoader} from '@react-three/fiber'
import * as THREE from 'three'
import clouds from './ImagesGallery/clouds.jpg'
import Horse from './ImagesGallery/Horse.jpg'
import Person from './ImagesGallery/Person.jpg'
import Skate from './ImagesGallery/Skate.jpg'
import Walking from './ImagesGallery/WalkingNight.jpg'
import { Lights } from './Light'

export const Materials = () => {
const cloud = useLoader(THREE.TextureLoader,clouds)
const Horses = useLoader(THREE.TextureLoader,Horse)
const Persons = useLoader(THREE.TextureLoader,Person)
const skate = useLoader(THREE.TextureLoader,Skate)
const WalkingNight = useLoader(THREE.TextureLoader,Walking)


return <>
    <Center>
    <mesh>
      <boxGeometry  args={[40,40]} />
      <meshStandardMaterial  roughness={0} metalness={0}  attach="material" map={cloud}/>
    </mesh>    
    <mesh position-x={70}>
      <boxGeometry args={[40,40]} />
      <meshStandardMaterial roughness={0} metalness={0} attach="material" map={Horses}/>
    </mesh> 
    <mesh position-x={140}>
      <boxGeometry args={[40,40]} />
      <meshStandardMaterial  roughness={0} metalness={0} attach="material" map={WalkingNight}/>
    </mesh> 
    <mesh position-x={-70}>
        <boxGeometry args={[40,40]} />
      <meshStandardMaterial roughness={0} metalness={0} attach="material" map={Persons}/>
    </mesh>
    <mesh position-x={-140}>
      <boxGeometry args={[40,40]} />
      <meshStandardMaterial roughness={0} metalness={0} attach="material" map={skate}/>
    </mesh>


<mesh position={[1,-28,1]} rotation-x={-Math.PI / 2}>
    <planeGeometry   args={[300,300,40,40]}/>
    <MeshReflectorMaterial 
    // blur={[300, 100]}
    //       resolution={2048}
    //       mixBlur={1}
    //       mixStrength={40}
    //       roughness={1}
    //       depthScale={1.2}
    //       minDepthThreshold={0.4}
    //       maxDepthThreshold={1.4}
    //       color="#050505"
    //       metalness={0.5}
    />
</mesh>
    </Center>

</>
}
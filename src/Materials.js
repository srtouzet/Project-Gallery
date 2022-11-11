import { Center,Html,MeshReflectorMaterial, PerspectiveCamera} from '@react-three/drei'
import {useLoader} from '@react-three/fiber'
import gsap from 'gsap'
import { useRef } from 'react'
import * as THREE from 'three'
import { Camera } from 'three'
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

const cloudRef = useRef();
const HorseRef = useRef();
const PersonRef = useRef();
const SkateRef = useRef();
const WalkingRef = useRef();
const CameraPers = useRef()

const gallery = useRef()
const galleryExitRef = useRef()

const viewGallery = (e) => {
e.stopPropagation()
    if(gallery.current){
      
       gsap.to(CameraPers.current.position,{
        duration:4,
        z: 100,
        ease: 'ease'
       })
       cloudRef.current.style.display = 'flex'
       gallery.current.style.display = 'none'
       galleryExitRef.current.style.display = 'block'
    }

} 
const exitGallery = (e) => {
e.stopPropagation()

if(CameraPers.current.position.z === 100 && CameraPers.current.position.x === 0){
  gsap.to(CameraPers.current.position,{
    duration:4,
    z: 150,
    ease: 'ease-in-out'
  }) 
  gallery.current.style.display = 'block'
  galleryExitRef.current.style.display = 'none'
  cloudRef.current.style.display = 'none'
}
}

const LeftGallery = (e) => {
  e.stopPropagation();

  if(CameraPers.current.position.x == 70){
      gsap.to(CameraPers.current.position,{
          duration: 4,
          x: 0,
          ease:'ease',
      }
      )
      HorseRef.current.style.display = 'none'

  }
   
  if(CameraPers.current.position.x == 140){
      gsap.to(CameraPers.current.position,{
          duration: 4,
          x:70,
          ease:'ease',
      })
      WalkingRef.current.style.display = 'none'
      HorseRef.current.style.display = 'flex'  
  }
  

  if(CameraPers.current.position.x == 0){
      gsap.to(CameraPers.current.position,{
          duration:4,
      x: -70,
          ease: 'ease'
        })
        PersonRef.current.style.display = 'flex'
  }
  if( CameraPers.current.position.x == -70  ){
      gsap.to(CameraPers.current.position,{
          duration:4,
      x: -140,
          ease: 'ease',
      })
      SkateRef.current.style.display = 'flex'
      PersonRef.current.style.display = 'none'


  }



}


const RightGallery = (e) => {
  e.stopPropagation()

  if(CameraPers.current.position.x == -140){
      gsap.to(CameraPers.current.position,{
          duration:4,
      x: -70,
          ease: 'ease',
      })
      SkateRef.current.style.display = 'none'
      PersonRef.current.style.display = 'flex'


  }
  if(CameraPers.current.position.x == -70){
      gsap.to(CameraPers.current.position,{
          duration:4,
          x: 0,
          ease: 'ease',  
      })
      PersonRef.current.style.display = 'none'

  }

  if(CameraPers.current.position.x == 0){
      gsap.to(CameraPers.current.position,{
          duration: 4,
          x: 70,
          ease:'ease',

      })
      HorseRef.current.style.display = 'flex'     

  }

  if(CameraPers.current.position.x == 70){
      gsap.to(CameraPers.current.position,{
          duration: 4,
          x: 140,
          ease:'ease',
      })
      WalkingRef.current.style.display = 'flex'
      HorseRef.current.style.display = 'none'     

  }
}

return <>
<PerspectiveCamera  ref={CameraPers} makeDefault position={[0,0,150]}/>

<Html  >
        <div class="contenedor">
        <button ref={gallery} class="btnGallery" onClick={viewGallery}><a>View Gallery</a></button>
        </div>

        <div className='containerbtnExitGalery'>
          <button class="btnExitGallery" onClick={exitGallery} ref={galleryExitRef}>Exit Gallery</button>
        </div>

    </Html>
   
    <Center>
    <mesh>
    <Html ref={cloudRef}  style={{
          left: '-4rem',
          transition: '4s all',
          top: '10rem',
          display: 'none'
    }}>
      <div class="containerbtnLeft">

        <button onClick={LeftGallery} class="btnLeft" ><span>Left</span> 
          </button>
      </div>
    
      <div class="containerbtnRight">
        <button onClick={RightGallery} class="btnRight" ><span>Right</span> 
          </button>
      </div>

    </Html>
      <boxGeometry  args={[40,40]} />
      <meshStandardMaterial  roughness={0} metalness={0}  attach="material" map={cloud}/>
    </mesh>    
    <mesh position-x={70}>
    <Html ref={HorseRef}  style={{
        left: '-4rem',
        transition: '4s all',
        top: '10rem',
        display: 'none'


    }}>
      <div class="containerbtnLeft">

<button onClick={LeftGallery} class="btnLeft" ><span>Left</span> 
  </button>
</div>

<div class="containerbtnRight">
<button onClick={RightGallery} class="btnRight" ><span>Right</span> 
  </button>
</div>
    </Html>
      <boxGeometry args={[40,40]} />
      <meshStandardMaterial roughness={0} metalness={0} attach="material" map={Horses}/>
    </mesh> 

    <mesh position-x={140}>
    <Html ref={WalkingRef} style={{
        left: '-4rem',
        transition: '4s all',
        top: '10rem',
        display: 'none'


    }}>
       <div class="containerbtnLeft">

<button onClick={LeftGallery} class="btnLeft" ><span>Left</span> 
  </button>
</div>

<div class="containerbtnRight">
<button onClick={RightGallery} class="btnRight" ><span>Right</span> 
  </button>
</div>
    </Html>
      <boxGeometry args={[40,40]} />
      <meshStandardMaterial  roughness={0} metalness={0} attach="material" map={WalkingNight}/>
    </mesh> 
    <mesh position-x={-70}>
    <Html ref={PersonRef}  style={{
        left: '-4rem',
        transition: '4s all',
        top: '10rem',
        display: 'none'

    }}>
       <div class="containerbtnLeft">

<button onClick={LeftGallery} class="btnLeft" ><span>Left</span> 
  </button>
</div>

<div class="containerbtnRight">
<button onClick={RightGallery} class="btnRight" ><span>Right</span> 
  </button>
</div>
    </Html>
        <boxGeometry args={[40,40]} />
      <meshStandardMaterial roughness={0} metalness={0} attach="material" map={Persons}/>
    </mesh>
    <mesh position-x={-140}>
    <Html ref={SkateRef}  style={{
         left: '-4rem',
         transition: '4s all',
         top: '10rem',
         display: 'none'


    }}>
       <div class="containerbtnLeft">

<button onClick={LeftGallery} class="btnLeft" ><span>Left</span> 
  </button>
</div>

<div class="containerbtnRight">
<button onClick={RightGallery} class="btnRight" ><span>Right</span> 
  </button>
</div>
    </Html>
      <boxGeometry args={[40,40]} />
      <meshStandardMaterial roughness={0} metalness={0} attach="material" map={skate}/>
    </mesh>


<mesh position={[1,-28,1]} rotation-x={-Math.PI / 2}>
    <planeGeometry   args={[400,400,40,40]}/>
    <MeshReflectorMaterial 
    blur={[300, 100]}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
    />
</mesh>
    </Center>

</>
}
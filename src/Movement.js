import { Center, Html, PerspectiveCamera } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import gsap from "gsap"
import { useRef, useState } from "react"



export const Movement = () => {
const gallery = useRef()
const Left = useRef()
const CameraPers = useRef()
const containerLeft = useRef();
const viewGallery = (e) => {
e.stopPropagation()
    if(gallery.current){
      
       gsap.to(CameraPers.current.position,{
        duration:4,
        z: 90,
        ease: 'ease'
       })
       containerLeft.current.style.opacity = 1
    }
} 

const LeftGallery = (e) => {
    e.stopPropagation();

    if(Left.current){
        gsap.to(CameraPers.current.position,{
            duration:4,
        x: -70,
            ease: 'ease'
        })
        containerLeft.current.style.right = '50rem'
       
    }
    if( CameraPers.current.position.x == -70  ){
        gsap.to(CameraPers.current.position,{
            duration:4,
        x: -140,
            ease: 'ease',
        })
        containerLeft.current.style.right = '90rem'
        containerLeft.current.style.display = 'none'
        
    }
}



return <>
    <PerspectiveCamera ref={CameraPers} makeDefault position={[0,0,150]}/>


    
    <Html >
        <div class="contenedor">
        <button ref={gallery} class="btnGallery" onClick={viewGallery}><a>Ver galeria</a></button>
        </div>
    </Html>
    <Html ref={containerLeft} style={{
        right: '4rem',
        opacity: 0,
        transition: '4s all',
        top: '10rem'
    }}>
        <div class="containerLeft" >
        <button onClick={LeftGallery} class="btnLeft" ref={Left}>Left</button>
        </div>
    </Html>
    <Html  style={{
        left:'4rem',
        top:'10rem'
    }}>
        <button class="btnRight" >Right</button>
    </Html>
    </>

}
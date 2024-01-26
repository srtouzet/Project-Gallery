import { Environment, Lightformer, OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export const Lights = () => {

  
return <>

<Environment
// preset="city"
resolution={32}
>
 <color args={['#000']} attach='background'/>
 <Lightformer position-y={4} position-z={4} 
 scale={10}
 color="white"
 intensity={2}
 form='ring' 
/>
</Environment>



<directionalLight 
castShadow
            position={ [ 1, 1, 4 ] }
            intensity={1 }
            shadow-mapSize={ [ 1024, 1024 ] }
            shadow-camera-near={ 1 }
            shadow-camera-far={ 10 }
            shadow-camera-top={ 10 }
            shadow-camera-right={ 10 }
            shadow-camera-bottom={ - 10 }
            shadow-camera-left={ - 10 }/>
</>
}
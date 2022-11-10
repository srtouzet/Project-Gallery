import { Lights } from "./Light"
import { Materials } from "./Materials"
export const Main = () =>{

    return <>
    <ambientLight intensity={1.5}/>
    <Lights/>
    <Materials/>
    </>
}
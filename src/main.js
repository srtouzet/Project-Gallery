import { Light } from "three"
import { Lights } from "./Light"
import { Materials } from "./Materials"
import { Movement } from "./Movement"
export const Main = () =>{

    return <>
    <Movement/>
    <Lights/>
    <Materials/>
    </>
}
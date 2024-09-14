import { createContext } from "react";
import run from '../config/gemini'
 export const context=createContext();
 const Contextprovider=(props)=>{
    const onsent =async(prompt)=>{
        await run(prompt)


    }
    
    const contextvalue={
       

    }
    return(
        <context.Provider value={contextvalue}>
            {props.children}
        </context.Provider>
     )

 }
 
 
 export default  Contextprovider
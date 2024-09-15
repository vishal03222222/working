import { createContext, useState } from "react";
import run from '../config/gemini'
 export const context=createContext();
 const Contextprovider=(props)=>{
    const [input,setinput]=useState("");
    const [recentprompt,setrecentprompt]=useState("");
    const[previousprompt,setpreviousprompt]=useState([])
    const[showresult,setshowresult]=useState(false);
    const[loading,setloading]=useState(false);
    const[resultdata,setresultdata]=useState("");

    const onsent =async(prompt)=>{
        setresultdata("")
        setloading(true);
        setshowresult(true);
        setrecentprompt(input)       
      const response= await run(input);
      setresultdata(response);
      setloading(false);
      setinput("")


    }
    
    const contextvalue={
        previousprompt,
        setpreviousprompt,
        onsent,
        setrecentprompt,
        recentprompt,
        showresult,setshowresult,
        loading,
        resultdata,
        input,setinput
       

    }
    return(
        <context.Provider value={contextvalue}>
            {props.children}
        </context.Provider>
     )

 }
 
 
 export default  Contextprovider
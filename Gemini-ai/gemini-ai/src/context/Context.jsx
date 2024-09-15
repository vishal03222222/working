import { createContext, useState } from "react";
import run from '../config/gemini'
export const context = createContext();
const Contextprovider = (props) => {
    const [input, setinput] = useState("");
    const [recentprompt, setrecentprompt] = useState("");
    const [previousprompt, setpreviousprompt] = useState([])
    const [showresult, setshowresult] = useState(false);
    const [loading, setloading] = useState(false);
    const [resultdata, setresultdata] = useState("");
    const delaypara = (index, nextword) => {
        setTimeout(function() {
            setresultdata(prev=>prev+nextword)
            
        },75*index );
        
    }
    const newchat=()=>{
        setloading(false);
        setshowresult(false);

    }


    const onsent = async (prompt) => {
        setresultdata("")
        setloading(true);
        setshowresult(true);
        let response;
        if (prompt !== undefined){
            response= await run(prompt);
            setrecentprompt(prompt)
            
        }
        else{
            setpreviousprompt(prev=>[...prev,input])
            setrecentprompt(input)
            response =await run(prompt)

        }
        // setrecentprompt(input);
        // setpreviousprompt(prev=>[...prev,input])
        // const response = await run(input);
        let responsearray=response.split("*");
        let newresponse="";
        for (let i=0; i<responsearray.length;i++){
            if (1==0 || i%2!==1) {
                newresponse +=responsearray[i]
                
            }
            else{
                newresponse += "<b>"+responsearray[i]+"</b>"
            }
        }
        let newresponse2=newresponse.split("*").join("</br>")
        let newresponsearray=newresponse2.split("");
        for(let i=0 ;i<newresponsearray.length;i++){
            const nextword= newresponsearray[i];
            delaypara(i,nextword+"")

        }
        //setresultdata(newresponse2);
        setloading(false);
        setinput("")


    }

    const contextvalue = {
        previousprompt,
        setpreviousprompt,
        onsent,
        setrecentprompt,
        recentprompt,
        showresult, setshowresult,
        loading,
        resultdata,
        input, setinput,
        newchat


    }
    return (
        <context.Provider value={contextvalue}>
            {props.children}
        </context.Provider>
    )

}


export default Contextprovider
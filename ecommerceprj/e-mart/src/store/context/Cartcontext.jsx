// import { Children, createContext, useContext, useState } from "react";
//  const Cartcontext =createContext()
//  export const Cartprovider=((Children)=>{
//     const[cartitems,setstcaritems]=useState([])
//      const addtocart=(item)=>{
//         setstcaritems([...cartitems,item])
//      }

//      const removefromart=()=>{
//         setstcaritems(cartitems.filter((apple)=>apple!==item))
//      }
//      return(
//         <Cartcontext.Provider value={{cartitems, addtocart,removefromart}}>
//             {Children}
//         </Cartcontext.Provider>
//      )
//  })
// export const usecart=()=>{
//     return useContext(Cartcontext)
// }
import { createContext, useContext, useState } from "react";

const Cartcontext = createContext();

export const Cartprovider = ({ children }) => {
  const [cartitems, setCartitems] = useState([]);

  const addtocart = (item) => {
    setCartitems([...cartitems, item]);
  };

  const removefromcart = (item) => {
    setCartitems(cartitems.filter((apple) => apple !== item));
  };

  return (
    <Cartcontext.Provider value={{ cartitems, addtocart, removefromcart }}>
      {children}
    </Cartcontext.Provider>
  );
};

export const usecart = () => {
  return useContext(Cartcontext);
};

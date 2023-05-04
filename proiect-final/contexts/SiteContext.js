import { createContext, useState } from "react";

export const SiteContext = createContext();

const SiteContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState([]);
    
    return  <>
    <SiteContext.Provider value={cartItems}>
        {props.children}
        
    </SiteContext.Provider>
    </>

}

export default SiteContextProvider;
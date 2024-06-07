
import { createContext, useState } from "react";

const Context = createContext({})

export const Provider = ({children}) =>{
    const [page, setpage] = useState("DashBoard")
    const [side, setside] = useState(false)
    return (
        <Context.Provider value={{page, setpage, side, setside}}>
            {children}
        </Context.Provider>
    )
}

export default Context;
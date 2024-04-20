

import React, {createContext, useState} from "react";

export const MyContext = createContext();

export const MyContextProvider = ({children}) => {
    const [isMouseTarget, setIsMouseTarget] = useState(false);

    const value = 'context work';

    return <MyContext.Provider value={{isMouseTarget, setIsMouseTarget}}>{children}</MyContext.Provider>
}
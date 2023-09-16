import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

 const UserProvider = ({ children }) =>
{
    const [data, setData] = useState("");

    return (
        <UserContext.Provider value={{ data, setData }}>
            {children}
        </UserContext.Provider>
    );
};
export default UserProvider


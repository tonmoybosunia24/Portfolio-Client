import { getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../Firebase/Firebase.config";

export const GlobalContext = createContext(null);
const auth = getAuth(app);

const GlobalProviders = ({ children }) => {

       const [user, setUser] = useState(null);
       const [loading, setLoading] = useState(true);

       const contextValue = { user, setUser, loading, setLoading }

       return (
              <GlobalContext.Provider value={contextValue}>
                     {children}
              </GlobalContext.Provider>
       );
};

export default GlobalProviders;
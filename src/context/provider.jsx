import context from "./context";
import React, { useState } from "react";

const Provider = ({children}) => {
  const [user, setUser] = useState();
  const [logged, setLogged] = useState(false);
  const [socketId, setSocketId] = useState('');

  const toggleUser = (value) => setUser(value);
  const handleSocketId = (value) => setSocketId(value);
  const toggleLogged = (bool) => setLogged(bool); 
  const contextValue = {
    user,
    toggleUser,
    socketId,
    handleSocketId,
    logged,
    toggleLogged,
  }
  return(
    <context.Provider value={ contextValue } >
      {children}
    </context.Provider>
  );
};

export default Provider;
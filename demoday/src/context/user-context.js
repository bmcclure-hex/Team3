import React, { createContext, useContext, useState } from 'react';

// Create the context
const UserContext = createContext();

// Create a custom hook to use the user context
export const useUserContext = () => useContext(UserContext);

// Create a provider component
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize the user state with null

  // Function to login the user
  const login = (userData) => {
    setUser(userData);
  };

  // Function to logout the user
  const logout = () => {
    setUser(null);
  };

  // The value that will be given to the context
  const value = {
    user,
    login,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

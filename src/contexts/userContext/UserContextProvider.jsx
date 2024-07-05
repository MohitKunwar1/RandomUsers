import React, { useEffect, useState } from "react";
import UserContext from "./UserContext.js";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://randomuser.me/api/?results=60";

  useEffect(() => {
    const apiHandler = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUser(data.results);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    apiHandler();
  }, []);
  return (
    <UserContext.Provider value={{ user, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

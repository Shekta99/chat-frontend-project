import { createContext, useState, useContext, useEffect } from "react";

const userContextDefaultValue = {
  user: { name: "", rol: "", token: "" },
  setUser: () => {},
};

const UserContext = createContext(userContextDefaultValue);
export const UserProvider = ({ children }) => {
  const data = JSON.parse(window.localStorage.getItem("user"));
  const [user, setUser] = useState(data ? data : null);

  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  const value = {
    user,
    setUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

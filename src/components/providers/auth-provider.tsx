"use client";

import { createContext, useContext } from "react";

export type TAuth = {
  loggedIn: boolean;
  name: string;
}

type TAuthProvider = {
  children: JSX.Element[] | JSX.Element;
  initialSession?: TAuth | undefined | null
}

const AuthContext = createContext({
  loggedIn: false,
  name: ""
});

export const AuthProvider = ({ children, initialSession }: TAuthProvider) => {
  console.log(initialSession);

  return (
    <AuthContext.Provider value={initialSession!}>
      { children }
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext);
}
import React, { useState } from "react";

export const AuthStateContext = React.createContext();
export const AuthDispatchContext = React.createContext();

function AuthProvider({ children }) {

  const [user, setUser] = useState({
    activeUserData: {},
    isActive: false
  })

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={setUser}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

function useAuthState() {
  const context = React.useContext(AuthStateContext);

  if (context === undefined) {
    throw new Error("useAuthState must be used within AuthProvider");
  }

  return context;
}

function useAuthDispatch() {
  const context = React.useContext(AuthDispatchContext);

  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within AuthProvider");
  }

  return context;
}

function useAuth() {
  return [useAuthState(), useAuthDispatch()];
}

export { AuthProvider, useAuthState, useAuthDispatch, useAuth };

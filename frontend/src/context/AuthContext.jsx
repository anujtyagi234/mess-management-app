import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        token: action.payload,
        userrole: action.userrole
      };
    case "LOGOUT":
      return {
        token: null,
        userrole: null
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    token: null,
    userrole: null
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userrole = localStorage.getItem("userrole");

    if (token) {
      dispatch({ type: "LOGIN", payload: token, userrole: userrole });
    }
  }, []);

  console.log("authentication state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

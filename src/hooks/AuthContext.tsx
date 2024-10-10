"use client";

import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { Auth } from "@/APIs/auth";

interface AuthContextType {
  isAuthenticated: boolean | null;
  setIsAuthenticated: (isAuthenticated: boolean | null) => void;
  username: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const validateUser = async () => {
      try {
        const response = await Auth.validateUser();
        if (response.status === 200) {
          setIsAuthenticated(true);
          setUsername(response.data.username);
        } else {
          setIsAuthenticated(false);
          setUsername(null);
        }
      } catch (error) {
        setIsAuthenticated(false);
        setUsername(null);
      }
    };

    if (isAuthenticated === null) {
      validateUser();
    }
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, username }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

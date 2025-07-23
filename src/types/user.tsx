'use client';

import { createContext, useContext, ReactNode, ReactElement, useState } from 'react';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface IUserContextType {
  currentUser: IUser | null;
  setCurrentUser: (user: IUser | null) => void;
}

const UserContext = createContext<IUserContextType | undefined>(undefined);

interface IUserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: IUserProviderProps): ReactElement => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): IUserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser musí být použit uvnitř UserProvider');
  }
  return context;
};

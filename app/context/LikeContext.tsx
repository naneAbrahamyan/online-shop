import React, { createContext, PropsWithChildren, useState, FC } from "react";


const likedProducts = [
    {
        id:1,
        liked: false
    },
    {
        id:2,
        liked: false
    },
    {
        id:3,
        liked: false
    },
]
export interface Liked {
  id: number;
  liked: boolean;
}
export type ContextType = {
  likedArray: Liked[];
  setLikedArray: (liked : Liked[]) => void;
};
export const Context = React.createContext<ContextType | null>(null);


const LikeContextProvider: React.FC<PropsWithChildren>  = ({ children }) => {
  const [likedArray, setLikedArray] = useState<Liked[]>(likedProducts);

  return (
    <Context.Provider value={{ likedArray, setLikedArray }}>
      {children}
    </Context.Provider>
  );
};

export default LikeContextProvider;
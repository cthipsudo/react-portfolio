// context/KnightModeContext.js
import { createContext, useContext, useState } from "react";

const KnightModeContext = createContext();

export function KnightModeProvider({ children }) {
  const [knightMode, setKnightMode] = useState(false);

  return (
    <KnightModeContext.Provider value={{ knightMode, setKnightMode }}>
      {children}
    </KnightModeContext.Provider>
  );
}

// Custom hook for convenience
export function useKnightMode() {
  return useContext(KnightModeContext);
}

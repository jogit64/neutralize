// ----------------------------------------------
// UserContext.tsx
// ----------------------------------------------

import React from "react";

// Interface définissant la structure des données dans le contexte
interface UserContextInterface {
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
}

// Initialiser le contexte avec une valeur par défaut
const UserContext = React.createContext<UserContextInterface | null>(null);

export default UserContext;

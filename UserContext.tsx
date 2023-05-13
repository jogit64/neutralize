import React from "react";

interface UserContextInterface {
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
}

// Initialiser le contexte avec une valeur par défaut
const UserContext = React.createContext<UserContextInterface | null>(null);

export default UserContext;

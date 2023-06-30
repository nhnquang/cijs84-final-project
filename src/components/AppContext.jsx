import { createContext } from "react";

const defaultValue = { theme: "", lang: "en" };
const AppContext = createContext(defaultValue);

export default AppContext;

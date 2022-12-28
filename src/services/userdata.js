import { createContext, useEffect, useState } from "react";

const firebase = {
  auth() {
    return { onAuthStateChanged() {} };
  }
};
const AppContext = createContext(null);
function Provider({ children }) {
  const [user, setUser] = useState(true);
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user, setUser);
    return unsubscribe;
  }, []);
  return <AppContext.Provider value={user}>{children}</AppContext.Provider>;
}
const UserData = { Provider, Context: AppContext };
export default UserData;

import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Unauthorized from "./pages/unauthorized";
import UserAuth from "./pages/userauth";
import UserData from "./services/userdata";

function AuthValidator(user) {
  return function RequireAuth({ component }) {
    if (!user) return <Unauthorized />;
    return <>{component};</>;
  };
}
function App() {
  const user = useContext(UserData.Context);
  const RequireAuth = AuthValidator(user);
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<RequireAuth component={<div>Home Page</div>} />}
        />
        <Route path="/auth">
          <Route path="/auth/login" element={<UserAuth />} />
          <Route path="/auth/signup" element={<UserAuth newUser />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;

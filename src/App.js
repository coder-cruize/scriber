import { Route, Routes } from "react-router-dom";
import "./App.css";
import Unauthorized from "./pages/unauthorized";
import UserAuth from "./pages/userauth";

function AuthValidator(user) {
  return function RequireAuth({ component }) {
    if (!user) return <Unauthorized />;
    return <>{component};</>;
  };
}
function App() {
  const RequireAuth = AuthValidator(true);
  return (
    <Routes>
      <Route
        path="/"
        element={<RequireAuth component={<div>Home Page</div>} />}
      />
      <Route path="/auth">
        <Route path="/auth/login" element={<UserAuth />} />
        <Route path="/auth/signup" element={<UserAuth newUser />} />
      </Route>
    </Routes>
  );
}

export default App;

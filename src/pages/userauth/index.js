import { useState } from "react";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import AuthForm from "../../components/authform";
import "./style.css";

export default function UserAuth({ newUser }) {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const pageHeading = newUser ? "Join the party at" : "Welcome back to";
  const submit = () => {};
  return (
    <main className="userAuthPage">
      <header>
        <Logo width={30} height={30} />
        {/* <span>Scriber</span> */}
      </header>
      <h2>
        {pageHeading}
        <span>#Scriber.</span>
      </h2>
      <AuthForm
        title={newUser ? "Signup" : "Login"}
        changeAuth={{ text: "New to Scriber?", path: "/signup" }}
        handles={{
          email,
          setEmail,
          pwd,
          setPwd
        }}
        submit={submit}
        hideForgotPwd={newUser}
      />
    </main>
  );
}

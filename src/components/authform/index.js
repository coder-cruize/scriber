import { m as motion } from "framer-motion";
import { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import validator from "../../utils/validator";
import Checkbox from "../checkbox";
import Input from "../input";
import "./style.css";

const pageOptions = {
  signup: {
    title: "Signup",
    otherAuth: {
      url: "/auth/login",
      text: "Already have an account?",
      title: "Login"
    },
    pwdAutoComplete: "new-password"
  },
  login: {
    title: "Login",
    otherAuth: {
      url: "/auth/signup",
      text: "New to Scriber?",
      title: "Signup"
    },
    pwdAutoComplete: "current-password"
  }
};
export default function AuthForm({ newUser }) {
  const [email, setEmail] = useReducer(
    (state, input) => ({ value: input, valid: validator.isEmail(input) }),
    { value: "", valid: null }
  );
  const [pwd, setPwd] = useReducer(
    (state, input) => ({ value: input, valid: validator.isPassword(input) }),
    { value: "", valid: null }
  );
  const [check, setCheck] = useState(true);
  const [loading, setLoading] = useState(false);
  const preventOnSubmit = (e) => loading && e.preventDefault();

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
  };
  const authOptions = newUser ? pageOptions.signup : pageOptions.login;

  return (
    <motion.form
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="authForm"
      onSubmit={submit}
      noValidate>
      <fieldset>
        <Input
          label={"Email"}
          value={email.value}
          onChange={setEmail}
          valid={email.valid}
          type={"email"}
          autoComplete={"email"}
          disabled={loading}
          warning={"Invalid Email Address"}
        />
        <Input
          label={"Password"}
          value={pwd.value}
          onChange={setPwd}
          valid={pwd.valid}
          type={"password"}
          autoComplete={"new-password"}
          pwdVisibleBtn
          disabled={loading}
          warning={
            "At least 8 characters, 1 upper and 1 lower case letter and 1 number"
          }
        />
        <input
          type="password"
          name="password"
          id="hiddenpassword"
          autoComplete="new-password"
          style={{ display: "none" }}
          // this element helps autocomplete work on chrome, edge and IE.
        />
        <div className="authFormHelper">
          <Checkbox
            value={check}
            onChange={setCheck}
            disabled={loading}
            title={"Remember me"}
          />
          {!newUser && (
            <Link onClick={preventOnSubmit} to="/auth/password_reset">
              Forgot Password?
            </Link>
          )}
        </div>
        <button
          disabled={!email.valid || !pwd.valid || loading}
          type="submit"
          className="authFormSubmitBtn">
          {!loading ? (
            authOptions.title
          ) : (
            <motion.div
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                border: "3px solid #fff",
                borderLeftColor: "transparent"
              }}
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: Infinity
              }}
            />
          )}
        </button>
        <div className="authFormChangeLink">
          <span>{authOptions.otherAuth.text}</span>
          <Link onClick={preventOnSubmit} to={authOptions.otherAuth.url}>
            {authOptions.otherAuth.title}
          </Link>
        </div>
      </fieldset>
    </motion.form>
  );
}

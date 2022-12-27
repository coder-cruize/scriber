import { useReducer, useState } from "react";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import Checkbox from "../../components/checkbox";
import Dropdown from "../../components/dropdown";
import Input from "../../components/input";
import validator from "../../utils/validator";
import "./style.css";

function FeatureCarousel() {
  return <section className="featureCarousel"></section>;
}
const pageOptions = {
  signup: {
    title: "Signup",
    otherAuth: {
      url: "/login",
      text: "Already have an account?",
      title: "Login"
    },
    pwdAutoComplete: "new-password"
  },
  login: {
    title: "Login",
    otherAuth: { url: "/signup", text: "New to Scriber?", title: "Signup" },
    pwdAutoComplete: "current-password"
  }
};
export default function UserAuth({ newUser }) {
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
  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    // todo: add spinner to submit button
  };
  const changeLanguage = () => {};
  const authOptions = newUser ? pageOptions.signup : pageOptions.login;
  return (
    <main className="userAuthPage">
      <section className="authFormContainer">
        <header>
          <Logo width={30} height={30} />
          <div className="pageActions">
            <a href="">Guest</a>
            <Dropdown
              defaultIndex={0}
              options={["English", "French", "Spanish"]}
              onChange={changeLanguage}
            />
          </div>
        </header>
        <form className="authForm" onSubmit={submit} noValidate>
          <fieldset>
            <Input
              label={"Email"}
              value={email.value}
              onChange={setEmail}
              valid={email.valid}
              type={"email"}
              autoComplete={"email"}
              autoFocus
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
              {!newUser && <a href="/password_reset">Forgot Password?</a>}
            </div>
            <input
              disabled={!email.valid || !pwd.valid}
              type="submit"
              className="authFormSubmitBtn"
              value={authOptions.title}
            />
            <div className="authFormChangeLink">
              <span>{authOptions.otherAuth.text}</span>
              <a href={authOptions.otherAuth.url}>
                {authOptions.otherAuth.title}
              </a>
            </div>
          </fieldset>
        </form>
      </section>
      <FeatureCarousel />
    </main>
  );
}

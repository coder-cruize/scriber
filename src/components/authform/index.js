import { useState } from "react";
import isEmail from "validator/es/lib/isEmail";
import isStrongPassword from "validator/es/lib/isStrongPassword";
import { ReactComponent as AtIcon } from "../../assets/icons/at.svg";
import { ReactComponent as KeyIcon } from "../../assets/icons/key.svg";
import "./style.css";

const errorColor = "#ff6e6e";
const InputGroup = ({
  type = "text",
  placeholder,
  Icon,
  label,
  state,
  isValid,
  errorMsg
}) => (
  <div className="authFormInputGroup">
    <label hidden="hidden" htmlFor={`authInput-${placeholder}`}>
      {placeholder}
    </label>
    <Icon stroke={isValid ? "#ccc" : errorColor} />
    <input
      type={type}
      value={state.value}
      onChange={state.set}
      placeholder={placeholder}
      id={`authInput-${label}`}
      style={{ borderBottomColor: isValid ? "#ccc" : errorColor }}
    />
    <div
      className="authFormErrorMsg"
      style={{
        color: errorColor,
        opacity: isValid ? 0 : 1,
        height: isValid ? 0 : 10
      }}>
      {errorMsg}
    </div>
  </div>
);
export default function AuthForm({
  title,
  hideForgotPwd,
  handles,
  changeAuth
}) {
  const { email, setEmail, pwd, setPwd } = handles;
  const [emailValid, setEmailValid] = useState(true);
  const [pwdValid, setPwdValid] = useState(true);
  return (
    <form className="authForm">
      <fieldset>
        <legend>{title}</legend>
        <InputGroup
          label="email"
          placeholder="Email ID"
          Icon={AtIcon}
          state={{
            value: email,
            set: (e) => {
              setEmail(e.target.value);
              setEmailValid(isEmail(e.target.value.trim()));
            }
          }}
          isValid={emailValid}
          errorMsg="Invalid Email ID"
        />
        <InputGroup
          label="password"
          type="password"
          placeholder="Password"
          Icon={KeyIcon}
          state={{
            value: pwd,
            set: (e) => {
              setPwd(e.target.value);
              setPwdValid(isStrongPassword(e.target.value.trim()));
            }
          }}
          isValid={pwdValid}
          errorMsg="Invalid Password"
        />
        {!hideForgotPwd && (
          <div className="authFormForgotPwd">
            <a href="/password_reset">Forgot Password?</a>
          </div>
        )}
        <input
          disabled={!emailValid || !pwdValid || email === "" || pwd === ""}
          type="button"
          className="authFormSubmitBtn"
          value={title}
        />
        <center className="authFormSeparator">Or continue as</center>
        <input type="button" className="authFormGuestBtn" value="Guest" />
        <div className="authFormChangeLink">
          <a href={changeAuth.path}>
            {changeAuth.text}
            <span>{title}</span>
          </a>
        </div>
      </fieldset>
    </form>
  );
}

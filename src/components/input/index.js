import { useState } from "react";
import { ReactComponent as Hide } from "../../assets/icons/eyeclose.svg";
import { ReactComponent as Show } from "../../assets/icons/eyeopen.svg";
import "./style.css";

export default function Input({
  type,
  label,
  value,
  onChange,
  autoComplete,
  disabled,
  valid,
  warning,
  pwdVisibleBtn
}) {
  const [showPwd, setShowPwd] = useState(false);
  return (
    <div className="customInputGroup">
      <label htmlFor={type}>{label}</label>
      <div className={valid !== false ? null : "invalidInput"}>
        <input
          type={pwdVisibleBtn && (showPwd ? "text" : type)}
          name={type}
          id={type}
          value={value}
          autoComplete={autoComplete}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
        />
        {pwdVisibleBtn &&
          (showPwd ? (
            <Hide fill="#686868" onClick={() => setShowPwd(!showPwd)} />
          ) : (
            <Show stroke="#686868" onClick={() => setShowPwd(!showPwd)} />
          ))}
      </div>
      <span>{warning}</span>
    </div>
  );
}

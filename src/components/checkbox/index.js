import { ReactComponent as Check } from "../../assets/icons/check.svg";
import "./style.css";

export default function Checkbox({ value, onChange, title, disabled }) {
  const handle = () => {
    if (disabled) return;
    onChange(!value);
  };
  return (
    <button className="customCheckBox" type="button" onClick={handle}>
      <div className={value ? "active" : null} disabled={disabled}>
        {value && <Check />}
      </div>
      {title && <span>{title}</span>}
    </button>
  );
}

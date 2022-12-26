/* eslint-disable no-unused-vars */
import { ReactComponent as Caret } from "../../assets/icons/dropdown.svg";
import "./style.css";

export default function Dropdown({ defaultIndex, options, onChange }) {
  return (
    <button className="customDropdown">
      <span>English</span>
      <Caret width={10} height={10} />
      <ul>
        {options.map((val, i) => (
          <li
            key={i}
            className={defaultIndex === i ? "active" : null}
            onClick={() => onChange(val)}>
            {val}
          </li>
        ))}
      </ul>
    </button>
  );
}

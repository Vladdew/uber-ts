import { FunctionComponent } from "react";
import { SelectProps } from "../../types/interfaces";

import "./Select.scss";

export const Select: FunctionComponent<SelectProps> = ({
  name,
  value,
  options,
  iconUrl,
}) => (
  <div className="select">
    <select name={name} defaultValue={value} className="select__input">
      {options.map(({ value, label }) => (
        <option value={value} key={value}>
          {label}
        </option>
      ))}
    </select>
    {!!iconUrl && (
      <img className="select__icon" src={iconUrl} alt="select icon" />
    )}

    <img
      className="select__arrow"
      src="./images/arrow-down.svg"
      alt="arrow down"
    />
  </div>
);

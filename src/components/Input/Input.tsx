import { FunctionComponent, useState } from "react";
import cx from "classnames";

import { InputProps } from "../../types/interfaces";
import "./Input.scss";

export const Input: FunctionComponent<InputProps> = props => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);

  const {
    iconUrl,
    value,
    onChange,
    type,
    placeholder,
    name,
    className,
    isSmall,
    label,
  } = props;

  const inputWrapperClass = cx("control__input-wrapper", {
    "control__input-wrapper--focused": isFocused,
    [className!]: !!className,
  });

  const inputClass = cx("control__input", {
    "control__input--small": isSmall,
    "control__input--time": type === "time",
  });

  return (
    <label htmlFor="control" className="control">
      {label && <p className="control__label">{label}</p>}
      <div className={inputWrapperClass}>
        {!!iconUrl && (
          <img src={iconUrl} alt={placeholder} className="control__icon" />
        )}

        <input
          type={type}
          value={value}
          onChange={e => onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={name}
          placeholder={placeholder}
          className={inputClass}
        />
      </div>
    </label>
  );
};

export default Input;

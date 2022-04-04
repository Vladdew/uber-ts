import { FunctionComponent } from "react";
import { ErrorProps } from "../../types/interfaces";
import "./Error.scss";

export const Error: FunctionComponent<ErrorProps> = ({ message }) => {
  const msg = message || "Sorry, something went wrong";
  return (
    <div className="error">
      <p className="error__text">Sorry, something wrong(</p>
      <p className="error__text">{msg}</p>
      <a href="/" className="error__link">
        Go to main page
      </a>
    </div>
  );
};

export default Error;

import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../../Routes";
import { TextStyle } from "./style";
const Text = ({ text }) => {
  return (
    <div>
      <TextStyle>
        <Link to={PATHS.FORGETPASSWORD}>{text}</Link>
      </TextStyle>
    </div>
  );
};

export default Text;

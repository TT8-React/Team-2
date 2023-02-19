import React from "react";
import { ALink } from "../../global/style";
import { Text } from "./style";
const TextForm = ({ text, spanText, linkTo }) => {
  return (
    <Text>
      {text}
      <ALink to={linkTo} color="#FF0000">
        {spanText}
      </ALink>
    </Text>
  );
};

export default TextForm;

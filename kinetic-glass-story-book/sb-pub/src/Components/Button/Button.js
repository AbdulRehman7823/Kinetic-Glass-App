import React from "react";
import { ButtonWrapper } from "./ButtonWrapper";

export const Button = (props) => {
 
  const {color,size,children,...rest} = props;
  return (
    <div>
      <ButtonWrapper color={color} size={size} {...rest}>
            {children}
      </ButtonWrapper>
    </div>
  );
};

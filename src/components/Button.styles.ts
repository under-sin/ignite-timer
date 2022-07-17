import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const ButtonVariants = {
  primary: "purple",
  secondary: "blue",
  danger: "red",
  success: "green"
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  margin: 8px;
  border-radius: 4px;
  border: 0;

  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};

  /* ${(props) => {
    return css`
      background-color: ${ButtonVariants[props.variant]};
    `;
  }} */
`;

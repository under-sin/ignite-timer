import styled from 'styled-components';

interface ButtonVariantProps {
  variant: 'primary' | 'segondary' | 'danger' | 'warning';
}

export const ButtonContainer = styled.button<ButtonVariantProps>`
  width: 100px;
  height: 40px;
`;

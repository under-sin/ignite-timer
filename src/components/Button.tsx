import { ButtonContainer } from './Button.styles';

interface ButtonProps {
  variant?: 'primary' | 'segondary' | 'danger' | 'warning';
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>Botão</ButtonContainer>;
}

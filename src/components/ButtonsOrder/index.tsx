import React from 'react';
import TextButton from '../TextButton';
import {
  Container,
} from './styled';

export interface IButtonProps {
  id: number;
  text: string;
  type: string;
  isLoading: boolean;
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
}

export interface IButtonsOrderProps {
  buttons: any[];
}

const ButtonsOrder: React.FC<IButtonsOrderProps> = ({ buttons }) => (
  <Container>
    {buttons.length > 0 && buttons.map((button) => (
      <TextButton width="18.438" key={`button-${button.id}`} type={button.type} isLoading={button.isLoading} {...button} />
    ))}
  </Container>
);

export default ButtonsOrder;

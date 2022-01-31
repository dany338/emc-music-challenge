import React from 'react'
import {
  Container,
  Wrapper,
  SearchBox,
} from './styled';

export interface ITextButtonProps {
  text: string;
  type: string | any;
  width: string;
  isLoading?: boolean;
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
};

const TextButton: React.FC<ITextButtonProps> = ({ text, type, width = '5.25', isLoading = false, onClick = () => ({}) }) => (
  <Container>
    <Wrapper>
      <SearchBox width={width}>
        {type === 'submit' ? <button type={type} disabled={isLoading}>{text}</button> : <button type={type} onClick={onClick} disabled={isLoading}>{text}</button>}
      </SearchBox>
    </Wrapper>
  </Container>
);

export default TextButton;

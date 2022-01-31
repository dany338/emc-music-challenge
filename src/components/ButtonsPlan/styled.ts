import styled from 'styled-components';
import Colors from '../../styleguide/colors';

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const WrapperButtons = styled.div`
  padding: 1.125rem 0rem;
  display: grid;
	grid-template-columns: repeat(6, 1fr);
	gap: 20px;
  width: 100%;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 5px;
  }
`;
import styled from 'styled-components';
import Colors from '../../styleguide/colors';

export const Container = styled.div`
  background: ${Colors.white};
  box-sizing: border-box;
  border-radius: 6px;
  height: 3.125rem;
  width: 100%;
  margin: 0.938rem 0rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 81.25rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

export const SearchBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 81.25rem;
  height: 3.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  select {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    border-radius: 0.313rem;

    &:focus {
      outline: none;
      border: none;
    }

    &:active {
      outline: none;
      border: none;
    }
  }

  .errors {
    font-size: 14px;
    color: ${Colors.backgroundColorBadgeRed};
  }
`;
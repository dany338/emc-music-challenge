import styled from 'styled-components';
import Colors from '../../styleguide/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;

  .form {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    background: ${Colors.white};
    box-shadow: 0px 24px 64px rgba(22, 27, 45, 0.05);
    border-radius: 5px;

    &:hover, &:focus {
      border-radius: 0.5rem;
      transition: outline-offset 0.1s ease;
      outline-offset: 4px;
      outline: ${Colors.backgroundColorBadgeRed} auto 1px;
      cursor: pointer;
    }

    .description {
      padding: 0.625rem 1rem;
      font-family: Roboto, "Helvetica Neue", sans-serif;
      font-style: normal;
      font-weight: 900;
      font-size: 1.063rem;
      line-height: 1.625rem;
      text-align: center;
      color: ${Colors.colorDescriptionSign};
    }
  }
`;

export const GroupFields = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0.625rem 1rem;
`;
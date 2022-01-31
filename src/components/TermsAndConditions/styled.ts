import styled from 'styled-components';
import Colors from '../../styleguide/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: space-between;
  flex-direction: row;
  margin: auto;
`;

export const UserLocation = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Welcome = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${Colors.white};
  box-shadow: 0px 24px 64px rgba(22, 27, 45, 0.05);
  border-radius: 5px;
  padding: 1rem;

  &:hover, &:focus {
    border-radius: 0.5rem;
    transition: outline-offset 0.1s ease;
    outline-offset: 4px;
    outline: ${Colors.backgroundColorBadgeRed} auto 1px;
    cursor: pointer;
  }

  p {
    margin: 0.5rem;
    padding: 1.438rem 0rem;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 1.313rem;
    line-height: 2rem;
    text-align: justify;
    color: ${Colors.colorTextLinkNormal};
    width: 42.5rem;

    @media screen and (max-width: 960px) {
      width: 42.5rem;
    }

    @media screen and (max-width: 880px) {
      width: 42.5rem;
    }

    @media screen and (max-width: 500px) {
      width: 100%;
    }

    @media screen and (max-width: 260px) {
      width: 100%;
    }
  }
`;

export const GroupFields = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
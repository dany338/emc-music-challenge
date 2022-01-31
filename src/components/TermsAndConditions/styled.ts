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

  p {
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
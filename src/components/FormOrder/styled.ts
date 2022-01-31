import styled from 'styled-components';
import Colors from '../../styleguide/colors';

export interface ICardProps {
  image: string;
};

export const Container = styled.div`
  width: 100%;
  padding: 7.938rem 0rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 81.25rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: auto;
`;

export const ContainerTabs = styled.div`
  /* padding: 7.938rem 0rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  width: 80%;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin: auto;
`;

export const ContentTab = styled.div`
  width: 96%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin: auto;
`;

export const ContainerViews = styled.div`
  padding: 1.438rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  width: 20%;
`;
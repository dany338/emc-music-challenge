import styled from 'styled-components';
import Colors from '../../styleguide/colors';
export interface IOverlayProps {
  showOverlay: boolean;
  positionModal: string;
};

export interface IModalContainerProps {
  padding: string;
};

export const Overlay = styled.div<IOverlayProps>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ showOverlay }) => showOverlay ? `${Colors.colorShowOverlay}` : 'transparent'};
  padding: 40px;
  display: flex;
  align-items: ${({ positionModal }) => positionModal ? positionModal : 'center'};
  justify-content: center;
  z-index: 3;
  @media screen and (max-width: 960px) {
    padding: 30px;
  }

  @media screen and (max-width: 880px) {
    padding: 20px;
  }

  @media screen and (max-width: 500px) {
    padding: 10px;
  }

  @media screen and (max-width: 260px) {
    padding: 0px;
  }
`;

export const Container = styled.div<IModalContainerProps>`
  background: ${Colors.white};
  border-radius: 5px;
  width: 50%;
  min-height: 100px;
  position: relative;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: ${({ padding }) => padding ? padding : '20px'};
  border-radius: 5px;
  
  @media screen and (max-width: 960px) {
    width: 60%;
  }

  @media screen and (max-width: 880px) {
    width: 70%;
  }

  @media screen and (max-width: 500px) {
    width: 90%;
  }

  @media screen and (max-width: 260px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${Colors.borderBottomHeader};

  h3 {
    font-weight: 500;
    font-size: 16px;
    color: ${Colors.colorHeaderH3};
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s all ease;
  border-radius: 5px;
  color: ${Colors.colorButtonClose};

  &:hover {
    background: ${Colors.colorButtonCloseHover};
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
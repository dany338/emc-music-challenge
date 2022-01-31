import styled from 'styled-components';
import Colors from '../../styleguide/colors';

export interface IGroupFieldsProps {
  position?: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;

  .form {
    width: 100%;
    align-items: flex-start;

    .description {
      font-family: Roboto, "Helvetica Neue", sans-serif;
      font-style: normal;
      font-weight: 900;
      font-size: 1.063rem;
      line-height: 1.625rem;
      text-align: center;
      color: ${Colors.colorDescriptionSign};
    }

    form {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      margin: auto;
    }
  }
`;

export const GroupFields = styled.div<IGroupFieldsProps>`
  width: 100%;
  display: flex;
  justify-content: ${({ position }) => position ? `${position}` : 'space-between' };
  align-items: center;
  flex-direction: row;

  img {
    width: 5rem;
    height: 5rem;
  }
`;

export const CreditCard = styled.div`
  background-color: ${Colors.white};
  box-shadow: 0px 24px 64px rgba(22, 27, 45, 0.05);
  border-radius: 5px;
	min-height: 200px;
	font-weight: bold;
	position: relative;
	overflow: hidden;
  width: 100%;
  height: auto;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  margin: 1rem 0rem;
  padding: 1rem;

  &:hover {
    border-radius: 0.5rem;
    transition: outline-offset 0.1s ease;
    outline-offset: 4px;
    outline: ${Colors.backgroundColorBadgeRed} auto 1px;
    cursor: pointer;
  }

  .credit-card--description {
    padding-top: 0.5rem;
    color: ${Colors.colorTextDescriptionBlog};
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export const PayPal = styled.div`
  background-color: ${Colors.white};
  box-shadow: 0px 24px 64px rgba(22, 27, 45, 0.05);
  border-radius: 5px;
	min-height: 200px;
	font-weight: bold;
	position: relative;
	overflow: hidden;
  width: 100%;
  height: auto;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  margin: 1rem 0rem;
  padding: 1rem;

  &:hover {
    border-radius: 0.5rem;
    transition: outline-offset 0.1s ease;
    outline-offset: 4px;
    outline: ${Colors.backgroundColorBadgeRed} auto 1px;
    cursor: pointer;
  }

  .paypal--description {
    padding-top: 0.5rem;
    color: ${Colors.colorTextDescriptionBlog};
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;
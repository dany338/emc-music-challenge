import styled from 'styled-components';
import Colors from '../../styleguide/colors';

export interface ICardCoinContainerProps {
  image: string;
};

export type TLabelPriceColor = {
  primary: string;
  secundary: string;
  terciary: string;
};

const labelPriceColor: TLabelPriceColor | any = {
  primary: Colors.backgroundColorBadgeGreen,
  secundary: Colors.backgroundColorBadgeYellow,
  terciary: Colors.backgroundColorBadgeRed,
};

export const Container = styled.div<ICardCoinContainerProps>`
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

  &:hover {
    border-radius: 0.5rem;
    transition: outline-offset 0.1s ease;
    outline-offset: 4px;
    outline: ${Colors.backgroundColorBadgeYellow}; auto 1px;
    cursor: pointer;
  }

  .header {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      border-radius: 100px;
      background-color: ${Colors.backgroundColorBadgeRed};
      span {
        color: ${Colors.white};
        text-transform: uppercase;
        display: flex;
        align-items: center;
        text-align: center;
        font-weight: 900;
        font-size: 0.75rem;
        letter-spacing: 0.08em;
        line-height: 0.875rem;
        padding: 0.313rem 0.563rem;
        font-family: "Roboto", sans-serif;
      }
    }

    img {
      cursor: pointer;

      &:active {
        transform: scale(0.9);
      }
    }
  }

  .image {
    background-size: contain;
    background-repeat: no-repeat;
	  background-position: center center;
    background-image: url(${({ image }) => image});
    height: 12.813rem;
  }

  .textos {
    margin: 25px;
    height: auto;
    display: flex;
	  flex-direction: column;
	  justify-content: flex-start;
    color: ${Colors.colorTextResultsFounded};

    .titulo {
      color: ${Colors.colorTextTitleBlog};
      font-family: "Roboto", sans-serif;
      font-weight: 900;
      font-size: 1.313rem;
      line-height: 1.75rem;
      letter-spacing: -0.01em;
    }

    .description {
      padding-top: 0.5rem;
      color: ${Colors.colorTextDescriptionBlog};
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  .line {
    margin: 1.563rem;
    width: 86%;
    height: 0px;
    border: 0.063rem solid ${Colors.colorLineSeparate};
  }

  .footer {
    margin: 1.563rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div:first-child {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      img {
        width: 1.563rem;
        height: 1.563rem;
        fill: ${Colors.backgroundColorBadgeYellow};
      }

      span {
        padding-left: 0.438rem;
        color: ${Colors.colorTextDescriptionBlog};
        font-family: "Roboto", sans-serif;
        font-weight: 900;
        font-size: 0.75rem;
        line-height: 0.875rem;
        letter-spacing: 0.07em;
        text-transform: uppercase;
        opacity: 0.7;
      }
    }

    div:last-child {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      span {
        color: ${Colors.colorTextDescriptionBlog};
        font-family: "Roboto", sans-serif;
        font-weight: 900;
        font-size: 0.75rem;
        line-height: 0.875rem;
        text-align: center;
        letter-spacing: 0.07em;
        text-transform: uppercase;
        opacity: 0.7;
      }
    }
  }
`;
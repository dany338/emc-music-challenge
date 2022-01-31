import styled from 'styled-components';
import Colors from '../../styleguide/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;

  .title {
    color: ${Colors.colorTextTitleBlog};
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    font-size: 1.313rem;
    line-height: 1.75rem;
    letter-spacing: -0.01em;
  }

  .card {
    background-color: ${Colors.white};
    box-shadow: 0px 24px 64px rgba(22, 27, 45, 0.05);
    border-radius: 5px;
    min-height: 100px;
    font-weight: bold;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: auto;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;

    &:hover, &:focus {
      border-radius: 0.5rem;
      transition: outline-offset 0.1s ease;
      outline-offset: 4px;
      outline: ${Colors.backgroundColorBadgeRed} auto 1px;
      cursor: pointer;
    }

    .card-content {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      margin: 0.5rem;
      padding: 1rem;
      width: 100%;

      .line {
        margin: 0.563rem;
        width: 95%;
        height: 0px;
        border: 0.063rem solid ${Colors.colorLineSeparate};
      }

      .card-content--row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        width: 100%;

        .label {
          padding-top: 0.5rem;
          color: ${Colors.colorTextDescriptionBlog};
          font-family: "Roboto", sans-serif;
          font-size: 0.8rem;
          line-height: 1.5rem;
        }

        .subtotal {
          padding-top: 0.5rem;
          color: ${Colors.colorTextDescriptionBlog};
          font-family: "Roboto", sans-serif;
          font-size: 0.8rem;
          line-height: 1.5rem;
        }

        .tax {
          padding-top: 0.5rem;
          color: ${Colors.colorTextDescriptionBlog};
          font-family: "Roboto", sans-serif;
          font-size: 0.8rem;
          line-height: 1.5rem;
        }

        .total {
          padding-top: 0.5rem;
          color: ${Colors.backgroundColorBadgeRed};
          font-weight: 900;
          font-family: "Roboto", sans-serif;
          font-size: 0.8rem;
          line-height: 1.5rem;
        }
      }
    }
  }
`;

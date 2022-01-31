import styled from 'styled-components';
import Colors from '../../styleguide/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;

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
      outline: ${Colors.backgroundColorBadgeRed}; auto 1px;
      cursor: pointer;
    }

    .card-content {
      justify-content: center;
      align-items: center;
      flex-direction: row;
      margin: 1rem;
      padding: 1rem;

      .card-content--info {
        padding-top: 0.5rem;
        color: ${Colors.colorTextDescriptionBlog};
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        line-height: 1.5rem;
        text-transform: uppercase;
      }

      .card-content--logo {
        img {
          width: 0.75rem;
          height: 0.75rem;
        }
      }
    }
  }
`;

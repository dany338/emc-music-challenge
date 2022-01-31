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
  justify-content: flex-end;
  align-items: center;
  margin: auto;

  .toggle-switch {
    position: relative;
    margin-right: 10px;
    width: 75px;
    display: inline-block;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    text-align: left;
    .toggle-switch-checkbox {
      display: none;

      &:checked + .toggle-switch-label {
        .toggle-switch-inner {
          margin-left: 0;
        }
        .toggle-switch-switch {
          right: 0px;
        }
      }
    }
    .toggle-switch-label {
      display: block;
      overflow: hidden;
      cursor: pointer;
      border: 0 solid #bbb;
      border-radius: 20px;
      margin: 0;
      &:focus {
        outline: none;
        > span {
          box-shadow: 0 0 2px 5px red;
        }
      }
      > span:focus {
        outline: none;
      }
    }
    .toggle-switch-inner {
      display: block;
      width: 200%;
      margin-left: -100%;
      transition: margin 0.3s ease-in 0s;
      &:before,
      &:after {
        display: block;
        float: left;
        width: 50%;
        height: 34px;
        padding: 0;
        line-height: 34px;
        font-size: 14px;
        color: ${Colors.white};
        font-weight: bold;
        box-sizing: border-box;
      }
      &:before {
        content: attr(data-yes);
        text-transform: uppercase;
        padding-left: 10px;
        background-color: ${Colors.backgroundColorBadgeGreen};
        color: ${Colors.white};
      }
      &:after {
        content: attr(data-no);
        text-transform: uppercase;
        padding-right: 10px;
        background-color: #bbb;
        color: ${Colors.white};
        text-align: right;
      }
    }
    .toggle-switch-switch {
      display: block;
      width: 1.5rem;
      height: 1.5rem;
      margin: 5px;
      background: ${Colors.white};
      position: absolute;
      top: 0;
      bottom: 0;
      right: 40px;
      border: 0 solid #bbb;
      border-radius: 20px;
      transition: all 0.3s ease-in 0s;
    }
    /* .toggle-switch-label {
      
    } */
    @media screen and (max-width: 991px) {
      transform: scale(0.9);
    }
    @media screen and (max-width: 767px) {
      transform: scale(0.825);
    }
    @media screen and (max-width: 575px) {
      transform: scale(0.75);
    }
  }
`;
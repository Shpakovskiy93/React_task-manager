import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../store/ThemeContext';
import { useUserContext } from '../../store/UserContext';

const ButtonWrapper = styled.button`
  border: none;
  padding: 16px;
  cursor: pointer;
  margin: 16px 0;
  &:focus {
    outline: none;
  }
  background-color: ${props => props.tabWrapperBgColor};
  box-shadow: 0px 2px 6px 0px ${props => props.tabWrapperShadowColor};
  color: ${(props) => props.mainTextColor};
  border-radius: 4px;
  transition: all .8s;
  font-size: 16px;
  &:hover {
    box-shadow: 0px 2px 6px 0px ${props => !props.tabWrapperShadowColor};
  }
`;

const ButtonComponent = ({children}) => {
  const {theme} = useContext(ThemeContext);
  const {loginAction} = useUserContext();
    return (
      <ButtonWrapper
        tabWrapperBgColor={theme.tabWrapperBgColor}
        tabWrapperShadowColor={theme.tabWrapperShadowColor}
        mainTextColor={theme.mainTextColor}
        onClick={loginAction}
      >
        {children}
      </ButtonWrapper>
    );
}
export {ButtonComponent};
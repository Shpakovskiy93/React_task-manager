import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';
import { ThemeContext } from '../../theme/ThemeContext';

const ButtonWrapper = styled.button`
  width: 50px;
  height: 50px;
  position: fixed;
  top: 16px;
  right: 16px;
  border-radius: 50%;
  background-color: ${props => props.buttonBgColor};
  color: ${props => props.mainBorderColor};
  border: 1px solid ${props => props.mainBorderColor};
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const ChangeThemeButtonComponent = () => {
    const {theme, isDarkMode, toggleTheme} = useContext(ThemeContext);
    return (
      <ButtonWrapper
        mainBorderColor={theme.mainBorderColor}
        buttonBgColor={theme.buttonBgColor}
        onClick={() => toggleTheme(!isDarkMode)}
      >
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
      </ButtonWrapper>
    );
};
export {ChangeThemeButtonComponent};
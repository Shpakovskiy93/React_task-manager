import React, { useState } from 'react';
import {ChangeThemeButtonComponent} from '../ChangeThemeButtonComponent';
import styled from 'styled-components';
import theme from '../../theme';
import { ThemeContext } from '../../store/ThemeContext';
import { DeviceComponent } from '../DeviceComponent';
import { UserContextProvider } from '../../store/UserContext';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${props => props.containerBgColor};
  background: ${props => props.containerBgGradientColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.mainTextColor};
  transition: all 1s;
`;

const App = () => {
  
  const [isDarkMode, setDarkMode] = useState(false);

  const selectedTheme = isDarkMode ? theme.dark : theme.light;

  return (
    <ThemeContext.Provider
      value={{
        theme: selectedTheme,
        isDarkMode,
        toggleTheme: setDarkMode,
      }}
    >
      <UserContextProvider>
        <Container
          containerBgColor={selectedTheme.containerBgColor}
          containerBgGradientColor={selectedTheme.containerBgGradientColor}
          mainTextColor={selectedTheme.mainTextColor}
        >
          <ChangeThemeButtonComponent />
          <DeviceComponent />
        </Container>
      </UserContextProvider>
    </ThemeContext.Provider>
  );
}

export default App;
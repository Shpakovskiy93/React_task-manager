import React, { useState } from 'react';
import {ChangeThemeButtonComponent} from '../ChangeThemeButtonComponent';
import styled from 'styled-components';
import theme from '../../theme';
import { ThemeContext } from '../../theme/ThemeContext';
import { TaskPageComponent } from '../../pages/TaskPageComponent';

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

const DeviceWrapper = styled.div`
  box-sizing: border-box;
  height: calc(100vh - 10px);
  width: 375px;
  overflow: hidden;
  border-radius: 40px;
  box-shadow: 2px 12px 20px 2px ${props => props.tabWrapperShadowColor};
  border: 4px solid ${props => props.deviceBorderColor};

  .device {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    background: ${props => props.deviceBgColor};
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    position: relative;
  }
`;

const App = () => {
  
  const [isDarkMode, setDarkMode] = useState(false);

  const selectedTheme = isDarkMode ? theme.dark : theme.light;

  return (
    <ThemeContext.Provider value={{
      theme: selectedTheme,
      isDarkMode,
      toggleTheme: setDarkMode
    }}>
      <Container
        containerBgColor={selectedTheme.containerBgColor}
        containerBgGradientColor={selectedTheme.containerBgGradientColor}
        mainTextColor={selectedTheme.mainTextColor}
      >
        <ChangeThemeButtonComponent />
        <DeviceWrapper
          deviceBorderColor={selectedTheme.deviceBorderColor}
          deviceBgColor={selectedTheme.deviceBgColor}
          tabWrapperShadowColor={selectedTheme.tabWrapperShadowColor}
        >
          <div className="device">
            <TaskPageComponent />
          </div>
        </DeviceWrapper>
      </Container>
    </ThemeContext.Provider>
  );
}

export default App;
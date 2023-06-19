import React, { useContext } from 'react';
import styled from 'styled-components';
import { LoginPageComponent } from '../../pages/LoginPageComponent';
import { TaskPageComponent } from '../../pages/TaskPageComponent';
import { ThemeContext } from '../../store/ThemeContext';
import { useUserContext } from '../../store/UserContext';

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

const DeviceComponent = () => {
   const {theme} = useContext(ThemeContext);
    const {isLogin} = useUserContext();
    return (
      <DeviceWrapper
        deviceBorderColor={theme.deviceBorderColor}
        deviceBgColor={theme.deviceBgColor}
        tabWrapperShadowColor={theme.tabWrapperShadowColor}
      >
        <div className="device">
            {
                isLogin ? (
                    <TaskPageComponent />
                ) : (
                    <LoginPageComponent />
                )
            }         
        </div>
      </DeviceWrapper>
    );
};

export {DeviceComponent};
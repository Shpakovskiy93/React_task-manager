import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../store/ThemeContext';

const InputWrapper = styled.input`
  border: unset;
  border-bottom: 1px solid ${(props) => props.inputUnderLineColor};
  height: 20px;
  background-color: ${(props) => props.addTaskFormWrapperBgColor};
  color: ${(props) => props.mainTextColor};
  &:focus {
    outline: none;
  }
  width: 100%;
`;

const InputComponent = ({type,placeholder,name}) => {
    const {theme} = useContext(ThemeContext);
    return (
      <InputWrapper
        type={type}
        placeholder={placeholder}
        name={name}
        inputUnderLineColor={theme.inputUnderLineColor}
        addTaskFormWrapperBgColor={theme.addTaskFormWrapperBgColor}
        mainTextColor={theme.mainTextColor}
      />
    );
};

export {InputComponent};
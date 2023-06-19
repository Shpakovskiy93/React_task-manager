import React from 'react';
import styled from 'styled-components';
import { ButtonComponent } from '../../components/ButtonComponent';
import { InputComponent } from '../../components/InputComponent';

const ContentWrapper = styled.div`
  padding: 0 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const H1Wrapper = styled.h1`
  margin: 24px 0;
  text-align: center;
`;

const InputBlockWrapper = styled.div`
  margin: 8px 0;
`;

const LoginPageComponent = () => {
    return (
      <ContentWrapper>
        <H1Wrapper>Login to Task Manager</H1Wrapper>
        <InputBlockWrapper>
          <InputComponent
            type="text"
            placeholder="Enter your email"
            name="email"
          />
        </InputBlockWrapper>
        <InputBlockWrapper>
          <InputComponent
            type="password"
            placeholder="Enter your password"
            name="password"
          />
        </InputBlockWrapper>
        <ButtonComponent>Login</ButtonComponent>
      </ContentWrapper>
    );
};
export {LoginPageComponent};
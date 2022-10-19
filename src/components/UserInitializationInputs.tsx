import { ReactElement } from 'react';
import styled from 'styled-components';
import { Button } from './common/Button';
import { CenteredCol } from './common/Col';
import { FormInput } from './common/FormInput';

const Styled = {
  UserInitializationModalContainer: styled(CenteredCol)`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--primary-color-4);
    justify-content: center;
    width: 350px;
    height: 250px;
    border-radius: 20px;
  `,
  Header: styled.h3`
    font-size: 36px;
  `,
};

export const UserInitializationInputs = (): ReactElement => {
  return (
    <Styled.UserInitializationModalContainer gap={40}>
      <Styled.Header>Register</Styled.Header>
      <FormInput labelText={'Username:'} inputType={'text'} />
      <Button
        onClick={() => {
          // create user "anonymously". Add user with the given username into the DB, the DB should then return the primary key (some random uid)
          // back to the client through an api. This random uid will be stored in persisted storage and will be used to fetch the user data.
          // The sign in will keep track of the anonymous user until the user clears their local storage.
        }}
      >
        Continue as Guest
      </Button>
    </Styled.UserInitializationModalContainer>
  );
};

import { ReactElement } from 'react';
import styled from 'styled-components';
import { FormInputProps } from '../../types/components/common/FormInput.type';
import { Dimensions } from '../../types/Dimensions.type';
import { Col } from './Col';
import { DimensionStyles } from './StyledDimensions';

const Styled = {
  Input: styled.input`
    background-color: inherit;
    border: 1px solid black;

    &:focus {
      border: 1px solid black;
    }
  `,
  FormInputContainer: styled(Col)<Dimensions>`
    ${DimensionStyles};
  `,
};

export const FormInput = ({
  labelText,
  inputType,
  ...props
}: FormInputProps): ReactElement => {
  return (
    <Styled.FormInputContainer gap={10} {...props}>
      <p>{labelText}</p>
      <Styled.Input type={inputType} />
    </Styled.FormInputContainer>
  );
};

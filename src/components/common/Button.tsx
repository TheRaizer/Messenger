import { ReactElement } from 'react';
import styled from 'styled-components';
import { ButtonProps } from '../../types/components/common/Button.type';
import { Dimensions } from '../../types/Dimensions.type';
import { DimensionStyles } from './StyledDimensions';

const Styled = {
  Button: styled.button<Pick<ButtonProps, 'fontSize'> & Dimensions>`
    ${DimensionStyles}
    border: 1px solid black;
    background-color: inherit;
    padding: 0.2em;
    font-size: ${({ fontSize }) => fontSize};

    &:hover {
      filter: brightness(0.7);
    }
    &:active {
      filter: brightness(0.4);
    }
  `,
};

export const Button = ({
  children,
  fontSize,
  ...props
}: ButtonProps): ReactElement => {
  return (
    <Styled.Button fontSize={fontSize} {...props}>
      {children}
    </Styled.Button>
  );
};

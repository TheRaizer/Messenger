import styled, { css } from 'styled-components';
import { Dimensions } from '../../types/Dimensions.type';

export const DimensionStyles = css<Dimensions>`
  width: ${({ width }) => width || 'unset'};
  height: ${({ height }) => height || 'unset'};
`;

export const StyledDimensions = styled.div<Dimensions>`
  ${DimensionStyles}
`;

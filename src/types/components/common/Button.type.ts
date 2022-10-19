import { Dimensions } from './../../Dimensions.type';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  fontSize?: number;
} & Dimensions &
  Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>;

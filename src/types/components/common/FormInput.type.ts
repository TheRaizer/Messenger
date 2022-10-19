import { Dimensions } from '../../Dimensions.type';

export type FormInputProps = {
  labelText: string;
  inputType?: React.HTMLInputTypeAttribute;
} & Dimensions;

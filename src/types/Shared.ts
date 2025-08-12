// ************ Form/Input Fields ***********

import { InputHTMLAttributes, ReactNode } from "react";

export interface SelectInputProps {
  label?: string;
  name: string;
  required?: boolean;
  options: { value: string | number; label: string; disabled?: boolean }[];
  placeholder?: string;
  [key: string]: any;
}

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  children?: ReactNode;
  required?: boolean;
  inputGroupIcon?: ReactNode;
  validate?: (value: string) => string | undefined;
}

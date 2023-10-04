import { InputHTMLAttributes, ClassAttributes } from "react";
import { Field, ErrorMessage, getIn, useFormikContext } from "formik";
import {
  labelStyles,
  fieldStyles,
  fieldErrorStyles,
} from "../../styles/styles";
import { maxWidthClass } from "../../styles/optionClasses";

export interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
  maxWidth?: "xl" | "lg" | "md" | "sm";
  type: "text" | "email" | "number" | "password";
  required?: boolean;
}

export const Input = ({
  label,
  type,
  name,
  placeholder,
  maxWidth = "xl",
  ...props
}: InputProps &
  InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement>) => {
  const { errors } = useFormikContext();
  const fieldErrors = getIn(errors, name);

  return (
    <div className={`flex flex-col w-full gap-2 ${maxWidthClass[maxWidth]}`}>
      <label htmlFor={name} className={labelStyles.label}>
        {label}
      </label>
      <Field
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`${
          fieldErrors ? fieldStyles.errorInput : fieldStyles.input
        }`}
      />
      <ErrorMessage
        name={name}
        component="div"
        className={` ${fieldErrorStyles.input}`}
      />
    </div>
  );
};

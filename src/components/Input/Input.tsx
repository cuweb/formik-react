import { Field, ErrorMessage, getIn, useFormikContext } from "formik";
import {
  labelStyles,
  fieldStyles,
  fieldErrorStyles,
} from "../../styles/styles";
import { InputHTMLAttributes, ClassAttributes } from "react";

export interface InputProps {
  label?: string;
  type: "text" | "email" | "number" | "password";
  name: string;
  required?: boolean;
}

export const Input = ({
  label,
  type,
  name,
  required,
  ...props
}: InputProps &
  InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement>) => {
  const { errors } = useFormikContext();
  const fieldErrors = getIn(errors, name);

  return (
    <div>
      {label && (
        <label htmlFor={name} className={labelStyles.label}>
          {label} {required && <span className="text-red-700">*</span>}
        </label>
      )}
      <Field
        {...props}
        type={type}
        id={name}
        name={name}
        className={` ${
          fieldErrors ? fieldStyles.errorInput : fieldStyles.input
        } `}
      />
      <ErrorMessage
        name={name}
        component="div"
        className={` ${fieldErrorStyles.input}`}
      />
    </div>
  );
};

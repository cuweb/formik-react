import { Field, ErrorMessage } from "formik";
import { maxWidthClass, colSpanClass } from "../../styles/optionClasses";
import {
  labelStyles,
  fieldStyles,
  fieldErrorStyles,
} from "../../styles/styles";

interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
  maxWidth?: "xl" | "lg" | "md" | "sm";
  colSpan?: "1" | "2" | "3" | "4";
  type: "text" | "email" | "number" | "password";
  required?: boolean;
}

export const Input = ({
  label,
  type,
  name,
  placeholder,
  maxWidth = "xl",
  colSpan = "1",
  ...props
}: InputProps) => {
  return (
    <div
      className={`flex flex-col w-full gap-2 ${maxWidthClass[maxWidth]} ${colSpanClass[colSpan]}`}
    >
      <label htmlFor={name} className={labelStyles.label}>
        {label}
      </label>
      <Field
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={fieldStyles.input}
        {...props}
      />
      <ErrorMessage
        name={name}
        component="div"
        className={` ${fieldErrorStyles.input}`}
      />
    </div>
  );
};

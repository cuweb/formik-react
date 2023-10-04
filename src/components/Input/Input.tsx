import { Field, ErrorMessage } from "formik";
import { labelStyles, fieldStyles } from "../../styles/styles";
import { maxWidthClass } from "../../styles/optionClasses";

export interface InputProps {
  id: string;
  label: string;
  placeholder?: string;
  maxWidth?: "xl" | "lg" | "md" | "sm";
  type: "text" | "email" | "number" | "password";
}

export const Input = ({
  id,
  label,
  type,
  placeholder,
  maxWidth = "xl",
}: InputProps) => {
  return (
    <div className={`flex flex-col w-full gap-2 ${maxWidthClass[maxWidth]}`}>
      <label htmlFor={id} className={labelStyles.label}>
        {label}
      </label>
      <Field
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className={fieldStyles.input}
      />
      <ErrorMessage name={id} component="div" />
    </div>
  );
};

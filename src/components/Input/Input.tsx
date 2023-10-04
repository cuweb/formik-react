import { Field, ErrorMessage } from "formik";
import { labelStyles, fieldStyles } from "../../styles/styles";

export interface InputProps {
  id: string;
  label: string;
  placeholder?: string;
  type: "text" | "email" | "number" | "password";
}

export const Input = ({ id, label, type, placeholder }: InputProps) => {
  return (
    <div>
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

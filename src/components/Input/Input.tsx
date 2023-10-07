import { Field, ErrorMessage } from "formik";
import { maxWidthClass, colSpanClass } from "../../styles/optionClasses";
import { sharedInputProps } from "../../interface/sharedProps";
import {
  labelStyles,
  fieldStyles,
  fieldErrorStyles,
} from "../../styles/styles";

interface InputProps extends sharedInputProps {
  type: "text" | "email" | "number" | "password";
}

export const Input = ({
  label,
  type,
  name,
  placeholder,
  maxWidth = "xl",
  colSpan = "1",
  required,
}: InputProps) => {
  return (
    <div
      className={`flex flex-col w-full gap-2 ${maxWidthClass[maxWidth]} ${colSpanClass[colSpan]}`}
    >
      <label htmlFor={name} className={labelStyles.label}>
        {label} {required && <span className="text-cu-red">*</span>}
      </label>
      <Field
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={fieldStyles.input}
      />
      <ErrorMessage
        name={name}
        component="div"
        className={` ${fieldErrorStyles.input}`}
      />
    </div>
  );
};

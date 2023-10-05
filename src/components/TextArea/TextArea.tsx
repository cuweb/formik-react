import { Field, ErrorMessage } from "formik";
import {
  fieldErrorStyles,
  fieldStyles,
  labelStyles,
} from "../../styles/styles";
import { maxWidthClass } from "../../styles/optionClasses";

interface TextAreaProps {
  name: string;
  label?: string;
  maxWidth?: "xl" | "lg" | "md" | "sm";
  required?: boolean;
  rows?: 5 | 10;
}

export const TextArea = ({
  label,
  name,
  maxWidth = "xl",
  required,
  rows = 10,
  ...props
}: TextAreaProps) => {
  return (
    <div className={`flex flex-col w-full gap-2 ${maxWidthClass[maxWidth]}`}>
      <label htmlFor={name} className={labelStyles.label}>
        {label} {required && <span className="text-red-700">*</span>}
      </label>
      <Field
        {...props}
        as="textarea"
        id={name}
        name={name}
        rows={rows}
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

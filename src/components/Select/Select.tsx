import { Field, ErrorMessage } from "formik";
import {
  fieldErrorStyles,
  fieldStyles,
  labelStyles,
} from "../../styles/styles";
import { maxWidthClass } from "../../styles/optionClasses";

interface SelectProps {
  name: string;
  label: string;
  maxWidth?: "xl" | "lg" | "md" | "sm";
  required?: boolean;
  options: {
    value: string;
    label: string;
  }[];
}

export const Select = ({
  label,
  name,
  maxWidth = "xl",
  required,
  options,
  ...props
}: SelectProps) => {
  return (
    <div className={`flex flex-col w-full gap-2 ${maxWidthClass[maxWidth]}`}>
      <label htmlFor={name} className={labelStyles.label}>
        {label} {required && <span className="text-red-700">*</span>}
      </label>
      <Field
        as="select"
        id={name}
        name={name}
        className={`${fieldStyles.select}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className={` ${fieldErrorStyles.input}`}
      />
    </div>
  );
};

import { Field, ErrorMessage } from "formik";
import { SelectHTMLAttributes, ClassAttributes } from "react";
import {
  fieldErrorStyles,
  fieldStyles,
  labelStyles,
} from "../../styles/styles";

export interface SelectProps {
  name: string;
  label: string;
  required?: boolean;
  options: {
    value: string;
    label: string;
  }[];
}

export const Select = ({
  label,
  name,
  required,
  options,
  ...props
}: SelectProps &
  SelectHTMLAttributes<HTMLSelectElement> &
  ClassAttributes<HTMLSelectElement>) => {
  return (
    <div>
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

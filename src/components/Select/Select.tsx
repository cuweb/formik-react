import { Field } from "formik";

export interface SelectProps {
  id: string;
  label: string;
  options: { value: string; label: string }[];
}

export const Select = ({ id, label, options }: SelectProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Field as="select" id={id} name={id}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
    </>
  );
};

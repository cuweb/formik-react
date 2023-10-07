import { Field, ErrorMessage } from "formik";
import { maxWidthClass, colSpanClass } from "../../styles/optionClasses";
import { sharedInputProps } from "../../interface/sharedProps";
import {
  fieldErrorStyles,
  fieldStyles,
  labelStyles,
} from "../../styles/styles";

interface TextAreaProps extends sharedInputProps {
  rows?: 5 | 10;
}

export const TextArea = ({
  label,
  name,
  maxWidth = "xl",
  colSpan = "1",
  required,
  rows = 10,
}: TextAreaProps) => {
  return (
    <div
      className={`flex flex-col w-full gap-2 ${maxWidthClass[maxWidth]} ${colSpanClass[colSpan]}`}
    >
      <label htmlFor={name} className={labelStyles.label}>
        {label} {required && <span className="text-cu-red">*</span>}
      </label>
      <Field
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

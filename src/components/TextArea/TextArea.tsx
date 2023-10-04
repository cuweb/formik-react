import { Field, ErrorMessage, getIn, useFormikContext } from "formik";
import {
  fieldErrorStyles,
  fieldStyles,
  labelStyles,
} from "../../styles/styles";
import { InputHTMLAttributes, ClassAttributes } from "react";

interface TextAreaProps {
  name: string;
  label?: string;
  required?: boolean;
  rows?: number;
}

const TextArea = ({
  label,
  name,
  required,
  rows,
  ...props
}: TextAreaProps &
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

      <div className="mt-2">
        <Field
          {...props}
          as="textarea"
          id={name}
          name={name}
          rows={rows}
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
    </div>
  );
};

export default TextArea;

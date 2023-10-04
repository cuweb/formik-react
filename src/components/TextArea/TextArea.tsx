import { Field, ErrorMessage } from "formik";

export interface TextAreaProps {
  id: string;
  label: string;
}

export const TextArea = ({ id, label }: TextAreaProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Field as="textarea" id={id} name={id} />
    </>
  );
};

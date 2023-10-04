import { Field, ErrorMessage } from "formik";

export interface InputProps {
  id: string;
  label: string;
  placeholder?: string;
  type: "text" | "email" | "number" | "password";
}

export const Input = ({ id, label, type, placeholder }: InputProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Field type={type} id={id} name={id} placeholder={placeholder} />
      <ErrorMessage name={id} component="div" />
    </>
  );
};

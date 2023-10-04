import { Field } from "formik";

export interface CheckRadioProps {
  value: string;
  type: "checkbox" | "radio";
}

export const CheckRadio = ({ type, value }: CheckRadioProps) => {
  const name = type === "checkbox" ? "checkboxInput" : "radioInput";

  return (
    <>
      <label>
        <Field type={type} name={name} value={value} />
        {value}
      </label>
    </>
  );
};

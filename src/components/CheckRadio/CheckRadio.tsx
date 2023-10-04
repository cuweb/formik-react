import { Field } from "formik";

export interface CheckRadioProps {
  value: string;
  type: "checkbox" | "radio";
}

export const CheckRadio = ({ type, value }: CheckRadioProps) => {
  return (
    <>
      <label>
        <Field
          type={type}
          name={type === "checkbox" ? "checked" : "picked"}
          value={value}
        />
        {value}
      </label>
    </>
  );
};

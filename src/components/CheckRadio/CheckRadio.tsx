import { Field } from "formik";
import { sharedInputProps } from "../../interface/sharedProps";
import { stringToDashed } from "../../utils/functions";

interface CheckRadioProps extends sharedInputProps {
  type: "checkbox" | "radio";
}

export const CheckRadio = ({
  label,
  type,
  name,
  required,
}: CheckRadioProps) => {
  return (
    <>
      <label className="flex items-center gap-2">
        <Field type={type} name={name} value={stringToDashed(label)} />
        {label} {required && <span className="text-cu-red">*</span>}
      </label>
    </>
  );
};

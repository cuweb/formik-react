import { Formik, Form } from "formik";
import * as Yup from "yup";

import InputBlocks from "./blocks/InputBlocks";
import TextAreaBlocks from "./blocks/TextAreaBlocks";
import CheckboxBlocks from "./blocks/CheckboxBlocks";
import RadioBlocks from "./blocks/RadioBlocks";
import SelectBlocks from "./blocks/SelectBlocks";

import { FieldWrapper } from "./components/FieldWrapper/FieldWrapper";
import { Select } from "./components/Select/Select";
import { selectData } from "./data/data";

const MainForm = () => {
  const formikProps = {
    initialValues: { "input-test-1": "", "textarea-test-1": "" },
    validationSchema: Yup.object({
      "input-test-1": Yup.string().required("This is a required input field"),
      "textarea-test-1": Yup.string().required(
        "This textarea field is required"
      ),
    }),
    onSubmit: (values: { "input-test-1": string }) => {
      console.log(values);
    },
  };

  return (
    <Formik {...formikProps}>
      {(formik) => (
        <Form>
          <div className="flex flex-col gap-10 p-12 mx-auto max-w-7xl">
            {/* <InputBlocks /> */}
            {/* <TextAreaBlocks /> */}
            {/* <CheckboxBlocks /> */}
            {/* <RadioBlocks /> */}
            {/* <SelectBlocks /> */}

            <FieldWrapper>
              <Select
                name="selectInput1a"
                label="Select Example"
                options={selectData}
                // onChange={(event) => {
                //   setFieldValue("selectInput", event.target.value);
                //   if (event.target.value === "option1") {
                //     setFieldValue("autoSelect", "option5");
                //   }
                // }}
              />
            </FieldWrapper>

            <button
              type="submit"
              aria-label="Submit"
              className="inline-flex items-center justify-center gap-1 px-3 py-2 text-sm font-medium text-white rounded-md cu-button not-prose md:px-6 md:py-3 md:text-base hover:text-white focus:outline-none bg-cu-red hover:bg-cu-black-600"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MainForm;

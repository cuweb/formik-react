import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FieldWrapper } from "./components/FieldWrapper/FieldWrapper";
import { Input } from "./components/Input/Input";
import { TextArea } from "./components/TextArea/TextArea";

import InputBlocks from "./blocks/InputBlocks";
import TextAreaBlocks from "./blocks/TextAreaBlocks";

const MainForm = () => {
  const formikProps = {
    initialValues: { "input-field-test": "", "textarea-test": "" },
    validationSchema: Yup.object({
      "input-field-test": Yup.string().required("Sorry this is required"),
      "textarea-test": Yup.string().required("Sorry this is required"),
    }),
    onSubmit: (values: { "input-field-test": string }) => {
      console.log(values);
    },
  };

  return (
    <Formik {...formikProps}>
      {(formik) => (
        <Form>
          <div className="flex flex-col gap-10 p-12 mx-auto max-w-7xl">
            <FieldWrapper hasColumns>
              <Input
                label="Input Field"
                name="input-field-test"
                type="text"
                placeholder="Testing an input field"
                required
              />
            </FieldWrapper>

            <FieldWrapper>
              <TextArea
                label="TextArea Example"
                name="textarea-test"
                placeholder="Text area input"
                required
              />
            </FieldWrapper>

            {/* Testing a variety of input field configurations */}
            {/* <InputBlocks />
            <TextAreaBlocks /> */}

            <div>
              <button
                type="submit"
                aria-label="Submit"
                className="inline-flex items-center justify-center gap-1 px-3 py-2 text-sm font-medium text-white rounded-md cu-button not-prose md:px-6 md:py-3 md:text-base hover:text-white focus:outline-none bg-cu-red hover:bg-cu-black-600"
              >
                Submit
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MainForm;

import React from "react";
import { Formik, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { FieldWrapper } from "./components/FieldWrapper/FieldWrapper";
import { Input } from "./components/Input/Input";
import { FieldGroup } from "./components/FieldGroup/FieldGroup";
import { CheckRadio } from "./components/CheckRadio/CheckRadio";
import { Select } from "./components/Select/Select";
import { checkRadioData, selectData } from "./data/data";
import TextArea from "./components/TextArea/TextArea";

type FormValuesType = {
  firstName: string;
  lastName: string;
  emailInput: string;
  passwordInput: string;
  numberInput: number;
  checkboxInput: boolean;
  radioInput: string;
  selectInput: string;
  autoSelect: string;
  textArea: string;
};

const MyForm = () => {
  const initialValues: FormValuesType = {
    firstName: "ish",
    lastName: "",
    emailInput: "test.test@cmail.com",
    passwordInput: "testing",
    numberInput: 0,
    checkboxInput: false,
    radioInput: "Lorem ipsum",
    selectInput: "",
    autoSelect: "",
    textArea: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("first Name is required "),
    lastName: Yup.string(),
    emailInput: Yup.string().email("Invalid email address"),
    passwordInput: Yup.string().min(
      6,
      "Password must be at least 6 characters"
    ),
    numberInput: Yup.number(),
    checkboxInput: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
    radioInput: Yup.string(),
    selectInput: Yup.string(),
    autoSelect: Yup.string(),
    textArea: Yup.string().required("The Text Area is required "),
  });

  const handleSubmit = (
    values: FormValuesType,
    { setSubmitting, resetForm }: FormikHelpers<FormValuesType>
  ) => {
    // Handle form submission logic here
    console.log("Form data submitted:", values);
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
    // resetForm();
  };

  return (
    <div className="p-12 mx-auto max-w-7xl">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, setFieldValue, resetForm }) => (
          <Form className="flex flex-col gap-10">
            {/* Text Inputs */}
            <FieldWrapper>
              <Input
                type="text"
                name="testingText1"
                label="Input Field"
                maxWidth="xl"
                placeholder="Input at extra large width"
              />
              <Input
                type="text"
                name="testingText2"
                label="Input Field"
                maxWidth="lg"
                placeholder="Input at large width width"
              />
              <Input
                type="text"
                name="testingText3"
                label="Input Field"
                maxWidth="md"
                placeholder="Input at medium width width"
              />
              <Input
                type="text"
                name="testingText4"
                label="Input Field"
                maxWidth="sm"
                placeholder="Input at small width width"
              />
            </FieldWrapper>

            {/* Multiple Text Input */}
            <FieldWrapper hasColumns>
              <Input
                type="text"
                name="testingText5"
                label="Input Field"
                placeholder="Two column layout"
              />
              <Input
                type="text"
                name="testingText6"
                label="Input Field"
                placeholder="Two column layout"
              />
            </FieldWrapper>

            {/* Multiple Text Input */}
            <FieldWrapper hasColumns>
              <Input
                type="text"
                name="testingText5"
                label="Input Field"
                placeholder="Two column layout"
              />
              <Input
                type="text"
                name="testingText6"
                label="Input Field"
                placeholder="Two column layout"
              />
              <Input
                type="text"
                name="testingText6"
                label="Input Field"
                placeholder="Two column layout"
              />
            </FieldWrapper>

            {/* Multiple Text Input */}
            <FieldWrapper hasColumns>
              <Input
                type="text"
                name="testingText5"
                label="Input Field"
                placeholder="Two column layout"
              />
              <Input
                type="text"
                name="testingText6"
                label="Input Field"
                placeholder="Two column layout"
              />
              <Input
                type="text"
                name="testingText6"
                label="Input Field"
                placeholder="Two column layout"
              />
              <Input
                type="text"
                name="testingText6"
                label="Input Field"
                placeholder="Two column layout"
              />
            </FieldWrapper>

            {/* Email Input */}
            <FieldWrapper>
              <Input
                type="email"
                label="Email Component Example"
                name="emailInput"
                placeholder="Email"
              />
            </FieldWrapper>

            {/* Password Input */}
            <FieldWrapper>
              <Input
                type="password"
                label="Password Component Example"
                name="passwordInput"
                placeholder="******"
              />
            </FieldWrapper>

            {/* Number Input */}
            <FieldWrapper hasColumns>
              <Input
                type="number"
                name="numberField"
                label="Number Component Example"
              />
              <Input
                type="number"
                name="numberField"
                label="Number Component Example"
              />
            </FieldWrapper>

            {/* Text Area */}
            <FieldWrapper>
              <TextArea
                label="TextArea Example"
                name="textArea"
                placeholder="text area input "
                required
              />
            </FieldWrapper>

            {/* Checkbox */}
            <FieldWrapper>
              <CheckRadio type="checkbox" value="Testing checkbox" />
              <ErrorMessage name="checkboxInput" component="div" />
            </FieldWrapper>

            {/* Checkboxes */}
            <FieldWrapper>
              <FieldGroup id="checkbox-group-example" legend="Checkbox Legend">
                {checkRadioData.map((item, index) => (
                  <CheckRadio key={index} type="checkbox" value={item.value} />
                ))}
                <ErrorMessage name="checkboxInput" component="div" />
              </FieldGroup>
            </FieldWrapper>

            {/* Radio Buttons */}
            <FieldWrapper>
              <FieldGroup id="radio-group-example" legend="Radio Legend">
                {checkRadioData.map((item, index) => (
                  <CheckRadio key={index} type="radio" value={item.value} />
                ))}
                <ErrorMessage name="radioInput" component="div" />
              </FieldGroup>
            </FieldWrapper>

            {/* Combo! */}
            <FieldWrapper hasColumns>
              <FieldGroup id="checkbox-group-example" legend="Checkbox Legend">
                {checkRadioData.map((item, index) => (
                  <CheckRadio key={index} type="checkbox" value={item.value} />
                ))}
                <ErrorMessage name="checkboxInput" component="div" />
              </FieldGroup>
              <FieldGroup id="radio-group-example" legend="Radio Legend">
                {checkRadioData.map((item, index) => (
                  <CheckRadio key={index} type="radio" value={item.value} />
                ))}
                <ErrorMessage name="radioInput" component="div" />
              </FieldGroup>
            </FieldWrapper>

            {/* Select */}
            <FieldWrapper hasColumns>
              <Select
                name="selectInput"
                label="Select Example"
                options={selectData}
                onChange={(event) => {
                  setFieldValue("selectInput", event.target.value);

                  if (event.target.value === "option1") {
                    setFieldValue("autoSelect", "option5");
                  }
                }}
              />
              <Select
                name="autoSelect"
                label="Select Example"
                options={selectData}
              />
            </FieldWrapper>

            {/* Submit Button */}
            <FieldWrapper hasColumns>
              <button
                type="submit"
                className="px-4 py-2 mt-3 font-bold text-white bg-red-500 rounded hover:bg-red-700"
              >
                {isSubmitting ? "Submiting..." : "Submit"}
              </button>
              {/* <button type="reset" onClick={resetForm}>
                Clear Form{" "}
              </button> */}
            </FieldWrapper>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;

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
    <div className="max-w-5xl mx-auto my-12">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, setFieldValue, resetForm }) => (
          <Form className="flex flex-col gap-10">
            {/* Multiple Text Input */}
            <FieldWrapper cols={2}>
              <Input type="text" label="First Name" name="firstName" required />
              <Input
                type="text"
                id="testingText"
                label="Last Name"
                name="lastName"
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
            <FieldWrapper>
              <Input
                type="number"
                label="Number Component Example"
                name="numberInput"
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
            <FieldWrapper cols={2}>
              <FieldGroup id="checkbox-group-example" legend="Checkbox Legend">
                {checkRadioData.map((item, index) => (
                  <CheckRadio key={index} type="checkbox" value={item.value} />
                ))}
                <ErrorMessage name="checkboxInput" component="div" />
              </FieldGroup>
              {/* <FieldGroup id="radio-group-example" legend="Radio Legend">
                {checkRadioData.map((item, index) => (
                  <CheckRadio key={index} type="radio" value={item.value} />
                ))}
                <ErrorMessage name="radioInput" component="div" />
              </FieldGroup> */}
            </FieldWrapper>

            {/* Select */}
            <FieldWrapper cols={2}>
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
            <FieldWrapper cols={2}>
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-3"
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

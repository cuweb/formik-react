import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { FieldWrapper } from "./components/FieldWrapper/FieldWrapper";
import { Input } from "./components/Input/Input";
import { FieldGroup } from "./components/FieldGroup/FieldGroup";
import { CheckRadio } from "./components/CheckRadio/CheckRadio";
import { checkRadioData } from "./data/data";

type FormValuesType = {
  textInput: string;
  emailInput: string;
  passwordInput: string;
  numberInput: number;
  checkboxInput: boolean;
  radioInput: string;
  selectInput: string;
  textArea: string;
};

const MyForm = () => {
  const initialValues: FormValuesType = {
    textInput: "",
    emailInput: "",
    passwordInput: "",
    numberInput: 0,
    checkboxInput: false,
    radioInput: "option1",
    selectInput: "",
    textArea: "",
  };

  const validationSchema = Yup.object({
    textInput: Yup.string().required("Required field"),
    emailInput: Yup.string()
      .email("Invalid email address")
      .required("Required field"),
    passwordInput: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required field"),
    numberInput: Yup.number().required("Required field"),
    checkboxInput: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
    radioInput: Yup.string().required("Required field"),
    selectInput: Yup.string().required("Required field"),
    textArea: Yup.string().required("Required field"),
  });

  const handleSubmit = (
    values: FormValuesType,
    { resetForm }: FormikHelpers<FormValuesType>
  ) => {
    // Handle form submission logic here
    console.log("Form data submitted:", values);
    resetForm();
  };

  return (
    <div className="max-w-5xl mx-auto my-12">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-10">
          {/* Text Input */}
          <FieldWrapper>
            <Input
              type="text"
              id="testingText"
              label="Text Component Example"
              placeholder="Text Component Example"
            />
          </FieldWrapper>

          {/* Multiple Text Input */}
          <FieldWrapper cols={2}>
            <Input
              type="text"
              id="testingText"
              label="Text Component Example"
            />
            <Input
              type="text"
              id="testingText"
              label="Text Component Example"
            />
          </FieldWrapper>

          {/* Email Input */}
          <FieldWrapper>
            <Input
              type="email"
              id="emailField"
              label="Email Component Example"
            />
          </FieldWrapper>

          {/* Password Input */}
          <FieldWrapper>
            <Input
              type="password"
              id="passwordField"
              label="Password Component Example"
            />
          </FieldWrapper>

          {/* Number Input */}
          <FieldWrapper cols={2}>
            <Input
              type="number"
              id="numberField"
              label="Number Component Example"
            />
            <Input
              type="number"
              id="numberField"
              label="Number Component Example"
            />
          </FieldWrapper>

          {/* Checkbox */}
          <FieldWrapper>
            <CheckRadio type="checkbox" value="Testing checkbox" />
            <ErrorMessage name="checkboxInput" component="div" />
          </FieldWrapper>

          {/* Checkboxes */}
          {/* <FieldWrapper>
            <FieldGroup legend="Checkbox Legend">
              {checkRadioData.map((value, index) => (
                <CheckRadio key={index} type="checkbox" value={value} />
              ))}
              <ErrorMessage name="checkboxInput" component="div" />
            </FieldGroup>
          </FieldWrapper> */}

          {/* Radio Buttons */}
          <FieldWrapper>
            <FieldGroup>
              <label>
                <Field type="radio" name="radioInput" value="option1" />
                Option 1
              </label>
              <label>
                <Field type="radio" name="radioInput" value="option2" />
                Option 2
              </label>
              <ErrorMessage name="radioInput" component="div" />
            </FieldGroup>
          </FieldWrapper>

          {/* Select */}
          <FieldWrapper>
            <label htmlFor="selectInput">Select Input</label>
            <Field as="select" id="selectInput" name="selectInput">
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </Field>
            <ErrorMessage name="selectInput" component="div" />
          </FieldWrapper>

          {/* Text Area */}
          <FieldWrapper>
            <label htmlFor="textArea">Text Area</label>
            <Field as="textarea" id="textArea" name="textArea" />
            <ErrorMessage name="textArea" component="div" />
          </FieldWrapper>

          {/* Submit Button */}
          <FieldWrapper>
            <button type="submit">Submit</button>
          </FieldWrapper>
        </Form>
      </Formik>
    </div>
  );
};

export default MyForm;

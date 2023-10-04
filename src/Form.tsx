import React from "react";
import { Formik, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { FieldWrapper } from "./components/FieldWrapper/FieldWrapper";
import { Input } from "./components/Input/Input";
import { FieldGroup } from "./components/FieldGroup/FieldGroup";
import { CheckRadio } from "./components/CheckRadio/CheckRadio";
import { Select } from "./components/Select/Select";
import { checkRadioData, selectData } from "./data/data";
import { TextArea } from "./components/TextArea/TextArea";

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
    radioInput: "Lorem ipsum",
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

          {/* Text Area */}
          <FieldWrapper>
            <TextArea id="textAreaExample" label="TextArea Example" />
            <ErrorMessage name="textArea" component="div" />
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
            <FieldGroup id="radio-group-example" legend="Radio Legend">
              {checkRadioData.map((item, index) => (
                <CheckRadio key={index} type="radio" value={item.value} />
              ))}
              <ErrorMessage name="radioInput" component="div" />
            </FieldGroup>
          </FieldWrapper>

          {/* Select */}
          <FieldWrapper>
            <Select
              id="selectExample"
              label="Select Example"
              options={selectData}
            />
            <ErrorMessage name="selectInput" component="div" />
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

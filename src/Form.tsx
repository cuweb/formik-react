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
    <div className="p-12 mx-auto max-w-7xl">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-10">
          {/* Text Inputs */}
          <FieldWrapper>
            <Input
              type="text"
              id="testingText1"
              label="Input Field"
              maxWidth="xl"
              placeholder="Input at extra large width"
            />
            <Input
              type="text"
              id="testingText2"
              label="Input Field"
              maxWidth="lg"
              placeholder="Input at large width width"
            />
            <Input
              type="text"
              id="testingText3"
              label="Input Field"
              maxWidth="md"
              placeholder="Input at medium width width"
            />
            <Input
              type="text"
              id="testingText4"
              label="Input Field"
              maxWidth="sm"
              placeholder="Input at small width width"
            />
          </FieldWrapper>

          {/* Multiple Text Input */}
          <FieldWrapper hasColumns>
            <Input
              type="text"
              id="testingText5"
              label="Input Field"
              placeholder="Two column layout"
            />
            <Input
              type="text"
              id="testingText6"
              label="Input Field"
              placeholder="Two column layout"
            />
          </FieldWrapper>

          {/* Multiple Text Input */}
          <FieldWrapper hasColumns>
            <Input
              type="text"
              id="testingText5"
              label="Input Field"
              placeholder="Two column layout"
            />
            <Input
              type="text"
              id="testingText6"
              label="Input Field"
              placeholder="Two column layout"
            />
            <Input
              type="text"
              id="testingText6"
              label="Input Field"
              placeholder="Two column layout"
            />
          </FieldWrapper>

          {/* Multiple Text Input */}
          <FieldWrapper hasColumns>
            <Input
              type="text"
              id="testingText5"
              label="Input Field"
              placeholder="Two column layout"
            />
            <Input
              type="text"
              id="testingText6"
              label="Input Field"
              placeholder="Two column layout"
            />
            <Input
              type="text"
              id="testingText6"
              label="Input Field"
              placeholder="Two column layout"
            />
            <Input
              type="text"
              id="testingText6"
              label="Input Field"
              placeholder="Two column layout"
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
          <FieldWrapper hasColumns>
            <Input
              type="number"
              id="numberField1"
              label="Number Component Example"
            />
            <Input
              type="number"
              id="numberField2"
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
            <FieldGroup id="radio-group-example-1" legend="Radio Legend">
              {checkRadioData.map((item, index) => (
                <CheckRadio key={index} type="radio" value={item.value} />
              ))}
              <ErrorMessage name="radioInput" component="div" />
            </FieldGroup>
          </FieldWrapper>

          {/* Combo! */}
          <FieldWrapper hasColumns>
            <FieldGroup id="checkbox-group-example-2" legend="Checkbox Legend">
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

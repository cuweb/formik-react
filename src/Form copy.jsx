// bg-cyan-500 max-w-5xl mx-auto my-12

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FieldElement } from "./components/FieldWrapper/FieldWrapper";

const MyForm = () => {
  const initialValues = {
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

  const handleSubmit = (values, { resetForm }) => {
    // Handle form submission logic here
    console.log("Form data submitted:", values);
    resetForm();
  };

  return (
    <div className="max-w-5xl mx-auto my-12">
      <h1>My Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-10">
          {/* Text Input */}
          <FieldElement>
            <label htmlFor="textInput">Text Input</label>
            <Field type="text" id="textInput" name="textInput" />
            <ErrorMessage name="textInput" component="div" />
          </FieldElement>

          {/* Email Input */}
          <div className="bg-cyan-100 p-2">
            <label htmlFor="emailInput">Email Input</label>
            <Field type="email" id="emailInput" name="emailInput" />
            <ErrorMessage name="emailInput" component="div" />
          </div>

          {/* Password Input */}
          <div className="bg-cyan-100 p-2">
            <label htmlFor="passwordInput">Password Input</label>
            <Field type="password" id="passwordInput" name="passwordInput" />
            <ErrorMessage name="passwordInput" component="div" />
          </div>

          {/* Number Input */}
          <div className="bg-cyan-100 p-2">
            <label htmlFor="numberInput">Number Input</label>
            <Field type="number" id="numberInput" name="numberInput" />
            <ErrorMessage name="numberInput" component="div" />
          </div>

          {/* Checkbox */}
          <div className="bg-cyan-100 p-2">
            <label>
              <Field type="checkbox" name="checkboxInput" />
              Accept Terms and Conditions
            </label>
            <ErrorMessage name="checkboxInput" component="div" />
          </div>

          {/* Radio Buttons */}
          <div className="bg-cyan-100 p-2">
            <label>
              <Field type="radio" name="radioInput" value="option1" />
              Option 1
            </label>
            <label>
              <Field type="radio" name="radioInput" value="option2" />
              Option 2
            </label>
            <ErrorMessage name="radioInput" component="div" />
          </div>

          {/* Select */}
          <div className="bg-cyan-100 p-2">
            <label htmlFor="selectInput">Select Input</label>
            <Field as="select" id="selectInput" name="selectInput">
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </Field>
            <ErrorMessage name="selectInput" component="div" />
          </div>

          {/* Text Area */}
          <div className="bg-cyan-100 p-2">
            <label htmlFor="textArea">Text Area</label>
            <Field as="textarea" id="textArea" name="textArea" />
            <ErrorMessage name="textArea" component="div" />
          </div>

          {/* Submit Button */}
          <div className="bg-cyan-100 p-2">
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default MyForm;

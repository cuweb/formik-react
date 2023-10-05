import React from "react";
import { Formik, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { FieldWrapper } from "../components/FieldWrapper/FieldWrapper";
import { Input } from "../components/Input/Input";
import { FieldGroup } from "../components/FieldGroup/FieldGroup";
import { CheckRadio } from "../components/CheckRadio/CheckRadio";
import { Select } from "../components/Select/Select";
import { TextArea } from "../components/TextArea/TextArea";
import { checkRadioData, selectData } from "../data/data";

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
    emailInput: "",
    passwordInput: "",
    numberInput: 0,
    checkboxInput: false,
    radioInput: "",
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
              />
              <Input
                type="text"
                name="testingText2"
                label="Input Field"
                maxWidth="lg"
              />
              <Input
                type="text"
                name="testingText3"
                label="Input Field"
                maxWidth="md"
              />
              <Input
                type="text"
                name="testingText4"
                label="Input Field"
                maxWidth="sm"
              />
            </FieldWrapper>

            {/* Multiple Text Input */}
            <FieldWrapper hasColumns>
              <Input type="text" name="testingText5" label="Input Field" />
              <Input type="text" name="testingText6" label="Input Field" />
            </FieldWrapper>

            {/* Multiple Text Input */}
            <FieldWrapper hasColumns>
              <Input type="text" name="testingText7" label="Input Field" />
              <Input type="text" name="testingText8" label="Input Field" />
              <Input type="text" name="testingText9" label="Input Field" />
            </FieldWrapper>

            {/* Multiple Text Input */}
            <FieldWrapper hasColumns>
              <Input type="text" name="testingText10" label="Input Field" />
              <Input type="text" name="testingText11" label="Input Field" />
              <Input type="text" name="testingText12" label="Input Field" />
              <Input type="text" name="testingText13" label="Input Field" />
            </FieldWrapper>

            {/* Email Input */}
            <FieldWrapper>
              <Input
                type="email"
                label="Email Component Example"
                name="emailInput"
                maxWidth="md"
              />
            </FieldWrapper>

            {/* Password Input */}
            <FieldWrapper>
              <Input
                type="password"
                label="Password Component Example"
                name="passwordInput"
                maxWidth="md"
              />
            </FieldWrapper>

            {/* Number Input */}
            <FieldWrapper hasColumns>
              <Input
                type="number"
                name="numberField"
                label="Number Component Example"
                maxWidth="md"
              />
            </FieldWrapper>

            {/* Text Area */}
            <FieldWrapper>
              <TextArea
                label="TextArea Example"
                name="textArea1"
                maxWidth="xl"
                required
              />
            </FieldWrapper>

            {/* Text Area */}
            <FieldWrapper>
              <TextArea
                label="TextArea Example"
                name="textArea2"
                maxWidth="lg"
                required
              />
            </FieldWrapper>

            {/* Text Area */}
            <FieldWrapper>
              <TextArea
                label="TextArea Example"
                name="textArea3"
                maxWidth="md"
                rows={5}
                required
              />
            </FieldWrapper>

            {/* Text Area */}
            <FieldWrapper>
              <TextArea
                label="TextArea Example"
                name="textArea4"
                maxWidth="sm"
                rows={5}
                required
              />
            </FieldWrapper>

            {/* Text Area */}
            <FieldWrapper hasColumns>
              <TextArea
                label="TextArea Example"
                name="textArea5"
                rows={5}
                required
              />
              <TextArea
                label="TextArea Example"
                name="textArea6"
                rows={5}
                required
              />
            </FieldWrapper>

            {/* Text Area */}
            <FieldWrapper hasColumns>
              <TextArea
                label="TextArea Example"
                name="textArea7"
                rows={5}
                required
              />
              <TextArea
                label="TextArea Example"
                name="textArea8"
                rows={5}
                required
              />
              <TextArea
                label="TextArea Example"
                name="textArea9"
                rows={5}
                required
              />
            </FieldWrapper>

            {/* Text Area */}
            <FieldWrapper hasColumns>
              <TextArea
                label="TextArea Example"
                name="textArea10"
                rows={5}
                required
              />
              <TextArea
                label="TextArea Example"
                name="textArea11"
                rows={5}
                required
              />
              <TextArea
                label="TextArea Example"
                name="textArea12"
                rows={5}
                required
              />
              <TextArea
                label="TextArea Example"
                name="textArea13"
                rows={5}
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
              <FieldGroup
                id="checkbox-group-example-1"
                legend="Checkbox Legend"
              >
                {checkRadioData.map((item, index) => (
                  <CheckRadio key={index} type="checkbox" value={item.value} />
                ))}
                <ErrorMessage name="checkboxInput" component="div" />
              </FieldGroup>
            </FieldWrapper>

            {/* Checkboxes */}
            <FieldWrapper>
              <FieldGroup
                id="checkbox-group-example-2"
                legend="Checkbox Legend"
                isInline
              >
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

            {/* Radio Buttons */}
            <FieldWrapper>
              <FieldGroup
                id="radio-group-example-2"
                legend="Radio Legend"
                isInline
              >
                {checkRadioData.map((item, index) => (
                  <CheckRadio key={index} type="radio" value={item.value} />
                ))}
                <ErrorMessage name="radioInput" component="div" />
              </FieldGroup>
            </FieldWrapper>

            {/* Combo! */}
            <FieldWrapper hasColumns>
              <FieldGroup
                id="checkbox-group-example-3"
                legend="Checkbox Legend"
              >
                {checkRadioData.map((item, index) => (
                  <CheckRadio key={index} type="checkbox" value={item.value} />
                ))}
                <ErrorMessage name="checkboxInput" component="div" />
              </FieldGroup>
              <FieldGroup id="radio-group-example-3" legend="Radio Legend">
                {checkRadioData.map((item, index) => (
                  <CheckRadio key={index} type="radio" value={item.value} />
                ))}
                <ErrorMessage name="radioInput" component="div" />
              </FieldGroup>
            </FieldWrapper>

            {/* Select */}
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

            {/* Select */}
            <FieldWrapper>
              <Select
                name="selectInput1b"
                label="Select Example"
                maxWidth="lg"
                options={selectData}
                // onChange={(event) => {
                //   setFieldValue("selectInput", event.target.value);
                //   if (event.target.value === "option1") {
                //     setFieldValue("autoSelect", "option5");
                //   }
                // }}
              />
            </FieldWrapper>

            {/* Select */}
            <FieldWrapper>
              <Select
                name="selectInput1c"
                label="Select Example"
                maxWidth="md"
                options={selectData}
                // onChange={(event) => {
                //   setFieldValue("selectInput", event.target.value);
                //   if (event.target.value === "option1") {
                //     setFieldValue("autoSelect", "option5");
                //   }
                // }}
              />
            </FieldWrapper>

            {/* Select */}
            <FieldWrapper>
              <Select
                name="selectInput1d"
                label="Select Example"
                maxWidth="sm"
                options={selectData}
                // onChange={(event) => {
                //   setFieldValue("selectInput", event.target.value);
                //   if (event.target.value === "option1") {
                //     setFieldValue("autoSelect", "option5");
                //   }
                // }}
              />
            </FieldWrapper>

            {/* Select */}
            <FieldWrapper hasColumns>
              <Select
                name="selectInput2"
                label="Select Example"
                options={selectData}
                // onChange={(event) => {
                //   setFieldValue("selectInput", event.target.value);
                //   if (event.target.value === "option1") {
                //     setFieldValue("autoSelect", "option5");
                //   }
                // }}
              />
              <Select
                name="selectInput3"
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

            {/* Select */}
            <FieldWrapper hasColumns>
              <Select
                name="selectInput4"
                label="Select Example"
                options={selectData}
                // onChange={(event) => {
                //   setFieldValue("selectInput", event.target.value);
                //   if (event.target.value === "option1") {
                //     setFieldValue("autoSelect", "option5");
                //   }
                // }}
              />
              <Select
                name="selectInput5"
                label="Select Example"
                options={selectData}
                // onChange={(event) => {
                //   setFieldValue("selectInput", event.target.value);
                //   if (event.target.value === "option1") {
                //     setFieldValue("autoSelect", "option5");
                //   }
                // }}
              />
              <Select
                name="selectInput6"
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

            {/* Select */}
            <FieldWrapper hasColumns>
              <Select
                name="selectInput7"
                label="Select Example"
                options={selectData}
                // onChange={(event) => {
                //   setFieldValue("selectInput", event.target.value);
                //   if (event.target.value === "option1") {
                //     setFieldValue("autoSelect", "option5");
                //   }
                // }}
              />
              <Select
                name="selectInput8"
                label="Select Example"
                options={selectData}
                // onChange={(event) => {
                //   setFieldValue("selectInput", event.target.value);
                //   if (event.target.value === "option1") {
                //     setFieldValue("autoSelect", "option5");
                //   }
                // }}
              />
              <Select
                name="selectInput9"
                label="Select Example"
                options={selectData}
                // onChange={(event) => {
                //   setFieldValue("selectInput", event.target.value);
                //   if (event.target.value === "option1") {
                //     setFieldValue("autoSelect", "option5");
                //   }
                // }}
              />
              <Select
                name="selectInput10"
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

            {/* Submit Button */}
            {/* <FieldWrapper> */}
            <div>
              <button
                type="submit"
                aria-label="Primary Red"
                className="inline-flex items-center justify-center gap-1 px-3 py-2 text-sm font-medium text-white rounded-md cu-button not-prose md:px-6 md:py-3 md:text-base hover:text-white focus:outline-none bg-cu-red hover:bg-cu-black-600"
              >
                {isSubmitting ? "Submiting..." : "Submit"}
              </button>
            </div>
            {/* </FieldWrapper> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;

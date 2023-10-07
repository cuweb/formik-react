import { FieldWrapper } from "../components/FieldWrapper/FieldWrapper";
import { Select } from "../components/Select/Select";
import { selectData } from "../data/data";

const SelectBlocks = () => {
  return (
    <>
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
    </>
  );
};

export default SelectBlocks;

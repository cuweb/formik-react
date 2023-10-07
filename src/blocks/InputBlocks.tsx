import { FieldWrapper } from "../components/FieldWrapper/FieldWrapper";
import { Input } from "../components/Input/Input";

const InputBlocks = () => {
  return (
    <>
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
          name="testingText7"
          label="Input Field"
          placeholder="Two column layout"
        />
        <Input
          type="text"
          name="testingText8"
          label="Input Field"
          placeholder="Two column layout"
        />
        <Input
          type="text"
          name="testingText9"
          label="Input Field"
          placeholder="Two column layout"
        />
      </FieldWrapper>

      {/* Multiple Text Input */}
      <FieldWrapper hasColumns>
        <Input
          type="text"
          name="testingText10"
          label="Input Field"
          placeholder="Two column layout"
        />
        <Input
          type="text"
          name="testingText11"
          label="Input Field"
          placeholder="Two column layout"
        />
        <Input
          type="text"
          name="testingText12"
          label="Input Field"
          placeholder="Two column layout"
        />
        <Input
          type="text"
          name="testingText13"
          label="Input Field"
          placeholder="Two column layout"
        />
      </FieldWrapper>

      {/* Multiple Text Input */}
      <FieldWrapper cols="4">
        <Input
          type="text"
          name="testingText14"
          label="Input Field"
          placeholder="Two column layout"
        />
        <Input
          type="text"
          name="testingText15"
          label="Input Field"
          colSpan="2"
          placeholder="Two column layout"
        />
        <Input
          type="text"
          name="testingText16"
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
          maxWidth="md"
        />
      </FieldWrapper>

      {/* Password Input */}
      <FieldWrapper>
        <Input
          type="password"
          label="Password Component Example"
          name="passwordInput"
          placeholder="******"
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
    </>
  );
};

export default InputBlocks;

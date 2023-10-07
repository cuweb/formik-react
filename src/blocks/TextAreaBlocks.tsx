import { FieldWrapper } from "../components/FieldWrapper/FieldWrapper";
import { TextArea } from "../components/TextArea/TextArea";

const TextAreaBlocks = () => {
  return (
    <>
      {/* Text Area */}
      <FieldWrapper>
        <TextArea
          label="TextArea Example"
          name="textarea-test-1"
          placeholder="Text area input"
          maxWidth="xl"
          required
        />
      </FieldWrapper>

      {/* Text Area */}
      <FieldWrapper>
        <TextArea
          label="TextArea Example"
          name="textarea-test-2"
          placeholder="Text area input"
          maxWidth="lg"
        />
      </FieldWrapper>

      {/* Text Area */}
      <FieldWrapper>
        <TextArea
          label="TextArea Example"
          name="textarea-test-3"
          placeholder="Text area input"
          maxWidth="md"
          rows={5}
        />
      </FieldWrapper>

      {/* Text Area */}
      <FieldWrapper>
        <TextArea
          label="TextArea Example"
          name="textarea-test-4"
          placeholder="Text area input"
          maxWidth="sm"
          rows={5}
        />
      </FieldWrapper>

      {/* Text Area */}
      <FieldWrapper hasColumns>
        <TextArea
          label="TextArea Example"
          name="textarea-test-5"
          placeholder="Text area input"
          rows={5}
        />
        <TextArea
          label="TextArea Example"
          name="textarea-test-6"
          placeholder="Text area input"
          rows={5}
        />
      </FieldWrapper>

      {/* Text Area */}
      <FieldWrapper hasColumns>
        <TextArea
          label="TextArea Example"
          name="textarea-test-7"
          placeholder="Text area input"
          rows={5}
        />
        <TextArea
          label="TextArea Example"
          name="textarea-test-8"
          placeholder="Text area input"
          rows={5}
        />
        <TextArea
          label="TextArea Example"
          name="textarea-test-9"
          placeholder="Text area input"
          rows={5}
        />
      </FieldWrapper>

      {/* Text Area */}
      <FieldWrapper hasColumns>
        <TextArea
          label="TextArea Example"
          name="textarea-test-10"
          placeholder="Text area input"
          rows={5}
        />
        <TextArea
          label="TextArea Example"
          name="textarea-test-11"
          placeholder="Text area input"
          rows={5}
        />
        <TextArea
          label="TextArea Example"
          name="textarea-test-12"
          placeholder="Text area input"
          rows={5}
        />
        <TextArea
          label="TextArea Example"
          name="textarea-test-13"
          placeholder="Text area input"
          rows={5}
        />
      </FieldWrapper>

      {/* Text Area */}
      <FieldWrapper cols="4">
        <TextArea
          label="TextArea Example"
          name="textarea-test-10"
          placeholder="Text area input"
          rows={5}
        />
        <TextArea
          label="TextArea Example"
          name="textarea-test-12"
          placeholder="Text area input"
          colSpan="2"
          rows={5}
        />
        <TextArea
          label="TextArea Example"
          name="textarea-test-13"
          placeholder="Text area input"
          rows={5}
        />
      </FieldWrapper>
    </>
  );
};

export default TextAreaBlocks;

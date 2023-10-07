import { FieldWrapper } from "../components/FieldWrapper/FieldWrapper";
import { TextArea } from "../components/TextArea/TextArea";

const TextAreaBlocks = () => {
  return (
    <>
      {/* Text Area */}
      <FieldWrapper>
        <TextArea
          label="TextArea Example"
          name="textArea1"
          placeholder="Text area input"
          maxWidth="xl"
        />
      </FieldWrapper>

      {/* Text Area */}
      <FieldWrapper>
        <TextArea
          label="TextArea Example"
          name="textArea2"
          placeholder="Text area input"
          maxWidth="lg"
        />
      </FieldWrapper>

      {/* Text Area */}
      <FieldWrapper>
        <TextArea
          label="TextArea Example"
          name="textArea3"
          placeholder="Text area input"
          maxWidth="md"
          rows={5}
        />
      </FieldWrapper>

      {/* Text Area */}
      <FieldWrapper>
        <TextArea
          label="TextArea Example"
          name="textArea4"
          placeholder="Text area input"
          maxWidth="sm"
          rows={5}
        />
      </FieldWrapper>

      {/* Text Area */}
      <FieldWrapper hasColumns>
        <TextArea
          label="TextArea Example"
          name="textArea5"
          placeholder="Text area input"
          rows={5}
        />
        <TextArea
          label="TextArea Example"
          name="textArea6"
          placeholder="Text area input"
          rows={5}
        />
      </FieldWrapper>

      {/* Text Area */}
      <FieldWrapper hasColumns>
        <TextArea
          label="TextArea Example"
          name="textArea7"
          placeholder="Text area input"
          rows={5}
        />
        <TextArea
          label="TextArea Example"
          name="textArea8"
          placeholder="Text area input"
          rows={5}
        />
        <TextArea
          label="TextArea Example"
          name="textArea9"
          placeholder="Text area input"
          rows={5}
        />
      </FieldWrapper>

      {/* Text Area */}
      <FieldWrapper hasColumns>
        <TextArea
          label="TextArea Example"
          name="textArea10"
          placeholder="Text area input"
          rows={5}
        />
        <TextArea
          label="TextArea Example"
          name="textArea11"
          placeholder="Text area input"
          rows={5}
        />
        <TextArea
          label="TextArea Example"
          name="textArea12"
          placeholder="Text area input"
          rows={5}
        />
        <TextArea
          label="TextArea Example"
          name="textArea13"
          placeholder="Text area input"
          rows={5}
        />
      </FieldWrapper>

      {/* Text Area */}
      <FieldWrapper cols="4">
        <TextArea
          label="TextArea Example"
          name="textArea10"
          placeholder="Text area input"
          rows={5}
        />
        <TextArea
          label="TextArea Example"
          name="textArea12"
          placeholder="Text area input"
          colSpan="2"
          rows={5}
        />
        <TextArea
          label="TextArea Example"
          name="textArea13"
          placeholder="Text area input"
          rows={5}
        />
      </FieldWrapper>
    </>
  );
};

export default TextAreaBlocks;

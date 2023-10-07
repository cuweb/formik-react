import { FieldWrapper } from "../components/FieldWrapper/FieldWrapper";
import { FieldGroup } from "../components/FieldGroup/FieldGroup";
import { CheckRadio } from "../components/CheckRadio/CheckRadio";
import { checkRadioData } from "../data/data";

const RadioBlocks = () => {
  return (
    <>
      <FieldWrapper>
        <FieldGroup id="radio-group-example-1" legend="Radio Legend">
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio
              key={index}
              type="radio"
              label={item.value}
              name={`radio-input-a${index}`}
            />
          ))}
        </FieldGroup>
      </FieldWrapper>

      <FieldWrapper>
        <FieldGroup id="radio-group-example-2" legend="Radio Legend" isInline>
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio
              key={index}
              type="radio"
              label={item.value}
              name={`radio-input-b${index}`}
            />
          ))}
        </FieldGroup>
      </FieldWrapper>
    </>
  );
};

export default RadioBlocks;

import { FieldWrapper } from "../components/FieldWrapper/FieldWrapper";
import { CheckRadio } from "../components/CheckRadio/CheckRadio";
import { checkRadioData } from "../data/data";

const RadioBlocks = () => {
  return (
    <>
      <FieldWrapper>
        <CheckRadio id="radio-group-example-1" legend="Radio Legend">
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio.Option
              key={index}
              type="radio"
              label={item.value}
              name={`radio-input-a${index}`}
            />
          ))}
        </CheckRadio>
      </FieldWrapper>

      <FieldWrapper>
        <CheckRadio id="radio-group-example-2" legend="Radio Legend" isInline>
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio.Option
              key={index}
              type="radio"
              label={item.value}
              name={`radio-input-b${index}`}
            />
          ))}
        </CheckRadio>
      </FieldWrapper>
    </>
  );
};

export default RadioBlocks;

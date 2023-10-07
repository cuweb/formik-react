import { FieldWrapper } from "../components/FieldWrapper/FieldWrapper";
import { FieldGroup } from "../components/FieldGroup/FieldGroup";
import { CheckRadio } from "../components/CheckRadio/CheckRadio";
import { checkRadioData } from "../data/data";

const CheckboxBlocks = () => {
  return (
    <>
      <FieldWrapper>
        <FieldGroup id="checkbox-group-example-1">
          <CheckRadio
            type="checkbox"
            label="Testing checkbox"
            name="checkbox-a1"
          />
        </FieldGroup>
      </FieldWrapper>

      <FieldWrapper>
        <FieldGroup id="checkbox-group-example-2" legend="Checkbox Legend">
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio
              key={index}
              type="checkbox"
              label={item.value}
              name="testing-indexing"
              // name={`checkbox-input-b${index}`}
            />
          ))}
        </FieldGroup>
      </FieldWrapper>

      <FieldWrapper>
        <FieldGroup
          id="checkbox-group-example-3"
          legend="Checkbox Legend"
          isInline
        >
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio
              key={index}
              type="checkbox"
              label={item.value}
              name={`checkbox-input-c${index}`}
            />
          ))}
        </FieldGroup>
      </FieldWrapper>
    </>
  );
};

export default CheckboxBlocks;

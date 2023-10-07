import { FieldWrapper } from "../components/FieldWrapper/FieldWrapper";
import { CheckRadio } from "../components/CheckRadio/CheckRadio";
import { checkRadioData } from "../data/data";

const CheckboxBlocks = () => {
  return (
    <>
      <FieldWrapper>
        <CheckRadio id="checkbox-group-example-1">
          <CheckRadio.Option
            type="checkbox"
            label="Testing checkbox"
            name="checkbox-a1"
          />
        </CheckRadio>
      </FieldWrapper>

      <FieldWrapper>
        <CheckRadio id="checkbox-group-example-2" legend="Checkbox Legend">
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio.Option
              key={index}
              type="checkbox"
              label={item.value}
              name={`checkbox-input-b${index}`}
            />
          ))}
        </CheckRadio>
      </FieldWrapper>

      <FieldWrapper>
        <CheckRadio
          id="checkbox-group-example-3"
          legend="Checkbox Legend"
          isInline
        >
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio.Option
              key={index}
              type="checkbox"
              label={item.value}
              name={`checkbox-input-c${index}`}
            />
          ))}
        </CheckRadio>
      </FieldWrapper>

      <FieldWrapper hasColumns>
        <CheckRadio
          id="checkbox-group-example-4"
          legend="Checkbox Legend"
          isInline
        >
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio.Option
              key={index}
              type="checkbox"
              label={item.value}
              name={`checkbox-input-c${index}`}
            />
          ))}
        </CheckRadio>
        <CheckRadio
          id="checkbox-group-example-5"
          legend="Checkbox Legend"
          isInline
        >
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio.Option
              key={index}
              type="checkbox"
              label={item.value}
              name={`checkbox-input-c${index}`}
            />
          ))}
        </CheckRadio>
      </FieldWrapper>

      <FieldWrapper hasColumns>
        <CheckRadio id="checkbox-group-example-4" legend="Checkbox Legend">
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio.Option
              key={index}
              type="checkbox"
              label={item.value}
              name={`checkbox-input-c${index}`}
            />
          ))}
        </CheckRadio>
        <CheckRadio id="checkbox-group-example-5" legend="Checkbox Legend">
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio.Option
              key={index}
              type="checkbox"
              label={item.value}
              name={`checkbox-input-c${index}`}
            />
          ))}
        </CheckRadio>
      </FieldWrapper>

      <FieldWrapper hasColumns>
        <CheckRadio id="checkbox-group-example-6" legend="Checkbox Legend">
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio.Option
              key={index}
              type="checkbox"
              label={item.value}
              name={`checkbox-input-c${index}`}
            />
          ))}
        </CheckRadio>
        <CheckRadio id="checkbox-group-example-7" legend="Checkbox Legend">
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio.Option
              key={index}
              type="checkbox"
              label={item.value}
              name={`checkbox-input-c${index}`}
            />
          ))}
        </CheckRadio>
        <CheckRadio id="checkbox-group-example-8" legend="Checkbox Legend">
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio.Option
              key={index}
              type="checkbox"
              label={item.value}
              name={`checkbox-input-c${index}`}
            />
          ))}
        </CheckRadio>
      </FieldWrapper>

      <FieldWrapper hasColumns>
        <CheckRadio id="checkbox-group-example-9" legend="Checkbox Legend">
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio.Option
              key={index}
              type="checkbox"
              label={item.value}
              name={`checkbox-input-c${index}`}
            />
          ))}
        </CheckRadio>
        <CheckRadio id="checkbox-group-example-10" legend="Checkbox Legend">
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio.Option
              key={index}
              type="checkbox"
              label={item.value}
              name={`checkbox-input-c${index}`}
            />
          ))}
        </CheckRadio>
        <CheckRadio id="checkbox-group-example-11" legend="Checkbox Legend">
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio.Option
              key={index}
              type="checkbox"
              label={item.value}
              name={`checkbox-input-c${index}`}
            />
          ))}
        </CheckRadio>
        <CheckRadio id="checkbox-group-example-12" legend="Checkbox Legend">
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio.Option
              key={index}
              type="checkbox"
              label={item.value}
              name={`checkbox-input-c${index}`}
            />
          ))}
        </CheckRadio>
      </FieldWrapper>
    </>
  );
};

export default CheckboxBlocks;

import { FieldWrapper } from "../components/FieldWrapper/FieldWrapper";
import { CheckRadio } from "../components/CheckRadio/CheckRadio";
import { checkRadioData } from "../data/data";

const RadioBlocks = () => {
  return (
    <>
      <FieldWrapper>
        <CheckRadio id="radio-group-example-2" legend="Radio Legend">
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

      <FieldWrapper>
        <CheckRadio id="radio-group-example-3" legend="Radio Legend" isInline>
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio.Option
              key={index}
              type="radio"
              label={item.value}
              name={`radio-input-c${index}`}
            />
          ))}
        </CheckRadio>
      </FieldWrapper>

      <FieldWrapper hasColumns>
        <CheckRadio id="radio-group-example-4" legend="Radio Legend" isInline>
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio.Option
              key={index}
              type="radio"
              label={item.value}
              name={`radio-input-c${index}`}
            />
          ))}
        </CheckRadio>
        <CheckRadio id="radio-group-example-5" legend="Radio Legend" isInline>
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio.Option
              key={index}
              type="radio"
              label={item.value}
              name={`radio-input-c${index}`}
            />
          ))}
        </CheckRadio>
      </FieldWrapper>

      <FieldWrapper hasColumns>
        <CheckRadio id="radio-group-example-4" legend="Radio Legend">
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio.Option
              key={index}
              type="radio"
              label={item.value}
              name={`radio-input-c${index}`}
            />
          ))}
        </CheckRadio>
        <CheckRadio id="radio-group-example-5" legend="Radio Legend">
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio.Option
              key={index}
              type="radio"
              label={item.value}
              name={`radio-input-c${index}`}
            />
          ))}
        </CheckRadio>
      </FieldWrapper>

      <FieldWrapper hasColumns>
        <CheckRadio id="radio-group-example-6" legend="Radio Legend">
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio.Option
              key={index}
              type="radio"
              label={item.value}
              name={`radio-input-c${index}`}
            />
          ))}
        </CheckRadio>
        <CheckRadio id="radio-group-example-7" legend="Radio Legend">
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio.Option
              key={index}
              type="radio"
              label={item.value}
              name={`radio-input-c${index}`}
            />
          ))}
        </CheckRadio>
        <CheckRadio id="radio-group-example-8" legend="Radio Legend">
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio.Option
              key={index}
              type="radio"
              label={item.value}
              name={`radio-input-c${index}`}
            />
          ))}
        </CheckRadio>
      </FieldWrapper>

      <FieldWrapper hasColumns>
        <CheckRadio id="radio-group-example-9" legend="Radio Legend">
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio.Option
              key={index}
              type="radio"
              label={item.value}
              name={`radio-input-c${index}`}
            />
          ))}
        </CheckRadio>
        <CheckRadio id="radio-group-example-10" legend="Radio Legend">
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio.Option
              key={index}
              type="radio"
              label={item.value}
              name={`radio-input-c${index}`}
            />
          ))}
        </CheckRadio>
        <CheckRadio id="radio-group-example-11" legend="Radio Legend">
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio.Option
              key={index}
              type="radio"
              label={item.value}
              name={`radio-input-c${index}`}
            />
          ))}
        </CheckRadio>
        <CheckRadio id="radio-group-example-12" legend="Radio Legend">
          {checkRadioData.map((item: { value: string }, index: number) => (
            <CheckRadio.Option
              key={index}
              type="radio"
              label={item.value}
              name={`radio-input-c${index}`}
            />
          ))}
        </CheckRadio>
      </FieldWrapper>
    </>
  );
};

export default RadioBlocks;

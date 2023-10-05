import React from "react";
import { labelStyles } from "../../styles/styles";

export interface FieldGroupProps {
  children: React.ReactNode;
  id: string;
  legend?: string;
  isInline?: boolean;
}

export const FieldGroup = ({
  children,
  id,
  legend,
  isInline,
}: FieldGroupProps) => {
  const inlineOptions = isInline ? "flex-row gap-5" : "flex-col gap-2";

  return (
    <>
      <div className="flex flex-col gap-2">
        {legend && (
          <div id={id} className={labelStyles.label}>
            {legend}
          </div>
        )}
        <div
          role="group"
          aria-labelledby={id}
          className={`flex ${inlineOptions}`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

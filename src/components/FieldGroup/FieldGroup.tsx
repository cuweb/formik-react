import React from "react";

export interface FieldGroupProps {
  children: React.ReactNode;
  id: string;
  legend?: string;
}

export const FieldGroup = ({ children, id, legend }: FieldGroupProps) => {
  return (
    <>
      {legend && (
        <div id={id} className="bg-red-400">
          {legend}
        </div>
      )}
      <div role="group" aria-labelledby={id}>
        {children}
      </div>
    </>
  );
};

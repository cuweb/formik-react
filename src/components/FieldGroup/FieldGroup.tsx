import React from "react";

export interface FieldGroupProps {
  children: React.ReactNode;
  legend?: string;
}

export const FieldGroup = ({ children, legend }: FieldGroupProps) => {
  return (
    <>
      {legend && (
        <div id="checkbox-group" className="bg-red-400">
          {legend}
        </div>
      )}
      <div role="group" aria-labelledby="checkbox-group">
        {children}
      </div>
    </>
  );
};

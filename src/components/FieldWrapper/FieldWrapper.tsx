import React from "react";

export interface FieldWrapperProps {
  children: React.ReactNode;
  cols?: 2 | 1;
}

export const FieldWrapper = ({ children, cols = 1 }: FieldWrapperProps) => {
  return <div className="bg-slate-200 p-2 flex gap-10">{children}</div>;
};

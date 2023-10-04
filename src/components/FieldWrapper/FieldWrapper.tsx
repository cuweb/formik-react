import React from "react";

export interface FieldWrapperProps {
  children: React.ReactNode;
  cols?: 2 | 1;
}

export const FieldWrapper = ({ children, cols = 1 }: FieldWrapperProps) => {
  const columns = cols === 1 ? "flex-col" : "flex-row";
  return <div className={`flex ${columns} gap-3`}>{children}</div>;
};

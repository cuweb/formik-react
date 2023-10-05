import React from "react";

export interface FieldWrapperProps {
  children: React.ReactNode;
  hasColumns?: boolean;
}

export const FieldWrapper = ({ children, hasColumns }: FieldWrapperProps) => {
  const columns = hasColumns ? "flex-row" : "flex-col";
  return <div className={`flex ${columns} gap-5`}>{children}</div>;
};

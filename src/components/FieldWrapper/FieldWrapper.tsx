import React from "react";
import { gridColsClass } from "../../styles/optionClasses";

interface FieldWrapperProps {
  children: React.ReactNode;
  cols?: "1" | "2" | "3" | "4";
  hasColumns?: boolean;
}

// Define a type that allows indexing with a number
type gridColsClassType = {
  [key: number]: string;
};

export const FieldWrapper = ({
  children,
  cols,
  hasColumns,
}: FieldWrapperProps) => {
  let gridColumns = cols ? "md:grid-cols-4" : "";

  if (hasColumns && !cols) {
    // Typecast gridColsClass to gridColsClassType
    const gridCols: gridColsClassType = gridColsClass;

    // Get number of children and set grid column class
    const numOfChildren = React.Children.count(children);
    gridColumns = numOfChildren < 4 ? gridCols[numOfChildren] : gridCols[4];
  }

  return <div className={`grid gap-5 ${gridColumns}`}>{children}</div>;
};

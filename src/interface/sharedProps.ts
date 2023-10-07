export interface sharedInputProps {
  name: string;
  label: string;
  placeholder?: string;
  maxWidth?: "xl" | "lg" | "md" | "sm";
  colSpan?: "1" | "2" | "3" | "4";
  required?: boolean;
}

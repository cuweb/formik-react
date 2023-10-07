// Convert a string to a lowercase, dashed format
export const stringToDashed = (inputString: string): string => {
  const lowercased = inputString.toLowerCase(); // Convert to lowercase
  const formatted = lowercased.replace(/[^a-z0-9]/g, "-"); // Replace spaces with dashes and strip special characters
  return formatted.replace(/-+/g, "-"); // Remove multiple consecutive dashes
};

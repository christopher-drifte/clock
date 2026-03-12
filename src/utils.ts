// Internal utility function for formatting dates
// Not part of the public API
export const formatDate = (date: string | Date): string => {
  return `Today is ${new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })}`;
};

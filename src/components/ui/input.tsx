import * as React from "react";
import { cn } from "../../lib/utils";

// Define the interface for InputProps, extending native input attributes
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

// Define the Input component using React.forwardRef
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type} // Default input type is text, can be overridden via props
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className // Allow additional custom classes to be passed via props
        )}
        ref={ref} // Forward the ref to the input element
        {...props} // Spread the remaining props onto the input
      />
    );
  }
);

// Set a display name for better debugging in React DevTools
Input.displayName = "Input";

// Export the component for use in other parts of the application
export { Input };
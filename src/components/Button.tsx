import { ComponentProps } from "react";

export type ButtonProps = ComponentProps<"button">;

export function Button({ ...props }: ButtonProps) {
  return (
    <button
      className="bg-primary text-background px-8 py-2 rounded-full font-semibold hover:bg-primary/80"
      {...props}
    />
  );
}

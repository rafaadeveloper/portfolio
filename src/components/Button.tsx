import { ComponentProps } from "react";

export type ButtonProps = ComponentProps<"a">;

export function Button({ ...props }: ButtonProps) {
  return (
    <a
      className="bg-primary text-background px-8 py-2 rounded-full font-semibold hover:bg-primary/80"
      {...props}
      href="mailto:rafadevcontatos@gmail.com"
      target="_blank"
    />
  );
}

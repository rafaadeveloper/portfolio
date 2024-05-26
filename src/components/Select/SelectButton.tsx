"use client";

import clsx from "clsx";
import { useVisibility } from "@/state/useVisibility";
import { FlagEn } from "../Flags";

export function SelectButton() {
  const frame = useVisibility();
  
  return (
    <div
      onClick={() => frame.setVisibility(!frame.visibility)}
      className={clsx(
        "w-fit p-2.5 rounded-md hover:bg-blue-200/5",
        frame.visibility ? "bg-blue-200/10" : "bg-transparent"
      )}
    >
      <FlagEn />
    </div>
  );
}

"use client";

import { useVisibility } from "@/state/useVisibility";
import { useEffect } from "react";
import { SelectButton } from "./SelectButton";
import { SelectContent } from "./SelectContent";

export function Select() {
  const frame = useVisibility();
  useEffect(() => {
    frame.setVisibility(false);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <SelectButton />
      {frame.visibility && <SelectContent />}
    </div>
  );
}

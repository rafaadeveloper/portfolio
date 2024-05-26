"use client";

import clsx from "clsx";
import { useVisibility } from "@/state/useVisibility";
import { FlagEn, FlagEs, FlagPt } from "../Flags";
import { useRouter } from "next/router";

export function SelectButton() {
  const frame = useVisibility();
  const router = useRouter();
  return (
    <div
      onClick={() => frame.setVisibility(!frame.visibility)}
      className={clsx(
        "w-fit p-2.5 rounded-md hover:bg-blue-200/5",
        frame.visibility ? "bg-blue-200/10" : "bg-transparent"
      )}
    >
      {router.pathname === "/" && <FlagEn />}
      {router.pathname === "/pt-BR" && <FlagPt />}
      {router.pathname === "/es" && <FlagEs />}
    </div>
  );
}

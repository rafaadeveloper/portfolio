import clsx from "clsx";
import { FlagEn, FlagEs, FlagPt } from "../Flags";
import { useRouter } from "next/navigation";

export function SelectContent() {
  const route = useRouter();
  function navigate(ref: string) {
    route.push(ref);
  }
  return (
    <div className="absolute top-20 rounded-md w-auto p-1 h-auto border border-solid border-white/10">
      <div
        onClick={() => navigate("/pt-BR")}
        className={clsx(
          "w-fit p-2.5 rounded-md hover:bg-blue-200/5",
          location.pathname === "pt-BR" ? "bg-blue-200/10" : "bg-transparent"
        )}
      >
        <FlagPt />
      </div>
      <div
        onClick={() => navigate("/")}
        className={clsx(
          "w-fit p-2.5 rounded-md hover:bg-blue-200/5",
          location.pathname === "/" ? "bg-blue-200/10" : "bg-transparent"
        )}
      >
        <FlagEn />
      </div>
      <div
        onClick={() => navigate("/es")}
        className={clsx(
          "w-fit p-2.5 rounded-md hover:bg-blue-200/5",
          location.pathname === "/es" ? "bg-blue-200/10" : "bg-transparent"
        )}
      >
        <FlagEs />
      </div>
    </div>
  );
}

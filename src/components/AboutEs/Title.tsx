import { Picture } from "@/app/assets/Picture";

export function Title() {
  return (
    <div className="space-y-4">
      <Picture />

      <div className="flex items-start flex-col">
        <h1 className="text-lg font-semibold">Hola, soy Rafael</h1>
        <p className="text-lg text-primary/70">
          pero tú puedes llamarme{" "}
          <span className="text-emerald-400">Rafa7</span>
        </p>
      </div>
    </div>
  );
}

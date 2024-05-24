import { Picture } from "@/app/assets/Picture";

export function Title() {
  return (
    <div className="space-y-4">
      <Picture />

      <div className="flex items-start flex-col">
        <h1 className="text-lg font-semibold">Hi, I'm Rafael</h1>
        <p className="text-lg text-primary/70">
          , but you can call me <span className="text-emerald-400">Rafa7</span>
        </p>
      </div>
    </div>
  );
}

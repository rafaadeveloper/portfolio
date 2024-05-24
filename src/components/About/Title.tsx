import { Picture } from "@/app/assets/Picture";

export function Title() {
  return (
    <div className="space-y-4">
      <Picture />
      <div className="flex items-baseline">
        <h1 className="text-lg font-bold">Hi, i'm Rafael</h1>
        <p className="text-lg text-primary/70">
          , but you can call me
          <span className="text-emerald-400 font-medium"> Rafa7</span>
        </p>
      </div>
    </div>
  );
}

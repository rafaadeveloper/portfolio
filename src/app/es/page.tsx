import { AboutIndex } from "@/components/AboutEs/Index";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background text-primary flex flex-col px-8 md:px-16 py-8">
      <Header />
      <AboutIndex />
    </main>
  );
}

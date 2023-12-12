import PokiCard from "@/components/PokiCard";  

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex max-h-screen justify-center items-center mt-48 ${inter.className}`}
    >
  <PokiCard />
    </main>
  );
}

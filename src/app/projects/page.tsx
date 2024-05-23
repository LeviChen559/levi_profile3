import Image from "next/image";
import HeroImage from "@/sections/heroImage2";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between"> 
      <HeroImage title="Project" img="/contact.avif"/>
    </main>
  );
}

import Image from "next/image";
import HeroImage from "@/sections/heroImage";
import Nav from "@/components/nav";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between"> 
    <Nav type="header"/>
      <HeroImage/>
    </main>
  );
}

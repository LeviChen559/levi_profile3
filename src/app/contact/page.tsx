import Image from "next/image";
import HeroImage from "@/sections/heroImage2";
import Nav from "@/components/nav";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between"> 
      <HeroImage title="Contact with me" img="/contact.avif"/>
    </main>
  );
}

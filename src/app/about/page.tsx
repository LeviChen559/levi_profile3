import HeroImage from "@/sections/heroImage";
import AboutMe from "@/sections/aboutMe";
import Skills from "@/sections/skills";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <HeroImage/>
      <AboutMe/>
      <Skills/>
    </main>
  );
}

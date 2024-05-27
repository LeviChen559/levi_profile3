import HeroImage from "@/sections/heroImage2";
import AboutMe from "@/sections/aboutMe";
import Skills from "@/sections/skills";
import Background from "@/sections/background";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-6">
      <HeroImage title="About Me " img="/black.png" icon={false} />
      <AboutMe />
      <Background /> 
      <Skills />
    </main>
  );
}

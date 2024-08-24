import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { NavbarDemo } from "@/components/NavBar";
import { Boxes } from "@/components/ui/BackgroundBoxes";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <NavbarDemo/>
      <Hero />
      <Grid />
    </div>
  );
}

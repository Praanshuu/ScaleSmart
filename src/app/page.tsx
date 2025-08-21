import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Credentials from "@/components/Credentials";
import Benefits from "@/components/Benefits";
import SocialProof from "@/components/SocialProof";
import GodfatherOffer from "@/components/GodFatherOffer";
import Bonuses from "@/components/Bonuses";
import StackTheValue from "@/components/StackTheValue";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FinalOfferSection from "@/components/FinalOfferSection";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Credentials />
      <Benefits />
      <SocialProof />
      <GodfatherOffer />
      <Bonuses />
      <StackTheValue />
      <FinalOfferSection />
      <Footer />
    </main>
  );
}

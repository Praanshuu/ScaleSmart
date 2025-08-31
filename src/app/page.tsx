import Hero from "@/components/Home/Hero";
import Problem from "@/components/Home/Problem";
import Solution from "@/components/Home/Solution";
import Credentials from "@/components/Home/Credentials";
import Benefits from "@/components/Home/Benefits";
import SocialProof from "@/components/Home/SocialProof";
import GodfatherOffer from "@/components/Home/GodFatherOffer";
import Bonuses from "@/components/Home/Bonuses";
import StackTheValue from "@/components/Home/StackTheValue";
import FinalOfferSection from "@/components/Home/FinalOfferSection";
import ContactForm from "@/components/Home/ContactForm";

export default function Home() {
  return (
    <main>
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
      <ContactForm />
    </main>
  );
}

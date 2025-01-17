//import Head from 'next/head'
import Footer from "../components/footer";
import { HomePic } from "../components/homepageBg";
import IconBg from "../components/iconBg";
import IconContainer from "../components/iconContainer";
import Navbar from "../components/navbar";
import { ProjectCard } from "../components/projectcards";
import RegBanner from "../components/reginfobanner";
import SendDonationBand from "../components/sendDonations";
import { Volunteer } from "../components/volunteeerForm";
//import { Volunteer } from "../components/volunteeerForm";
import { CardSection } from "../components/whatWeDoCardSection";
import WhoWeAreBand from "../components/whoWeAreHome";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <RegBanner />
      <HomePic />
      <WhoWeAreBand />
      <IconBg />
      <CardSection />
      <hr className="mt-[2rem] w-[90%] m-auto h-[0.2rem] bg-[#15245333] " />
      <SendDonationBand />
      <Volunteer/>
      <Footer />
    </div>
  );
}

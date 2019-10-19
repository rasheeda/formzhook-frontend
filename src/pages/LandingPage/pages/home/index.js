import React from "react";
import Navbar from "./../../components/Navbar";
import HeroSection from "./../../components/HeroSection";
import HeroSection2 from "./../../components/HeroSection2";
import FeaturesSection from "./../../components/FeaturesSection";
import FaqSection from "./../../components/FaqSection";
import CtaSection from "./../../components/CtaSection";
import ContentSection from "./../../components/ContentSection";
import Footer from "./../../components/Footer";
// import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function HomePage(props) {
  // const router = useRouter();

  return (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <HeroSection
        color="white"
        size="medium"
        title="Your landing page title here"
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
        buttonText="Get Started"
        image="https://uploads.divjoy.com/undraw-japan_ubgk.svg"
        // buttonOnClick={() => {
        //   router.push("/pricing");
        // }}
      />
      <HeroSection2
        color="white"
        size="medium"
        title="Craft beer delivered right to your door"
        subtitle="What if instead of normal mail, you got normal mail and also beer sometimes. We can make that happen."
        buttonText="Count me in"
        image="https://uploads.divjoy.com/undraw-beer_celebration_cefj.svg"
        // buttonOnClick={() => {
        //   router.push("/pricing");
        // }}
      />
      <FeaturesSection
        color="white"
        size="medium"
        title="Features"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
      />
      <FaqSection
        color="white"
        size="medium"
        title="Frequently Asked Questions"
        subtitle="Here are some answers to the questions we hear from people the most."
      />
      <CtaSection
        color="white"
        size="medium"
        title="Ready to get started?"
        buttonText="Get Started"
        // buttonOnClick={() => {
        //   router.push("/pricing");
        // }}
      />
      <ContentSection
        color="white"
        size="medium"
        title="We help you make money"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
      />
      <Footer
        color="white"
        size="normal"
        logo="https://uploads.divjoy.com/logo.svg"
        copyright="© 2019 Company"
      />
    </>
  );
}

export default HomePage;

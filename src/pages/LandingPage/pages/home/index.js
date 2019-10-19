import React from "react";
import Navbar from "./../../components/Navbar";
import HeroSection from "./../../components/HeroSection";
import HeroSection2 from "./../../components/HeroSection2";
import FeaturesSection from "./../../components/FeaturesSection";
import HowToSection from "./../../components/HowToSection";
import GetStartedSection from "./../../components/GetStartedSection";
import ContactUsSection from "./../../components/ContactUsSection";
import Footer from "./../../components/Footer";
import "./styles.scss";

function HomePage(props) {
  return (
    <>
      <Navbar
        color="black"
        spaced={true}
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <HeroSection
        color="dark"
        size="large"
        title="A FREE and Open Source Service For Testing Webhooks and Submitting Form Data"
        subtitle="Formzhook allows you to easily post your form data without building a 
        backend. A good case for testing your forms and webhooks."
        buttonText="Get Started"
        image="https://uploads.divjoy.com/undraw-japan_ubgk.svg"
        backgroundImage="https://images.unsplash.com/photo-1567450121326-28da3797155d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
      />
      {/* <HeroSection2
        color="dark"
        size="medium"
        title="Test Your Webhooks for Free"
        subtitle="Formzhook allows you to easily test your webhooks and https requests."
        buttonText="Start Testing"
        image="https://uploads.divjoy.com/undraw-beer_celebration_cefj.svg"
        // buttonOnClick={() => {
        //   router.push("/pricing");
        // }}
      /> */}
      <FeaturesSection
        color="white"
        size="medium"
        title="Features"
        subtitle=""
      />
      <HowToSection
        color="light"
        size="medium"
        title="How To Get Started"
        subtitle="Simple steps to start using formzhook"
      />
      <GetStartedSection
        color="white"
        size="medium"
        title="Ready to get started?"
        buttonText="Easy Signup"
        // buttonOnClick={() => {
        //   router.push("/pricing");
        // }}
      />
      <ContactUsSection
        color="white"
        size="medium"
        title="Contact US"
        subtitle="Send us an email hello@formzhook.io"
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

import React from "react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import Faq from "../Faq";
import "./styles.scss";

function HowToSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Faq
          items={[
            {
              question: "Create an account",
              answer:
                "Begin by creating a free account in order to manage your formz and requests"
            },
            {
              question: "To Test Your Forms",
              answer:
                "Create a form, use the unique ID to sepcifically post data to the form"
            },
            {
              question: "To Test Webhooks",
              answer: "Generate a URL and post data to the generated URL."
            },
            {
              question: "Read the docs",
              answer:
                "Read the documentation " +
                <a href="#">here</a> +
                " for more information."
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default HowToSection;

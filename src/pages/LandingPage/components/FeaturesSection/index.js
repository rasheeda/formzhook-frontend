import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Features from "./../Features";
import "./styles.scss";

function FeaturesSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Features
          items={[
            {
              title: "Formz",
              description:
                "Create formz and submit as much data as you need. View submitted data in a table and in JSON",
              image: "imgs/dashboard.png"
            },
            {
              title: "Webhookz",
              description:
                "Generate webhook URLs on the fly for testing your callback URLs",
              image: "imgs/webhooks.png"
            },
            {
              title: "Documentation",
              description: "Great documentation to easily get started",
              image: "imgs/api.png"
            },
            {
              title: "FREE and Open Source",
              description:
                "Formzhok service is FREE and open source. Consider contributing here",
              image: "imgs/api.png"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesSection;

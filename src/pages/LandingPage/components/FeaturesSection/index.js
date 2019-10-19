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
              image: "https://uploads.divjoy.com/undraw-mind_map_cwng.svg"
            },
            {
              title: "Webhookz",
              description:
                "Generate webhook URLs on the fly for testing your callback URLs",
              image:
                "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg"
            },
            {
              title: "Documentation",
              description: "Great documentation to easily get started",
              image: "https://uploads.divjoy.com/undraw-having_fun_iais.svg"
            },
            {
              title: "FREE and Open Source",
              description:
                "Formzhok service is FREE and open source. Consider contributing here",
              image: "https://uploads.divjoy.com/undraw-balloons_vxx5.svg"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesSection;

import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import SectionButton from "./../SectionButton";
import "./styles.scss";

function HeroSection2(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage="https://images.unsplash.com/photo-1552062264-d2de2b79f4da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    >
      <div className="container">
        <div className="columns is-vcentered is-desktop">
          <div className="column">
            <figure className="HeroSection2__image image">
              <img src={props.image} alt="Illustration" />
            </figure>
          </div>
          <div className="column is-1" />
          <div className="column is-6-desktop has-text-centered-touch">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={1}
            />
            <SectionButton
              parentColor={props.color}
              size="large"
              onClick={props.buttonOnClick}
            >
              {props.buttonText}
            </SectionButton>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default HeroSection2;

import React from "react";
import CenteredColumns from "./../CenteredColumns";
import "./styles.scss";

function Faq(props) {
  return (
    <CenteredColumns>
      {props.items.map((item, index) => (
        <div className="column is-half" key={index}>
          <article className="Faq__faq-item">
            <h1 className="title is-4 is-spaced">{item.question}</h1>
            <h2 className="subtitle is-6">{item.answer}</h2>
          </article>
        </div>
      ))}
    </CenteredColumns>
  );
}

export default Faq;

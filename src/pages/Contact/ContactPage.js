import React from "react";
import { useForm, ValidationError } from "@formspree/react";

//styles
import "./contactPage.scss";

function ContactPage() {
  const [state, handleSubmit] = useForm("temptemp");
  if (state.succeeded) {
    return <p>We'll get back to you shortly!</p>;
  }

  return (
    <>
      <h2 className="contactPage__header">CONTACT US</h2>
      <div className="contactPage__container">
        <form className="contactPage__form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="contactPage__label">
            EMAIL
          </label>
          <input
            id="email"
            type="email"
            name="email"
            errors={state.errors}
            placeholder="youremail@email.com"
            className="contactPage__input email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message" className="contactPage__label">
            MESSAGE
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="enter your message here"
            className="contactPage__input message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="contactPage__button"
          >
            CONTACT
          </button>
        </form>

        <p className="contactPage__cta">
          HAVE QUESTIONS? <br /> <span className="contactPage__ctaHighlight">WE'RE HERE TO HELP! </span>
        </p>
      </div>
    </>
  );
}

export default ContactPage;

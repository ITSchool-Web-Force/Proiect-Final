import { useState } from "react";

function MyForm() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
  };
  return (
    <div className="form-container">
      <h3>GET IN TOUCH</h3>
      <p>
        If you would like to find out more about CG International please contact
        us using the form or information below.
      </p>
      <form
        name="contact-form"
        method="POST"
        data-netlify="true"
        action="contact/?success=true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <div className="form-layout">
          <div className="form-group">
            <input type="hidden" name="form-name" value="contact-form" />
            <label className="label-group">
              NAME
              <input required type="text" name="name" />
            </label>
            <label htmlFor="email" className="label-group">
              EMAIL
              <input required type="email" name="email" />
            </label>
            <label className="label-group">
              PHONE
              <input required type="text" name="phone" />
            </label>
          </div>
          <div>
            <label className="label-group">
              MESSAGE
              <textarea required name="message"></textarea>
            </label>
          </div>
          <div>
            <button className="send-button" type="submit">
              SEND MESSAGE
            </button>
            {isFormSubmitted ? (
              <h4>
                Thank you for your message. We will get back to you shortly.
              </h4>
            ) : (
              "Oops, something went wrong. Please try again later."
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default MyForm;

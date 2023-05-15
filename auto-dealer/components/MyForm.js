import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact-form",
          name,
          email,
          message,
        }).toString(),
      });

      if (response.ok) {
        alert("Form submission successful!");
        // Reset form fields if needed
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Form submission failed!");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div className="form-container">
      <h3>GET IN TOUCH</h3>
      <p>
        If you would like to find out more about CG International please contact
        us using the form or information below.
      </p>
      <form
        onSubmit={handleSubmit}
        name="contact-form"
        method="POST"
        data-netlify="true"
        action="contact/?success=true"
        data-netlify-honeypot="bot-field"
      >
        <div className="form-layout">
          <div className="form-group">
            <label className="label-group">
              NAME
              <input
                required
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </label>
            <label className="label-group">
              EMAIL
              <input
                required
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>
            <label className="label-group">
              PHONE
              <input
                required
                type="text"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </label>
          </div>
          <div>
            <label className="label-group">
              MESSAGE
              <textarea
                required
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></textarea>
            </label>
          </div>
          <div>
            <button className="send-button" type="submit">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MyForm;

function MyForm() {
  return (
    <div className="form-container">
      <h3>GET IN TOUCH</h3>
      <p>
        If you would like to find out more about CG International please contact
        us using the form or information below.
      </p>
      <form name="contact-form" method="POST" data-netlify="true">
        <div className="form-layout">
          <div className="form-row">
            <label className="label-group">
              NAME
              <input type="text" name="name" />
            </label>
            <label className="label-group">
              EMAIL
              <input type="email" name="email" />
            </label>
            <label className="label-group">
              PHONE
              <input type="text" name="phone" />
            </label>
          </div>
          <div>
            <label className="label-group">
              MESSAGE
              <textarea name="message"></textarea>
            </label>
          </div>
          <div>
            <button
              className="send-button"
              type="submit"
              id="submit"
              value="Send"
            >
              SEND MESSAGE
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MyForm;

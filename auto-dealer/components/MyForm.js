function MyForm() {
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
        onSubmit="submit"
      >
        <div className="form-layout">
          <div className="form-group">
            <input type="hidden" name="form-name" />
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
          </div>
        </div>
      </form>
    </div>
  );
}

export default MyForm;

import Modal from "react-bootstrap/Modal";

function EnquiryModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.carname}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          name="enqiury-form"
          method="POST"
          data-netlify="true"
          action="currents-stock/?success=true"
          data-netlify-honeypot="bot-field"
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
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default EnquiryModal;

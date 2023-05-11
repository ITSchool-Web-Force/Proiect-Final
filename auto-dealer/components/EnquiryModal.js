import Modal from "react-bootstrap/Modal";
import { Form, Input } from "antd";
import Button from "react-bootstrap/Button";

const { TextArea } = Input;

function EnquiryModal(props) {
  console.log(props);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.carname}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
        >
          <Form.Item label="Name">
            <Input />
          </Form.Item>
          <Form.Item label="Email">
            <Input />
          </Form.Item>
          <Form.Item label="Phone Number">
            <Input />
          </Form.Item>
          <Form.Item label="Message">
            <TextArea rows={4} />
          </Form.Item>
          <Button style={{ borderRadius: 0 }} variant="dark">
            SUBMIT
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default EnquiryModal;

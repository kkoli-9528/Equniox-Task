import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const RaiseQueryModal = ({ show, handleClose }) => {
  const [form, setForm] = useState({
    type: "",
    description: "",
    attachment: null,
    priority: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("type", form.type);
    formData.append("description", form.description);
    formData.append("priority", form.priority);
    if (form.attachment) {
      formData.append("attachment", form.attachment);
    }

    try {
      const res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("Query submitted successfully!");
        handleClose();
      } else {
        alert("Failed to submit. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center">Raise a Query</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Type of Query</Form.Label>
            <Form.Select
              name="type"
              value={form.type}
              onChange={handleChange}
              required
            >
              <option value="">Select Type</option>
              <option>Payment Issue</option>
              <option>Site Info</option>
              <option>Delay</option>
              <option>Others</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              rows={3}
              value={form.description}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Attachment (Optional)</Form.Label>
            <Form.Control
              type="file"
              name="attachment"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Priority</Form.Label>
            <Form.Select
              name="priority"
              value={form.priority}
              onChange={handleChange}
              required
            >
              <option value="">Select Priority</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default RaiseQueryModal;

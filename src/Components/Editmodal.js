import { Button, Modal, Form } from "react-bootstrap";
import React, { useState } from "react";
const Editmodal = () => {
  const [show, setShow] = useState(false);
  const [editMembers, setEditMembers] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const saveHandler = () => {
     
  };
  return (
    <React.Fragment>
      <Button className="mr-2" variant="dark" onClick={handleShow}>
        <i className="far fa-edit"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                onChange={(e) =>
                  setEditMembers({ ...editMembers, name: e.target.value })
                }
                value={editMembers.name}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) =>
                  setEditMembers({ ...editMembers, email: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Role"
                onChange={(e) =>
                  setEditMembers({ ...editMembers, role: e.target.value })
                }
                value={editMembers.role}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={saveHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};
export default Editmodal;

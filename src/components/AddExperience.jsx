import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getExperience, postMyExperience } from "../action";

const AddExperience = (props) => {
  const dispatch = useDispatch();

  const [experienceValue, setExperienceValue] = useState({
    company: "",
    description: "",
    role: "",
    startDate: "",
    endDate: "",
    area: ""
  });

  const [id, setId] = useState("66deab4f4d0def0015cef0f9");
  const myExperience = useSelector((state) => state.myExperience.myExperience)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExperienceValue((prevExperienceValue) => ({
      ...prevExperienceValue,
      [name]: value,
    }));
  };

  useEffect(() => {
    dispatch(getExperience(id));
  }, [myExperience])

  const onSubmitBtn = () => {
    dispatch(postMyExperience(experienceValue));
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Esperienza</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="mb-1">Ruolo in azienda</Form.Label>
            <Form.Control
              type="text"
              placeholder="Developer..."
              className="mb-3"
              name="role"
              onChange={handleInputChange}
              value={experienceValue.role}
            />
            <Form.Label className="mb-1">Azienda</Form.Label>
            <Form.Control
              type="text"
              placeholder="EPICODE"
              className="mb-3"
              name="company"
              onChange={handleInputChange}
              value={experienceValue.company}
            />
            <Form.Label className="mb-1">Descrizione</Form.Label>
            <Form.Control
              type="text"
              placeholder="In breve..."
              className="mb-3"
              name="description"
              onChange={handleInputChange}
              value={experienceValue.description}
            />
            <Form.Label className="mb-1">Area</Form.Label>
            <Form.Control
              type="text"
              placeholder="Roma"
              className="mb-3"
              name="area"
              onChange={handleInputChange}
              value={experienceValue.area}
            />
            <Form.Group className="d-flex">
              <div className="me-4">
                <Form.Label className="mb-1">Data di inizio</Form.Label>
                <Form.Control
                  type="date"
                  name="startDate"
                  onChange={handleInputChange}
                  value={experienceValue.startDate}
                />
              </div>
              <div>
                <Form.Label className="mb-1">Data di fine</Form.Label>
                <Form.Control
                  type="date"
                  name="endDate"
                  onChange={handleInputChange}
                  value={experienceValue.endDate}
                />
              </div>
            </Form.Group>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onSubmitBtn}>Salva</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddExperience;

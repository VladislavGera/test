import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

function ModalItem(props) {
  const character = useSelector((state) => state.character.character);

  return (
    <Modal
      {...props}
      size="xs"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {character.name}
        </Modal.Title>
      </Modal.Header>

      <Card>
        <Card.Img src={character.image} />
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4>
                Species:
                <small class="text-muted"> {character.species}</small>
              </h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>
                Gender:
                <small class="text-muted"> {character.gender}</small>
              </h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>
                Status:
                <small class="text-muted"> {character.status}</small>
              </h4>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalItem;

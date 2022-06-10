import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { setCharacter } from "../store/character";
import { useDispatch } from "react-redux";

function Item({
  setModalShow,
  image,
  name,
  species,
  url,
}) {
  const dispatch = useDispatch();

  const modalShow = () => {
    axios.get(url).then(async (res) => {
      const character = await res.data;
      await dispatch(setCharacter({ character }));
      await setModalShow(true);
    });
  };

  return (
    <Card className="mb-5">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"> {species}</small>
      </Card.Footer>
      <Button onClick={() => modalShow()} variant="primary">
        More details
      </Button>
    </Card>
  );
}

export default Item;

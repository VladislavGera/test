import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleComplete, removeEpisode } from "../store/episode";

function EpisodeItem({ id, text, completed }) {
  const dispatch = useDispatch();

  return (
    <>
      <ListGroup.Item
        variant="primary"
        style={{ width: "70%" }}
        className="d-flex justify-content-between align-center "
      >
        <Form.Check
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleComplete({ id }))}
        />
        <p className="ms-2 me-auto">{text}</p>
        <FaTrash onClick={() => dispatch(removeEpisode({ id }))} />
      </ListGroup.Item>
    </>
  );
}

export default EpisodeItem;

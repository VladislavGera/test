import Item from "./item";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";

function ItemsList({ setModalShow }) {
  const characters = useSelector((state) => state.character.characters);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="body">
          <Row xs={1} sm={2} md={4} lg={6} className="m-4">
            {characters.map((character) => (
              <Item
                setModalShow={setModalShow}
                key={character.id}
                {...character}
              />
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}

export default ItemsList;

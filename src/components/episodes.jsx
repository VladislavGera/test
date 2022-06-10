import EpisodeItem from "./episode";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";

function Episodelist() {
  const episodes = useSelector((state) => state.episodes.episodes);

  return (
    <>
      <ListGroup className="items" variant="dark">
        {episodes.length !== 0 ? (
          <>
            {episodes.map((episode) => (
              <EpisodeItem key={episode.id} {...episode} />
            ))}
          </>
        ) : (
          <h1> Hi, start saving your episode list </h1>
        )}
      </ListGroup>
    </>
  );
}

export default Episodelist;

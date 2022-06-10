import Accordion from "react-bootstrap/Accordion";
import NavDropdown from "react-bootstrap/NavDropdown";


function Filter({ setPage, setFilter, setFilterValue }) {
  return (
    <>
      <NavDropdown
        className="bg-primary text-dark"
        title="Filter"
        id="collasible-nav-dropdown"
      >
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Species</Accordion.Header>
            <Accordion.Body>
              <NavDropdown.Item
                onClick={() => {
                  setFilter("species");
                  setFilterValue("human");
                  setPage(1);
                }}
              >
                Human
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setFilter("species");
                  setFilterValue("alien");
                  setPage(1);
                }}
              >
                Alien
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setFilter("species");
                  setFilterValue("humanoid");
                  setPage(1);
                }}
              >
                Humanoid
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setFilter("species");
                  setFilterValue("robot");
                  setPage(1);
                }}
              >
                Robot
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setFilter("species");
                  setFilterValue("disease");
                  setPage(1);
                }}
              >
                Disease
              </NavDropdown.Item>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Status</Accordion.Header>
            <Accordion.Body>
              <NavDropdown.Item
                onClick={() => {
                  setFilter("status");
                  setFilterValue("alive");
                  setPage(1);
                }}
              >
                Alive
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setFilter("status");
                  setFilterValue("dead");
                  setPage(1);
                }}
              >
                Dead
              </NavDropdown.Item>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Gender</Accordion.Header>
            <Accordion.Body>
              <NavDropdown.Item
                onClick={() => {
                  setFilter("gender");
                  setFilterValue("male");
                  setPage(1);
                }}
              >
                Male
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setFilter("gender");
                  setFilterValue("female");
                  setPage(1);
                }}
              >
                Female
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setFilter("gender");
                  setFilterValue("genderless");
                  setPage(1);
                }}
              >
                Genderless
              </NavDropdown.Item>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <NavDropdown.Divider />
        <NavDropdown.Item
          onClick={() => {
            setFilter("");
            setFilterValue("");
            setPage(1);
          }}
        >
          Without filter
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
}

export default Filter;

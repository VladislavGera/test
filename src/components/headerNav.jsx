import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Input from "./form";
import Filter from "./filter";
import { setPageName } from "../store/pageName";
import { useDispatch, useSelector } from "react-redux";

function HeaderNav({
  value,
  updateText,
  handleAction,
  setPage,
  setFilter,
  setFilterValue,
}) {
  const dispatch = useDispatch();
  const pageName = useSelector((state) => state.pageName.pageName);

  const activePage = pageName !== "characters";

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ background: "#7eabf2" }}
      variant="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand className="text-secondary" href="#home">
          Rick and Morty
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => dispatch(setPageName({ pageName: "characters" }))}
              className="text-secondary"
              href="/"
              className={!activePage ? "text-white" : "text-dark"}
            >
              Сharacters
            </Nav.Link>

            <Nav.Link
              onClick={() => dispatch(setPageName({ pageName: "episodes" }))}
              className="text-secondary"
              href="/episode"
              className={activePage ? "text-white" : "text-dark"}
            >
              Episodes
            </Nav.Link>
          </Nav>
          <Nav>
            {activePage ? (
              <Input
                value={value}
                updateText={updateText}
                handleAction={handleAction}
              />
            ) : (
              <Filter
                setPage={setPage}
                setFilter={setFilter}
                setFilterValue={setFilterValue}
              />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;

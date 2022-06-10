import PaginationComponent from "./pagination";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";

function Footer({ handlePageClick }) {
  const pageName = useSelector((state) => state.pageName.pageName);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ background: "#7eabf2" }}
        variant="dark"
        fixed="bottom"
      >
        <Container className="d-flex justify-content-center align-items-center">
          {pageName !== "characters" ? (
            <Navbar.Brand>Rick and Morty</Navbar.Brand>
          ) : (
            <PaginationComponent handlePageClick={handlePageClick} />
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;

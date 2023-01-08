import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import PropTypes from "prop-types";
import { LinkContainer } from "react-router-bootstrap";

export default function Header(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>{props.title} </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
          {props.searchBar ? (
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          ) : (
            ""
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
Header.defaultProps = {
  title: " Your title here ",
  // searchBar: true,
};

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired,
};

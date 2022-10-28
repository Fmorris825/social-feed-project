import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Navigation = (props) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <h1>Social Feed</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigation;

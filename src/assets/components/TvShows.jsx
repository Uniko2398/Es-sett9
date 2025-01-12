import { Container, Dropdown, ButtonGroup } from "react-bootstrap";

const TvShow = function () {
  return (
    <Container fluid className="px-4 bg-dark">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4 text-white">TV Shows</h2>
          <Dropdown as={ButtonGroup} className="ms-4">
            <Dropdown.Toggle
              variant="secondary"
              size="sm"
              className="rounded-0"
              style={{ backgroundColor: "#221f1f" }}
            >
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Comedy</Dropdown.Item>
              <Dropdown.Item href="#">Drama</Dropdown.Item>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <i className="text-white mx-2 py-1 bi-grid icons"></i>
          <i className="text-white mx-2 py-1 bi-grid-3x3 icons"></i>
        </div>
      </div>
    </Container>
  );
};
export default TvShow;

import { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const MovieGrid = ({ apiUrl, title }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (response.ok) return response.json();
        else throw new Error(`Errore API: Codice ${response.status}`);
      })
      .then((data) => {
        if (data.Search) {
          setData(data.Search);
        } else {
          setError("Nessun risultato trovato");
        }
      })
      .catch((error) => setError(error.message));
  }, [apiUrl]);

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  return (
    <div>
      <h4>{title}</h4>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        {data.map((item, i) => (
          <Col key={i} className="mb-2 text-center px-1">
            <Card style={{}}>
              <Card.Img
                className="img-fluid"
                src={item.Poster}
                alt={item.Title}
                style={{ width: "250px", height: "150px", objectFit: "cover" }}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MovieGrid;

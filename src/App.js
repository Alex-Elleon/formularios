import { Card, Container } from "react-bootstrap";

const App=()=>{
  const title= "Bienvenidos"
  return (
    <Container className="mt-3">
    <Card>
      <Card.Body>
        <Card.Title>
          {title}
        </Card.Title>
      </Card.Body>
    </Card>
    </Container>
  );
}

export default App;

import { Card, Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export const CreateQuestionnaires = () => {


    return (
      <Container>
        <Card className='mt-3'>
        <Card.Body>
          <Card.Title className="text-center">
            
          </Card.Title>
          <Form>
            <Form.Group>
              <Form.Label>Formulario sin nombre</Form.Label>
              <Form.Control placeholder="Ingresa el nombre de tu formulario"/>
            </Form.Group>
          </Form>
        </Card.Body>
        </Card>

      <Card className="mt-5">
      <Row className="g-2">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Email address">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel
            controlId="floatingSelectGrid"
            label="Works with selects"
          >
            <Form.Select aria-label="Floating label select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>
      </Card>
      </Container>
  );
}


{/* <Form.Group>
<Form.Label>Contraseña</Form.Label>
<Form.Control placeholder="Ingresa tu contraseña"/>
</Form.Group> */}



export default CreateQuestionnaires;


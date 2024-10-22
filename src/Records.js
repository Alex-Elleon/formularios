import { Container, Card, Form, Button } from "react-bootstrap";
import{onChangeRegister, onClick, onSubmit} from "react"

export const Records = ()=>{
return(
<Container>
<Card className="mt-3" style={{color: 'black', background: 'linear-gradient(to right, #cca9dd, #B2B5E0)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'}}>
        <Card.Body>
          <Card.Title>Formulario para registro de ususarios</Card.Title>
          <Form>
            <Form.Group>
              <Form.Label>Nombre:</Form.Label>
              <Form.Control onChangeRegister={onChangeRegister} placeholder="Ingresa tu nombre/nombres" name="name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Apellidos:</Form.Label>
              <Form.Control onChangeRegister={onChangeRegister} placeholder="Ingresa tus apellidos" name="las_name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Correro:</Form.Label>
              <Form.Control onChangeRegister={onChangeRegister} placeholder="Ingresa tu correro electronico" type="email" name="email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contraseñas:</Form.Label>
              <Form.Control onChangeRegister={onChangeRegister} placeholder="Captura una contraseña" type="password" name="password" />
            </Form.Group>
            <Button className="mt-3" variant="outline-secondary" size="sm" type="reset">Borrar respuestas</Button> <br />
            <Button className="mt-3" variant="success" onClick={() => onSubmit()}>Registrate</Button>
          </Form>
        </Card.Body>
      </Card>
      </Container>
      );
}

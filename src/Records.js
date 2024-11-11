import { Container, Card, Form, Button, Row } from "react-bootstrap";
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
              <Form.Label>Correo:</Form.Label>
              <Form.Control onChangeRegister={onChangeRegister} placeholder="Ingresa tu correo electronico" type="email" name="email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control onChangeRegister={onChangeRegister} placeholder="Captura una contraseña" type="password" name="password" />
            </Form.Group>
            
            <Button className="mt-4" variant="outline-secondary" size="sm" type="reset">Borrar respuestas</Button>
            <br/>
            <Button className="mt-4" variant="info" onClick={() => onSubmit()}>Registrate</Button>
            
          </Form>
        </Card.Body>
      </Card>
      </Container>
      );
}

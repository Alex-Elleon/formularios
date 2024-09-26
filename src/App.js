import { useState } from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import LoadingButton from "./Log";

const App = () => {
  const title = "LogIn";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [data, setData] = useState({})

  const onChange = (e) => {
    e.preventDefault();
    if (e.target.name === "email") {
      setEmail(e.target.value)
    } else if (e.target.name === "password") {
      setPassword(e.target.value)
    }
  }

  const onChangeRegister = (e) => {
    e.preventDefault();
    const nData = data;
    nData[e.target.name] = e.target.value;
    setData(nData);
  };

  const onSubmit = () => {
    // Enviar data al server
    console.log(data)
  }

  return (
    <Container className="mt-3">
      <Card className="mb-5">
        <Card.Body>
          <Card.Title className="text-center">
            {title}
          </Card.Title>
          <Form>
            <Form.Group>
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control placeholder="Ingresa tu correo electronico" type="email" name="email" onChange={onChange} /> <br />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control placeholder="Ingresa tu contraseña" type="password" name="password" onChange={onChange} />
            </Form.Group>
            <Button variant="link" className="textMuted" >Olvisaste tu contraseña?</Button><br />
            <Button variant="second" type="submit">Ingresar</Button>
          </Form>

          <p>{email}</p>
          <p>{password}</p>

        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Formulario para registro de ususarios</Card.Title>
          <Form>
            <Form.Group>
              <Form.Label>Nombre:</Form.Label>
              <Form.Control onChange={onChangeRegister} placeholder="Ingresa tu nombre/nombres" name="name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Apellidos:</Form.Label>
              <Form.Control onChange={onChangeRegister} placeholder="Ingresa tus apellidos" name="las_name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Correro:</Form.Label>
              <Form.Control onChange={onChangeRegister} placeholder="Ingresa tu correro electronico" type="email" name="email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contraseñas:</Form.Label>
              <Form.Control onChange={onChangeRegister} placeholder="Captura una contraseña" type="password" name="password" />
            </Form.Group> <br />
            <Button variant="outline-secondary" size="sm" type="reset">Borrar respuestas</Button> <br /><br />
            <Button variant="success" onClick={() => onSubmit()}>Registrate</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;

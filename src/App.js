import React from "react";
import { useState } from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import LoadingButton from "./Log";
import { useNavigate } from "react-router-dom";


const App = () => {
  const title = "Login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [data, setData] = useState({});
  const Navigate = useNavigate();
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
            <Button variant="link" className="textMuted" onClick={() => Navigate("/recover-password")}>¿Olvidaste tu contraseña?</Button><br />

            <Button style={{ marginRight: '10px' }} variant="dark" type="submit" onClick={() => Navigate("/Home")}>Ingresar</Button>

            <Button style={{ marginRight: '10px' }} variant="dark" type="submit" onClick={() => Navigate("/Records")}>Registrarse</Button>
          </Form>

          <p>{email}</p>
          <p>{password}</p>

        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;

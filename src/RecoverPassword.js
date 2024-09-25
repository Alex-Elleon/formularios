import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'


export const RecoverPassword = () => {
    const [email, setEmail] = useState("");
    const onChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value)
    }

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Ingresa tu correo electronico</Card.Title>
                    <Form.Control name="email" placeholder='Inresa tu correo' onChange={onChange} />
                    <Button>Recupera tu contraseña</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}
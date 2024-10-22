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
            <Card className='mt-3' style={{color: 'black', background: 'linear-gradient(to right, #cca9dd, #B2B5E0)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'}}>
                <Card.Body>
                    <Card.Title>Ingresa tu correo electronico</Card.Title>
                    <Form.Control className='mt-3 mb-3' name="email" placeholder='Ingresa tu correo' onChange={onChange} />
                    <Button variant='danger'>Recupera tu contraseña</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}
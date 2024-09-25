import React from "react";
import { Button, Card, Container, Nav, Tab, Table } from "react-bootstrap";

export const Home = () => {
    return (
        <>
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                <Nav.Item>
                    <Nav.Link href='/home'> Home </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/'> Bases </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/create-questionnaire'> Crear Nuevo Cuestionario </Nav.Link>
                </Nav.Item>
            </Nav>
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>Lista de Usuarios</Card.Title>
                        <div className="text-end">
                            <Button variant="success" >Agregar usuario</Button>
                        </div>
                        <Table >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Apellidos</th>
                                    <th>Correo</th>
                                </tr>
                            </thead>

                        </Table>
                    </Card.Body>
                </Card>
            </Container>
        </>

    )
}
import React from "react";
import { Button, Card, Container, Nav, Form, Table, Navbar, Row, Col } from "react-bootstrap";

export const Home = () => {
    return (
        <>
            <Nav variant="underline"
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)} style={{background: 'linear-gradient(to right, #cca9dd, #B2B5E0)'}}>

                <Nav.Item>
                    <Nav.Link href='/home'> Home </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/'> Bases </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/create-questionnaire'> Crear Nuevo Cuestionario </Nav.Link>
                </Nav.Item>
                <Nav.Item style={{position: 'fixed', right: 0, top:'-1%'}}>
                    <Navbar>
                        <Form inLine>
                            <Row>
                                <Col xs="auto">
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        className=" mr-sm-2"
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Button type="submit">Buscar</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Navbar>
                </Nav.Item>
            </Nav>
            <Container className="mt-3">
                <Card style={{boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'}}>
                    <Card.Body>
                        <Card.Title>Lista de Usuarios</Card.Title>
                        <div className="text-end mt-3">
                            <Button variant="success" >Agregar usuario</Button>
                        </div>
                        <Table className="mt-3" striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Matricula</th>
                                </tr>

                                <tr>
                                    <th>1</th>
                                    <th>Paul</th>
                                    <th>Tristan</th>
                                    <th>Utm23097890@utma.edu.mx</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th>2</th>
                                    <th>Mario</th>
                                    <th>Alberto</th>
                                    <th>Utm23097876@utma.edu.mx</th>
                                </tr>
                            </tbody>

                        </Table>
                    </Card.Body>
                </Card>
            </Container>
        </>

    )
}
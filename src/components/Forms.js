import { Card, Form } from "react-bootstrap"

export const Forms = ({ title, questions }) => {

    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Form>
                    {
                        questions.map((question) => (
                            <Form.Group >
                                <Form.Label>{question}</Form.Label>
                                <Form.Control type="text" placeholder="Respuesta" />
                            </Form.Group>
                        ))

                    }
                </Form>
            </Card.Body>
        </Card>
    )
}
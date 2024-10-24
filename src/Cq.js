import { useState } from "react"
import { Container, FormGroup, FormLabel, FormControl, Row, Col, FormSelect, InputGroup, CardBody, CardTitle, Card, CardText, Tooltip, OverlayTrigger, CloseButton, Form, Button } from "react-bootstrap"

export const Cq = () => {

  const [Cq, setCq] = useState({
    title: "Formulario vacio",
    questions: [
      {
        title: "Pregunta sin titulo",
        type: "radio",
        options: "Opción 1"
      }
    ]
  })

  const onChangeTitle = (e) => {
    e.preventDefault()
    const data = Cq
    data.title = e.target.value
    setCq({ data })
  }

  const onChangeCampos = (e, index) => {
    const data = Cq
    data.questions[index][e.target.name] = e.target.value
    setCq({ data })
  }

  const addOption = (index) => {
    const data = Cq
    data.questions[index].options.push(`Opcion${data.questions[index].options.length + 1}`)
  }

  const addQuestion = () => {
    const data = Cq
    data.questions.push({
      title: "Pregunta sin titulo",
      type: "radio",
      options: ["Opción 1"]
    })
    setCq({ data })
  }
  const deleteQuestion = () => {
    const data = Cq
    data.questions.slice(data)
  }


  const sendData = () => {
    console.log(Cq)
  }

  const onChangeOptionTitle = (e, iq, io) => {
    const data = Cq
    data.questions[iq].options[io] = e.target.value
    setCq({ data })
  }

  return (
    <Container>
      <Card className="mb-3 mt-5">
        <CardBody>
          <CardTitle>{Cq.title}</CardTitle>
          <FormControl placeholder="Cambia el nombre del formulario" name="title" onChange={onChangeTitle}></FormControl>
        </CardBody>
      </Card>
      {
        Cq.questions.map((q, i) => {
          <Card>
            <CardBody>
              <CardText>
                {
                  Cq.questions.length != 1 && (
                    <OverlayTrigger overlay={<Tooltip> Eliminar pregunta
                    </Tooltip>}
                    >
                      <CloseButton onClick={() => deleteQuestion(i)} />
                    </OverlayTrigger>
                  )
                }
              </CardText>
              <FormGroup>
                <Row>
                  <Col>
                    <FormControl
                      value={q.title}
                      name="title"
                      onChange={(e) => onChangeCampos(e, i)} />
                  </Col>
                  <Col>
                    <FormSelect name="type" onChange={(e) => onChangeCampos(e, i)}>
                      <option value="radio">Opción multiple</option>
                      <option value="checkbox">Casilla de verificación</option>
                      <option value="select">Lista Desplegada</option>
                      <option value="text">Respuesta corta</option>
                    </FormSelect>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <ol>
                      {
                        q.options.map((o, io) => {

                          <InputGroup>
                            <FormControl
                              value={o}
                              onChange={(e) => onChangeOptionTitle}></FormControl>

                            {
                              q.options.length != 1 && {

                              }
                            }
                          </InputGroup>

                        })

                      }
                    </ol>

                    <Button variant="info" onClick={() => addOption(i)}>Agregar Opción</Button>
                  </Col>
                </Row>

              </FormGroup>
            </CardBody>
          </Card>

        })
      }
      <Row>
        <Col>
          <Row>
            <Col>
              <Button onClick={() => addQuestion()}>Agregar pregunta</Button>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>
              <Button onClick={() => sendData()}>Guardar Cuestionario </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
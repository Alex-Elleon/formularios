import { useState } from "react"
import { Container, Row, Col, Form, InputGroup, Card, Tooltip, OverlayTrigger, CloseButton, Button } from "react-bootstrap"

export const Cq = () => {

  const [Cq, setCq] = useState({
    title: "Formulario vacio",
    description : "Texto simple",
    questions: [
      {
        title: "Pregunta sin titulo",
        type: "radio",
        options: ["Opción 1"]
      }
    ]
  });

  const onChangeTitle = (e) => {
    e.preventDefault()
    const data = Cq;
    data.title = e.target.value;
    setCq({...data})
  }

  const onChangeCampos = (e, index) => {
    const data = Cq
    data.questions[index][e.target.name] = e.target.value
    setCq({...data })
  }

  const addOption = (index) => {
    const data = Cq
    data.questions[index].options.push(`Opcion${data.questions[index].options.length + 1}`)
    setCq({...data});
  }

  
  const addQuestion = (index) => {
    const data = Cq
    data.questions.push({
      title: "Pregunta sin titulo",
      type: "radio",
      options: ["Opción 1"]
    })
    setCq({...data })
  }

  const deleteOption = (iq, io) => {
    const data = {...Cq};
    const filteredOptions = data.questions[iq].options.filter (( _, i ) => i !== io); 
    data.questions[iq].options = filteredOptions;
    setCq(data);
  }

  const deleteQuestion = (iq) => {
    const data = Cq;
    const filteredQuestions = data.questions.filter (( _, i ) => i !== iq); 
    data.questions = filteredQuestions;
    setCq({...data});
  }


  const sendData = () => {
    console.log(Cq)
  }

  const onChangeOptionTitle = (e, iq, io) => {
    const data = {...Cq}
    data.questions[iq].options[io] = e.target.value
    setCq(data);
  }

  return (
    <Container>
      <Card className= " mb-3 mt-5" border = "success">
        <Card.Body>
          <Card.Title>{Cq.title}</Card.Title>
          <Form.Control placeholder="Cambia el nombre del formulario" name="title" onChange={onChangeTitle}></Form.Control>
        </Card.Body>
      </Card>
      {
        Cq.questions.map((q, i) => {
          return(
          <Card className = "mb-4 mt-5" border = "primary">
            <Card.Body>
              <Card.Text className = "text-end">
                {
                  Cq.questions.length !== 1 && (
                    <OverlayTrigger overlay={<Tooltip> Eliminar pregunta
                    </Tooltip>}
                    >
                      <CloseButton onClick={() => deleteQuestion(i)} />
                    </OverlayTrigger>
                  )
                }
              </Card.Text>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Control
                      value={q.title}
                      name="title"
                      onChange={(e) => onChangeCampos(e, i)} />
                  </Col>
                  <Col>
                    <Form.Select name="type" onChange={(e) => onChangeCampos(e, i)}>
                      <option value="radio">Opción multiple</option>
                      <option value="checkbox">Casilla de verificación</option>
                      <option value="select">Lista Desplegada</option>
                      <option value="text">Respuesta corta</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row className = "m-3">
                  <Col>
                    <ol>
                      {
                        q.options.map((o, io) => (
                          <InputGroup key={io}>
                            <Form.Control
                              value={o}
                              onChange={(e) => onChangeOptionTitle(e, i, io)}/>

                            {
                              q.options.length !== 1 && (
                              <Button variant = "outline-danger" onClick={() => deleteOption(i, io)}>Eliminar Opción</Button>
                              )
                                  
                            }
                          </InputGroup>
                        ))
                      }
                    </ol>

                    <Button variant="outline-primary" onClick={() => addOption(i)}>Agregar Opción</Button>{' '}
                  </Col>
                </Row>

              </Form.Group>
            </Card.Body>
          </Card>
          )
        })
      }
              {
              Cq.questions.map((i) => {
                return(
                Cq.questions.length !== 1 && (
                    <OverlayTrigger overlay = {<Tooltip>Eliminar Opcion</Tooltip>}>
                      <CloseButton onClick={() => deleteOption(i)}/>
                    </OverlayTrigger>
                  )
                )
                })
                  }

      <Row>
        <Col>
          <Row>
            <Col className = "text-center">
              <Button variant="outline-dark" onClick={() => addQuestion()}>Agregar pregunta</Button>{' '}
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col className = "text-center">
              <Button variant = "outline-success" onClick={() => sendData()}>Guardar Cuestionario </Button>
            </Col>
          </Row>
        </Col>
      </Row>
     {/*  <Button onClick={()=>setSjowQuestionnaire(true)}>Vista Previa</Button>
      {
        showQuestionnaire &&(
          <AnswerQuesionnaire questionnaire = {createQuestionnaire}/>   
        )
      } */}
    </Container>
  )
}
import axios from "axios";
import { useState } from "react";
import { Card, Col, Container, Row, Form, InputGroup } from "react-bootstrap";
import AlertComponent from "../AlertComponent";
import LoadinComponent from "../LoadinComponent";

function Content() {
  const [state, setState] = useState("normal");
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState("");

  const ContentSearch = async () => {
    if (inputText.length === 0 || inputText === "undefined") {
      return alert("Type something then you can find any things");
    }
    try {
      setState("loading");
      const response = await axios.post("http://tungsnk.tech:4000/api/ai/text", {
        prompt: inputText,
      });
      setData(response.data.message);
      setState("done");
    } catch (error) {
      setState("error");
    }
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col sm={2}></Col>
        <Col sm={8} className="d-flex justify-content-center">
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Search any things"
              aria-label="Search any things"
              aria-describedby="Search any things"
              onChange={(e) => setInputText(e.target.value)}
            />
            <button className="btn btn-outline-success" onClick={ContentSearch}>
              Search
            </button>
          </InputGroup>
        </Col>
        <Col sm={2}></Col>
      </Row>
      <Row className="mt-5">
        <Col sm={2}></Col>
        <Col sm={8}>
          {state === "normal" && (
            <>
              <p className="text-center">
                Here you can search anythings that can help you
              </p>
            </>
          )}
          {state === "error" && <AlertComponent />}
          {state === "loading" && <LoadinComponent />}
          {state === "done" && (
            <Card>
              <Card.Header as="h5">
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => {
                      navigator.clipboard.writeText(data);
                    }}
                  >
                    Copy
                  </button>
                </div>
              </Card.Header>
              <p className="p-3">{data}</p>
            </Card>
          )}
        </Col>
        <Col sm={2}></Col>
      </Row>
    </Container>
  );
}

export default Content;

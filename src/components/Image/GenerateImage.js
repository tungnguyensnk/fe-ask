import axios from "axios";
import { useState } from "react";
import {
  Col,
  Dropdown,
  DropdownButton,
  Row,
  Form,
  InputGroup,
} from "react-bootstrap";
import AlertComponent from "../AlertComponent";
import CardComponent from "../CardComponent/CardComponent";
import LoadinComponent from "../LoadinComponent";

function GenerateImage() {
  const [state, setState] = useState("normal");
  const [size, setSize] = useState("");
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState([]);

  const ImgSearch = async () => {
    if (inputText.length === 0 || size.length === 0) {
      return alert("Type something then you can find any things");
    }
    try {
      setState("loading");
      const response = await axios.post("http://tungsnk.tech:4000/api/ai/img", {
        prompt: inputText,
        size: size.toLowerCase().toString(),
      });
      console.log("response:", response.data.data);
      setData(response.data.data);
      setState("done");
    } catch (error) {
      setState("error");
    }
  };

  return (
    <>
      <Row className="mt-5">
        <Col sm={2}></Col>
        <Col sm={8}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Generate any of Image"
              aria-label="Generate any of Image"
              aria-describedby="Generate any of Image"
              onChange={(e) => setInputText(e.target.value)}
            />
            <DropdownButton
              title={`${size ? size : "Select Size"}`}
              id="bg-nested-dropdown"
            >
              <Dropdown.Item eventKey="1" onClick={() => setSize("Small")}>
                Small
              </Dropdown.Item>
              <Dropdown.Item eventKey="2" onClick={() => setSize("Medium")}>
                Medium
              </Dropdown.Item>
              <Dropdown.Item eventKey="3" onClick={() => setSize("Large")}>
                Large
              </Dropdown.Item>
            </DropdownButton>
            <button className="btn btn-outline-primary" onClick={ImgSearch}>
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
        </Col>
        <Col sm={2}></Col>

        <Col sm={2}></Col>
        {state === "done" &&
          data.map((value, index) => {
            return (
              <Col key={index} sm={4} className="mb-2">
                <CardComponent value={value} />
              </Col>
            );
          })}
        <Col sm={2}></Col>
      </Row>
    </>
  );
}

export default GenerateImage;

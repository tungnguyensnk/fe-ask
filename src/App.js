import React, { useState } from "react";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import SearchAnimation from "./components/Animation/SearchAnimation";
import { Col, Container, Row } from "react-bootstrap";
import Content from "./components/Content/Content";
import GenerateImage from "./components/Image/GenerateImage";

const App = () => {
  const [tab, setTab] = useState("searchText");

  return (
    <div>
      <NavbarComponent />
      <Container style={{ marginBottom: "300px" }}>
        <Row style={{ marginTop: "140px" }}>
          <Col sm={12} md={8}>
            <h1 className="text-success">
              Ask me anything
            </h1>
            <h4 className="mt-3 text-muted">
              Tích hợp với các API OpenAI để tạo ra nội dung phù hợp với yêu cầu
            </h4>
          </Col>
          <Col sm={12} md={4}>
            <div style={{ height: "400px", width: "400px" }}>
              <SearchAnimation />
            </div>
          </Col>
        </Row>
        <Row>
          <div
            className="d-flex justify-content-center"
            style={{ marginTop: "-40px" }}
          >
            <button
              className={`${
                tab === "searchText"
                  ? "btn btn-success"
                  : "btn btn-outline-success"
              } btn-lg`}
              onClick={() => setTab("searchText")}
            >
              Text
            </button>
            <div>
              <button
                className={`${
                  tab === "searchImg"
                    ? "btn btn-success"
                    : "btn btn-outline-success"
                } btn-lg ms-3`}
                onClick={() => setTab("searchImg")}
              >
                Image
              </button>
            </div>
          </div>
          <div></div>
          {tab === "searchText" && <Content />}
          {tab === "searchImg" && <GenerateImage />}
        </Row>
      </Container>
    </div>
  );
};

export default App;

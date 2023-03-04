import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../../index.css";

function CategoryCartComponent(props) {
  return (
    <Container fluid>
      <Col></Col>
      <Row className="justify-content-center">
        {props.images.map((image, index) => (
          <Col
            key={index}
            md={3}
            className="category-cart"
            style={{ justifyContent: "center", display: "flex" }}
          >
            <LinkContainer to="/product-list">
              <Image src={image} fluid />
            </LinkContainer>
			<LinkContainer to="/product-list">
            <div>{props.text[index]}</div>
			</LinkContainer>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CategoryCartComponent;

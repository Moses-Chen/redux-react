import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import EmailInput from "./components/containers/emailInput";
import FirstNameInput from "./components/containers/firstNameInput";
import LastNameInput from "./components/containers/lastNameInput";
import PhoneInput from "./components/containers/phoneInput";

class App extends Component {
  render() {
    return (
      <Container>
      <Row>
          <center><h2>Contact Information</h2></center>
      </Row>
      <Row>
          <Col md={5}>
              <FirstNameInput/>
          </Col>
          <Col md={5}>
              <LastNameInput />
          </Col>
      </Row>
      <Row>
          <Col md={5}>
              <PhoneInput />
          </Col>
      </Row>
      <Row>
          <Col md={5}>
              <EmailInput />
          </Col>
      </Row>
  </Container>
    );
  }
}

export default App;



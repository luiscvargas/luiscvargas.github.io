import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class MainFooter extends React.Component {
  render() { 
    return (
      <footer className="App-footer">
      <Container>
        <Row>
        <Col xs={12}>
        <p>This website was created 
          with <a className="App-link" href="https://reactjs.org">
          React</a>.
        </p>
        </Col>
        <Col>
        </Col>
        </Row>
      </Container>
      </footer>
    )
  }
}

export default MainFooter;

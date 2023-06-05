import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { cards } from '../../object';
import ComponentCard from '../../ComponentCard';
const Body = () => {
  const [filter, setFilter] = useState(null);


  const handleFilterClick = () => {
    filter !== null ?  setFilter(() => null) : setFilter(() =>  [...cards?.filter(obj => Number(obj.Ratings) >= 4)]);
  }

    return (
        <>
          <Container className="mt-5">
          <Row>
            <Col md="2">
              <Button variant='warning' size='sm' onClick={handleFilterClick}>{filter?"Go Back":"Top Rated"}</Button>
            </Col>
          </Row>
            <Row>
              <Col md="12">
                <Card className="border-0">
                  <Card.Body>
                    <InputGroup size="sm">
                      <Form.Control
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Search Your Food here!!"
                        style={{ border: "none", cursor: "pointer",fontWeight:"500"}}
                      />
                    </InputGroup>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
    
            <Row className="mt-3">
              <Col md="12">
                <Row>
                {
                  filter !== null ? filter?.map((obj) => {
                    return <ComponentCard key={obj.Id} object={obj} />;
                  })
                  : cards?.map((obj) => {
                    return <ComponentCard key={obj.Id} object={obj} />;
                  })}

                </Row>
              </Col>
            </Row>
          </Container>
        </>
      );
}

export default Body
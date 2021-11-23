// import '../sass/styleOder.css'
import React from "react";

import { Col, Form, Row, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'


const OderItem = () => {
  return (
    <div>
      <container>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Tên người nhận</Form.Label>
              <Form.Control type="text" placeholder="Ho va ten" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control type="number" placeholder="09819555555" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Địa chỉ</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Thời gian nhận hàng</Form.Label>
            <Form.Control placeholder="19-23h t2-cn" />
          </Form.Group>

              <Link to="/payment">
          <Button variant="primary" type="submit">
           Thanh toán
          </Button>
          </Link>
        </Form>
      </container>
    </div>
  );
};

export default OderItem;

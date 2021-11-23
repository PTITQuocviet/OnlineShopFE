import React from 'react'
// import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { Nav, Container, Row, Col } from 'react-bootstrap'


const Header = () => {
    return (
        <div className="header ">
            <Container>
                <Row>
                    <Col lg={6}>
                        <Nav as="ul">
                            <Nav.Item as="li" >
                                <Nav.Link href="/">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" >
                                <Nav.Link href="/clothes">Clothes</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" >
                                <Nav.Link href="/cart">Cart</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" >
                                <Nav.Link href="/payment">Payment</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" >
                                <Nav.Link href="/oder">Oder</Nav.Link>
                            </Nav.Item>
                            {/* <Nav.Item as="li" >
                                <Nav.Link href="/login">Login</Nav.Link>
                            </Nav.Item> */}
                            
                        </Nav>
                    </Col>
                    <Col lg={4}>
                        <Nav>
                        <Nav.Item as="li" >
                                <Nav.Link href="/">PEASHOP</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col lg={2}>
                        <Nav as="ul">
                            <Nav.Item as="li">
                                <Nav.Link><i className="bx bx-user" ></i></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link><span className="bx bx-search"></span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" >
                                <Nav.Link href="/login">Login</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Header

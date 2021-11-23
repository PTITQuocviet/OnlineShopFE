import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { Nav, Container, Col, Row, Image } from 'react-bootstrap'


const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <Container fluid>
                    <Row>
                        <Col lg={3}>
                            <Image src={logo} alt="logo" rounded />
                        </Col>
                        <Col lg={3}>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link href="/product" disabled>Clothes</Nav.Link>
                                <Nav.Link disabled>Books</Nav.Link>
                                <Nav.Link disabled>Shoes</Nav.Link>
                                <Nav.Link disabled>Electronics</Nav.Link>

                            </Nav>
                        </Col>
                        <Col lg={3}>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link href="/home" disabled>About us</Nav.Link>
                                <Nav.Link disabled>Group 9</Nav.Link>
                                <Nav.Link disabled>Phone Number</Nav.Link>
                                <Nav.Link disabled>038888888</Nav.Link>
                            </Nav>
                        </Col>
                        <Col lg={3}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d251637.95196238213!2d105.6189045!3d9.779349!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1636947513646!5m2!1svi!2s" ></iframe>
                        </Col>
                    </Row>
                </Container>

            </div>
        </footer>
    )
}


export default Footer

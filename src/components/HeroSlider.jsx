import React from 'react'
import { Row, Container, Card, Col, Button } from 'react-bootstrap'
import slide2 from '../assets/images/slider/slide2.jpg'
import slide3 from '../assets/images/slider/slide3.jpg'
const HeroSlider = () => {
    return (
        <div className="hero_slider_item active container1">
            <Container>
                <Row>
                    <h1 className="hero-slider-title">Trending now</h1>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={3}>
                        <Card >
                            <Card.Img variant="top" src={slide3} />
                            <Card.Body>
                                <Card.Title>New Collection</Card.Title>
                                <Card.Text>
                                    Mẫu mới về hot nhất 2021
                                </Card.Text>
                                <Button variant="primary">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card >
                            <Card.Img variant="top" src={slide2} />
                            <Card.Body>
                                <Card.Title>Bộ sưu tập thu đông</Card.Title>
                                <Card.Text>
                                    Mẫu mới về hot nhất 2021
                                </Card.Text>
                                <Button variant="primary">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card >
                            <Card.Img variant="top" src={slide3} />
                            <Card.Body>
                                <Card.Title>Bộ sưu tập thu đông</Card.Title>
                                <Card.Text>
                                    Mẫu mới về hot nhất 2021
                                </Card.Text>
                                <Button variant="primary">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card >
                            <Card.Img variant="top" src={slide2} />
                            <Card.Body>
                                <Card.Title>Bộ sưu tập thu đông</Card.Title>
                                <Card.Text>
                                    Mẫu mới về hot nhất 2021
                                </Card.Text>
                                <Button variant="primary">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default HeroSlider

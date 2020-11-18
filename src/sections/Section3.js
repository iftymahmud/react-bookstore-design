import React from 'react'
import { Container, Carousel, Row, Col } from 'react-bootstrap'

function Section3() {
    return (
        <div className="section3Content">
            <Container>
                <Row>
                    <Col lg={8}>
                        <Carousel>
                            <Carousel.Item interval={500}>
                                <img
                                    className="d-block w-100"
                                    src="images/11.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img
                                    className="d-block w-100"
                                    src="images/12.jpg"
                                    alt="Third slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img
                                    className="d-block w-100"
                                    src="images/13.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img
                                    className="d-block w-100"
                                    src="images/14.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>

                    </Col>

                    <Col lg={4} className="mt-4">
                        <h2>LATEST ARRIVALS</h2>
                        <p className="text-muted">Nisi scelerisque eu ultrices vitae auctor eu augue ut. Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Lectus urna duis convallis convallis tellus. Pulvinar elementum integer enim neque volutpat. Id leo in vitae turpis. Eu consequat ac felis donec et odio pellentesque. Est placerat in egestas erat imperdiet sed euismod. Aliquam id diam maecenas ultricies mi eget. Adipiscing vitae proin sagittis nisl rhoncus mattis. Amet mauris commodo quis imperdiet massa tincidunt nunc. Libero enim sed faucibus turpis. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi.</p>
                    </Col>
                </Row>
            </Container >
        </div >
    )
}

export default Section3;

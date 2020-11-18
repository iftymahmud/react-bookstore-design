import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap'

function Books() {
    return (
        <div>
            <Header />

            <Container className="booksContent">
                <Row>
                    <Col lg={4} className="py-4">
                        <Image src="/images/1.jpg" fluid />
                    </Col>
                    <Col lg={6} className="py-4">
                        <h2>Sample Book 1</h2>
                        <p>Morbi maximus elementum urna, a elementum erat. Ut quis orci dolor. Sed nec magna nunc. Quisque blandit hendrerit dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent eu augue dui. Donec non leo non metus molestie mattis vel in libero. Suspendisse feugiat eget libero suscipit laoreet. Proin luctus faucibus bibendum. Nam eu euismod nisl. In tempus sapien eu imperdiet rutrum. Mauris mollis sapien nec orci tempus rhoncus. Integer eget mi mi. Phasellus sit amet eleifend ipsum. Aenean et nunc varius, mattis libero nec, commodo diam.</p>
                        <ListGroup variant="flush" >
                            <ListGroup.Item className="bg-transparent">Author: Sample Author Name</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Published: July 2014</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Category: Other</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent"><h5>Price: 34$</h5></ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col lg={4} className="py-4">
                        <Image src="/images/2.jpg" fluid />
                    </Col>
                    <Col lg={6} className="py-4">
                        <h2>Sample Book 2</h2>
                        <p>Morbi maximus elementum urna, a elementum erat. Ut quis orci dolor. Sed nec magna nunc. Quisque blandit hendrerit dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent eu augue dui. Donec non leo non metus molestie mattis vel in libero. Suspendisse feugiat eget libero suscipit laoreet. Proin luctus faucibus bibendum. Nam eu euismod nisl. In tempus sapien eu imperdiet rutrum. Mauris mollis sapien nec orci tempus rhoncus. Integer eget mi mi. Phasellus sit amet eleifend ipsum. Aenean et nunc varius, mattis libero nec, commodo diam.</p>
                        <ListGroup variant="flush" >
                            <ListGroup.Item className="bg-transparent">Author: Sample Author Name</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Published: July 2014</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Category: Other</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent"><h5>Price: 34$</h5></ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col lg={4} className="py-4">
                        <Image src="/images/3.jpg" fluid />
                    </Col>
                    <Col lg={6} className="py-4">
                        <h2>Sample Book 3</h2>
                        <p>Morbi maximus elementum urna, a elementum erat. Ut quis orci dolor. Sed nec magna nunc. Quisque blandit hendrerit dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent eu augue dui. Donec non leo non metus molestie mattis vel in libero. Suspendisse feugiat eget libero suscipit laoreet. Proin luctus faucibus bibendum. Nam eu euismod nisl. In tempus sapien eu imperdiet rutrum. Mauris mollis sapien nec orci tempus rhoncus. Integer eget mi mi. Phasellus sit amet eleifend ipsum. Aenean et nunc varius, mattis libero nec, commodo diam.</p>
                        <ListGroup variant="flush" >
                            <ListGroup.Item className="bg-transparent">Author: Sample Author Name</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Published: July 2014</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Category: Other</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent"><h5>Price: 34$</h5></ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col lg={4} className="py-4">
                        <Image src="/images/4.jpg" fluid />
                    </Col>
                    <Col lg={6} className="py-4">
                        <h2>Sample Book 4</h2>
                        <p>Morbi maximus elementum urna, a elementum erat. Ut quis orci dolor. Sed nec magna nunc. Quisque blandit hendrerit dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent eu augue dui. Donec non leo non metus molestie mattis vel in libero. Suspendisse feugiat eget libero suscipit laoreet. Proin luctus faucibus bibendum. Nam eu euismod nisl. In tempus sapien eu imperdiet rutrum. Mauris mollis sapien nec orci tempus rhoncus. Integer eget mi mi. Phasellus sit amet eleifend ipsum. Aenean et nunc varius, mattis libero nec, commodo diam.</p>
                        <ListGroup variant="flush" >
                            <ListGroup.Item className="bg-transparent">Author: Sample Author Name</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Published: July 2014</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Category: Other</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent"><h5>Price: 34$</h5></ListGroup.Item>
                        </ListGroup>
                    </Col>


                    <Col lg={4} className="py-4">
                        <Image src="/images/5.jpg" fluid />
                    </Col>
                    <Col lg={6} className="py-4">
                        <h2>Sample Book 5</h2>
                        <p>Morbi maximus elementum urna, a elementum erat. Ut quis orci dolor. Sed nec magna nunc. Quisque blandit hendrerit dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent eu augue dui. Donec non leo non metus molestie mattis vel in libero. Suspendisse feugiat eget libero suscipit laoreet. Proin luctus faucibus bibendum. Nam eu euismod nisl. In tempus sapien eu imperdiet rutrum. Mauris mollis sapien nec orci tempus rhoncus. Integer eget mi mi. Phasellus sit amet eleifend ipsum. Aenean et nunc varius, mattis libero nec, commodo diam.</p>
                        <ListGroup variant="flush" >
                            <ListGroup.Item className="bg-transparent">Author: Sample Author Name</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Published: July 2014</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Category: Other</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent"><h5>Price: 34$</h5></ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col lg={4} className="py-4">
                        <Image src="/images/6.jpg" fluid />
                    </Col>
                    <Col lg={6} className="py-4">
                        <h2>Sample Book 6</h2>
                        <p>Morbi maximus elementum urna, a elementum erat. Ut quis orci dolor. Sed nec magna nunc. Quisque blandit hendrerit dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent eu augue dui. Donec non leo non metus molestie mattis vel in libero. Suspendisse feugiat eget libero suscipit laoreet. Proin luctus faucibus bibendum. Nam eu euismod nisl. In tempus sapien eu imperdiet rutrum. Mauris mollis sapien nec orci tempus rhoncus. Integer eget mi mi. Phasellus sit amet eleifend ipsum. Aenean et nunc varius, mattis libero nec, commodo diam.</p>
                        <ListGroup variant="flush" >
                            <ListGroup.Item className="bg-transparent">Author: Sample Author Name</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Published: July 2014</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Category: Other</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent"><h5>Price: 34$</h5></ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col lg={4} className="py-4">
                        <Image src="/images/7.jpg" fluid />
                    </Col>
                    <Col lg={6} className="py-4">
                        <h2>Sample Book 7</h2>
                        <p>Morbi maximus elementum urna, a elementum erat. Ut quis orci dolor. Sed nec magna nunc. Quisque blandit hendrerit dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent eu augue dui. Donec non leo non metus molestie mattis vel in libero. Suspendisse feugiat eget libero suscipit laoreet. Proin luctus faucibus bibendum. Nam eu euismod nisl. In tempus sapien eu imperdiet rutrum. Mauris mollis sapien nec orci tempus rhoncus. Integer eget mi mi. Phasellus sit amet eleifend ipsum. Aenean et nunc varius, mattis libero nec, commodo diam.</p>
                        <ListGroup variant="flush" >
                            <ListGroup.Item className="bg-transparent">Author: Sample Author Name</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Published: July 2014</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Category: Other</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent"><h5>Price: 34$</h5></ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col lg={4} className="py-4">
                        <Image src="/images/8.jpg" fluid />
                    </Col>
                    <Col lg={6} className="py-4">
                        <h2>Sample Book 8</h2>
                        <p>Morbi maximus elementum urna, a elementum erat. Ut quis orci dolor. Sed nec magna nunc. Quisque blandit hendrerit dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent eu augue dui. Donec non leo non metus molestie mattis vel in libero. Suspendisse feugiat eget libero suscipit laoreet. Proin luctus faucibus bibendum. Nam eu euismod nisl. In tempus sapien eu imperdiet rutrum. Mauris mollis sapien nec orci tempus rhoncus. Integer eget mi mi. Phasellus sit amet eleifend ipsum. Aenean et nunc varius, mattis libero nec, commodo diam.</p>
                        <ListGroup variant="flush" >
                            <ListGroup.Item className="bg-transparent">Author: Sample Author Name</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Published: July 2014</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Category: Other</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent"><h5>Price: 34$</h5></ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col lg={4} className="py-4">
                        <Image src="/images/9.jpg" fluid />
                    </Col>
                    <Col lg={6} className="py-4">
                        <h2>Sample Book 9</h2>
                        <p>Morbi maximus elementum urna, a elementum erat. Ut quis orci dolor. Sed nec magna nunc. Quisque blandit hendrerit dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent eu augue dui. Donec non leo non metus molestie mattis vel in libero. Suspendisse feugiat eget libero suscipit laoreet. Proin luctus faucibus bibendum. Nam eu euismod nisl. In tempus sapien eu imperdiet rutrum. Mauris mollis sapien nec orci tempus rhoncus. Integer eget mi mi. Phasellus sit amet eleifend ipsum. Aenean et nunc varius, mattis libero nec, commodo diam.</p>
                        <ListGroup variant="flush" >
                            <ListGroup.Item className="bg-transparent">Author: Sample Author Name</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Published: July 2014</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent">Category: Other</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent"><h5>Price: 34$</h5></ListGroup.Item>
                        </ListGroup>
                    </Col>


                </Row>
            </Container>





            <Footer />
        </div>
    )
}

export default Books
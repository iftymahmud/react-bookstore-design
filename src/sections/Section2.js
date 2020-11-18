import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'

function Section2() {
    return (
        <div className="section2Content">
            <Container className="text-center">
                <Image src="images/rasp.png" height="200px" />
                <h1 className="my-4">Welcome! This is <span className="rasp">Rasp</span> BookStore</h1>
                <h2 className="text-muted">A very modern bookstore that makes it easy to find<br />from classic to trendy books of any category.</h2>
                <hr className="mt-5" />


                <Row className="text-left mt-5">
                    <Col lg={3} sm={6}>
                        <h4><i className="fab fa-watchman-monitoring"></i> Latest Books</h4>
                        <p className="text-muted">Books are added to our library within a week of publishment. So expect to have all the latest books you can find </p>
                    </Col>
                    <Col lg={3} sm={6}>
                        <h4><i className="fas fa-globe-asia"></i> Famous Authors</h4>
                        <p className="text-muted">Books written by the world class writers are easily found here. From Aristottle to Dan Brown and From East to West.</p>
                    </Col>
                    <Col lg={3} sm={6}>
                        <h4><i className="fas fa-th"></i> Categorical Search</h4>
                        <p className="text-muted">We have implemented our own search algorithm for you to find your desired books from concerned categories.</p>
                    </Col>
                    <Col lg={3} sm={6}>
                        <h4><i className="fas fa-truck"></i> Home Delivery</h4>
                        <p className="text-muted">If you can't come to our store physically then don't worry. We have you covered by our home delivery service.</p>
                    </Col>
                </Row>



            </Container>

        </div>
    )
}

export default Section2;

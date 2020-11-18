import React from 'react'
import { Container, Button } from 'react-bootstrap'
function Section1() {
    return (
        <div className="landingImage">
            <Container>
                <div className="landingText">
                    <p>So many books, so little time.</p>
                    <h1>Great minds have consistently<br />envisioned
                    that Paradise<br />will be a sort of library.</h1>

                    <Button variant="secondary" href="/about" className="mx-1 my-4 px-4">Learn More</Button>
                    <Button variant="danger" href="/books" className="mx-1 my-4 px-4">See Books</Button>
                </div>

            </Container>
        </div>
    )
}

export default Section1;

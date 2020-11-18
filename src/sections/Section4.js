import React from 'react'
import { Container, Button } from 'react-bootstrap'
import Particles from 'react-particles-js'

function Section4() {
    return (
        <div className="section4Content">
            <Container className="text-center">
                <Particles height={"20rem"}
                    params={{
                        height: "10px",
                        "particles": {
                            "number": {
                                "value": 160
                            },
                            "size": {
                                "value": 1
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }}
                />
                <h2>Check out all the Books</h2>
                <Button variant="danger" href="/books" className="px-5 py-2 my-2 btn-lg">See Books</Button>
                <hr className="my-5" />
            </Container>

            <section class="newsletter">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="content">
                                <form>
                                    <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
                                    <div class="input-group">
                                        <input type="email" class="form-control" placeholder="Enter your email" />
                                        <span class="input-group-btn">
                                            <button class="btn">Subscribe Now</button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section4;

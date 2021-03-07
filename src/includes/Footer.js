import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-dark py-5">
            <Container>
                <Row>
                    <Col>
                        <div>
                            <Link to="/" className=" text-white text-decoration-none">
                                <h3>Logo</h3>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <nav className="d-flex flex-column align-items-start">
                            <Link to="/" className="text-white text-decoration-none"> Home</Link>
                            <Link to="/About" className="text-white text-decoration-none"> About</Link>
                            <Link to="/Contact" className="text-white text-decoration-none"> Contact</Link>
                        </nav>
                    </Col>
                    <Col>
                        <nav className="d-flex flex-column align-items-start">
                            <Link to="/" className="text-white text-decoration-none"> Home</Link>
                            <Link to="/About" className="text-white text-decoration-none"> About</Link>
                            <Link to="/Contact" className="text-white text-decoration-none"> Contact</Link>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

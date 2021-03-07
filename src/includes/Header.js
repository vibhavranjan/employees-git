import React from 'react'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'

export default function Header() {
    return (
            <header className="pt-3 pb-3 bg-dark">
                <Container>
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <Link to="/" className=" text-white text-decoration-none">
                                <h3>Logo</h3>
                            </Link>
                        </div>
                        <nav >
                            <Link to="/" className="ml-5 text-white text-decoration-none"> Home</Link>
                            <Link to="/About" className="ml-5 text-white text-decoration-none"> About</Link>
                            <Link to="/Contact" className="ml-5 text-white text-decoration-none"> Contact</Link>
                        </nav>
                    </div>
                </Container>
            </header>
    )
}

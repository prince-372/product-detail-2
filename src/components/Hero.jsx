import React, { useState } from "react";
import pagelogo from "../assets/image/logo.png";
import navicon from "../assets/image/nav-icon.png"
import { Container } from "react-bootstrap";
const Hero = () => {
    const [show, setShow] = useState(false);
    function menubar() {
      setShow(!show);
      if (show === false) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    }
    return (
        <div>

            <header>
                <nav className="nav-bg position-relative">
                    <Container>
                        <div className="d-flex justify-content-between align-items-center">
                            <ul className={` "ps-0 mb-0 d-lg-none"`}>
                                <li>
                                    <a href="#" className="text-decoration-none d-lg-none">
                                        <img
                                            src={pagelogo}
                                            alt="logo"
                                            className="rotation-animation"
                                            width="76"
                                        />
                                    </a>
                                </li>
                            </ul>
                            <label id="nav" className="position-relative z-3" onClick={menubar}>
                                <img src={navicon} alt="nav" className="navicon d-block d-lg-none" />
                            </label>
                                <ul className={`${ show ? "end-0" : "end-100"} ps-0 mb-0 d-flex justify-content-lg-end align-items-center gap-3 py_29-30 menubar`}>
                                <li>
                                    <a
                                        href="#home"
                                        className="text-decoration-none fs-s-md text-black fw-normal ff-roboto disgn"
                                    >
                                        HOME
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#sneakerkopen"
                                        className="text-decoration-none fs-s-md text-black fw-normal ff-roboto disgn"
                                    >
                                        SNEAKERS KOPEN
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#interview"
                                        className="text-decoration-none fs-s-md text-black fw-normal ff-roboto disgn"
                                    >
                                        INTERVIEWS
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#sale"
                                        className="text-decoration-none fs-s-md text-black fw-normal ff-roboto disgn"
                                    >
                                        SALE
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-decoration-none fs-s-md text-black fw-normal ff-roboto disgn"
                                    >
                                        SNEAKER VAN DE DAG
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-decoration-none fs-s-md text-black fw-normal ff-roboto disgn"
                                    >
                                        SNEAKER FORUM
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#blog"
                                        className="text-decoration-none fs-s-md text-black fw-normal ff-roboto disgn"
                                    >
                                        BLOG
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Container>
                </nav>
            </header>
        </div>
    );
};

export default Hero;
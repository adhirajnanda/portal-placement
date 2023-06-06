import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Adhiraj & Sujit CodeTech
                </h6>
                <p>
                  Our web experiences are high-performing, feature-packed and
                  digitally transformative, designed to be user-friendly, fully
                  functional, very secure and able to scale as your enterprise
                  grows.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Companies</h6>
                <p className="companies">
                  <Link
                    to="https://www.capgemini.com/in-en/"
                    target="_blank"
                    className="text-reset"
                  >
                    Capegimini
                  </Link>
                </p>
                <p className="companies">
                  <Link
                    to="https://www.goldmansachs.com/"
                    target="_blank"
                    className="text-reset"
                  >
                    Goldman-Sachs
                  </Link>
                </p>
                <p className="companies">
                  <Link
                    to="https://www.amazon.com/ref=nav_logo"
                    target="_blank"
                    className="text-reset"
                  >
                    Amazon
                  </Link>
                </p>
                <p className="companies">
                  <Link
                    to="https://www.accenture.com/in-en?c=acn_glb_sembrandpuregoogle_13471693&n=psgs_0323&gclid=Cj0KCQjwyLGjBhDKARIsAFRNgW--oXYk9PoZT33SU3yjs8z68cSruqIEgIs6wfMZwUO7udl4k1n90q4aAqiZEALw_wcB&gclsrc=aw.ds"
                    target="_blank"
                    className="text-reset"
                  >
                    Accenture
                  </Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Patna, Bihar 800020,
                  INDIA
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  sujitadhitech@codetech.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 91 900 666 2 666
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 91 900 666 2 666
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="foots text-center p-4"
          // style={{ backgroundColor: "teal", color: "white" }}
        >
          © 2023 Copyright:
          <a
            className=" text-reset fw-bold"
            href="https://mdbootstrap.com/"
            // style={{ color: "white" }}
          >
            Sujit and Adhiraj
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

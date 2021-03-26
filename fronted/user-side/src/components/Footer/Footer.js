import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter
      color="blue"
      className="text-center font-small pt-4 mt-4"
      style={{
        background: "#212121",
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        paddingLeft: "118px",
      }}
    >
      <MDBContainer fluid className="text-center text-white ">
        <MDBRow>
          <MDBCol md="12">
            <h5 className="title text-md-left" md="2">
              Smart-eShop
            </h5>
            <ul>
              <h6>
                <strong>Nuorodos</strong>
              </h6>
              <li className="list-unstyled">
                <a href="../About">Apie mus</a>
              </li>
              <li className="list-unstyled">
                <a href="../contact-us">Kontaktai</a>
              </li>
              <li className="list-unstyled">
                <a href="/terms-conditions">Apsipirkimo taisyklės</a>
              </li>
              <li className="list-unstyled">
                <a href="../category">Prekių kategorijos</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3 ">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="#" className="text-white">
            {" "}
            Smart-eShop.lt - Visos teisės saugomos{" "}
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;

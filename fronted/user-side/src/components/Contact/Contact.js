
import React from 'react';
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

const Contact = () => {
  return (
    <div
      style={{
        marginTop: "150px",
      }}
    >
      <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Kontaktai
        </h2>
        <MDBRow>
          <MDBCol lg="2" className="lg-0 mb-4"></MDBCol>
          <MDBCol lg="8">
            <div
              id="map-container"
              className="rounded z-depth-1-half map-container"
              style={{ height: "400px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2294.343972240492!2d23.916272251731318!3d54.89688468023656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e72276dd555557%3A0x2bf3519be19be30c!2sKauno%20Informacini%C5%B3%20technologij%C5%B3%20mokykla!5e0!3m2!1slt!2slt!4v1616704480172!5m2!1slt!2slt"
                title="This is a unique title"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
              />
            </div>
            <br />
            <MDBRow className="text-center">
              <MDBCol md="6">
                <p tag="a" floating color="blue" className="accent-1">
                  <MDBIcon icon="phone" />
                </p>
                <span>
                  <strong>Telefonas:</strong>
                </span>
                <p>+37060000078</p>
                <span>
                  <strong>Darbo laikas:</strong>
                </span>
                <p className="mb-md-0">Pirm - Penkt, 8:00-22:00</p>
              </MDBCol>
              <MDBCol md="6">
                <p tag="a" floating color="blue" className="accent-1">
                  <MDBIcon icon="envelope" />
                </p>
                <span>El.Paštas:</span>
                <p title="El.Paštas">
                  <strong>smart-eshop@gmail.com</strong>
                </p>
                <p className="mb-md-0">
                  <strong>pardavimai@gmail.com</strong>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
    </div>
  );
};

export default Contact;
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBView } from "mdbreact";
import React from "react";

const Cart = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
        </h2>
        <br />
        <MDBRow>
          <MDBCol lg="5" md="12" sm="12">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt=""
              />
            </MDBView>
          </MDBCol>
          <MDBCol lg="4">
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Mūsų istorija</strong>
            </h3>
            <p>
              Įsivaizduokite pasaulį, kuriame apsipirkimas internetu yra paprastas, smagus ir įkvepiantis. Pasaulį, kuriame nebereikia ieškoti kito geriausio varianto, nes žinote, kad jį jau radote.
            </p>
            <p>Mes tikime, kad toks pasaulis egzistuoja čia pat Žemėje, bet iki šiol buvo gerai saugoma paslaptis. Iki šiol. Mūsų misija yra nunešti jus ten, kur jūsų dar nebuvo nunešusi jokia kita interneto parduotuvė, tam, kad galėtumėt patirti apsipirkimo internetu patirtį tokią, kokia ji ir turėtų būti – patogi, greita ir svarbiausia patikima.</p>
            <p>Smart-eShop tai naujos kartos interneto parduotuvė, siūlanti platų buities technikos ir elektronikos prekių pasirinkimą puikiomis kainomis. Mūsų technikos ekspertų komanda dirba tam, kad kiekvienas mūsų pirkėjas rastų jo individualius poreikius geriausiai atitinkančias prekes. Didžiuojamės kurdami šią inovatyvią interneto platformą, kuria lengva ir malonu naudotis bei kuri nuolat tobulės laikui bėgant.</p>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
      </MDBCardBody>
    </MDBCard>
  );
};

export default Cart;

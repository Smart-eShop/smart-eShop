import React, { useState} from "react";
import {
  CButton,
  CCard,
  CCol,
  CForm,
  CInput,
  CCardFooter,
  CCardHeader,
  CCardBody,
  CFormGroup,
  CTextarea,
  CLabel,
  CRow,
  CAlert,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const AddPayment = ({ onReload }) => {
  const [paymentInput, setPayment] = useState("");
  const [paymentDescInput, setPaymentDesc] = useState("");
  const accessToken = localStorage.getItem("access_token");
  const [paymentAdded, setPaymentAdded] = useState(false);
  const [requestError, setRequestError] = useState(false);
  const [message, setMessage] = useState("");

  const AddPaymentFetch = (e) => {
    fetch(
      `https://eshopsmart.herokuapp.com/api/payment/store?name=${paymentInput}&terms=${paymentDescInput}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
      .then((response) => response.json())

      .then((data) => {
        console.log(data.message);
        setMessage(data.message);
        setTimeout(() => {
          setMessage("");
        }, 3000);
      })
      .catch((err) => {
        setRequestError(true);
        setPaymentAdded(false);
      });
  };

  return (
    <>
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              {message ? (
                <CAlert color="primary" closeButton>
                  {message}
                </CAlert>
              ) : null}
              {requestError ? (
                <CAlert color="warning" closeButton>
                  Klaida!
                </CAlert>
              ) : null}
              Pridėti apmokėjimą:
            </CCardHeader>
            <CCardBody>
              <CForm
                action=""
                method="post"
                encType="multipart/form-data"
                className="form-horizontal"
              >
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Apmokėjimo pavadinimas</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Pavadinimas"
                      value={paymentInput}
                      onInput={(e) => setPayment(e.target.value)}
                    />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Apmokėjimo sąlygos</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea
                      name="textarea-input"
                      rows="9"
                      placeholder="Sąlygos..."
                      value={paymentDescInput}
                      onInput={(e) => setPaymentDesc(e.target.value)}
                    />
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton
                type="submit"
                size="sm"
                color="primary"
                onClick={AddPaymentFetch}
              >
                <CIcon name="cil-scrubber" /> Sukurti naują
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default AddPayment;

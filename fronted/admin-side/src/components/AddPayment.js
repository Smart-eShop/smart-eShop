import React, { useState, useEffect } from 'react';
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
    CAlert
} from '@coreui/react'
import CIcon from '@coreui/icons-react'




const AddPayment = () => {

    const [paymentInput, setPayment] = useState('');
    const [paymentDescInput, setPaymentDesc] = useState('');
    const [deleteMessage, setDeleteMessage] = useState('');
    const accessToken = localStorage.getItem('access_token');
    const [paymentAdded, setPaymentAdded] = useState(false);
    const [requestError, setRequestError] = useState(false);


    const AddPaymentFetch = e => {
      fetch(`https://eshopsmart.herokuapp.com/api/payment/store?name=${paymentInput}&terms=${paymentDescInput}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
    
          'Authorization': `Bearer ${accessToken}`,
    
        }
    
      }
      )
        .then(response => response.json())
    
        .then(res => {
          console.log(res.message);
          if (res.message === "Payment method added to database successfully") { ///////cia nekeisti lietuviskai
            setPaymentAdded(true);
            setRequestError(false);
          } else {
            setRequestError(true);
            setPaymentAdded(false);
    
          }
        })
        .catch(err => {
          setRequestError(true);
          setPaymentAdded(false);
    
        })
    };

    


return (
    <>
    <CRow>
      <CCol xs="12" md="12">
        <CCard>
          <CCardHeader>
          {paymentAdded ? <CAlert color="primary" closeButton>Apmokėjimas pridėtas!</CAlert> : null}
          {requestError ? <CAlert color="warning" closeButton>Klaida!</CAlert> : null}
          Pridėti apmokėjimą:
        </CCardHeader>
          <CCardBody>
            <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Apmokėjimo pavadinimas</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="text-input" name="text-input" placeholder="Pavadinimas" value={paymentInput} onInput={e => setPayment(e.target.value)} />

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
                    value={paymentDescInput} onInput={e => setPaymentDesc(e.target.value)}
                  />
                </CCol>
              </CFormGroup>

            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary" onClick={AddPaymentFetch}><CIcon name="cil-scrubber" /> Sukurti naują</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
       
    </>
)
}

export default AddPayment
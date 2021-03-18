import React, { useState } from 'react';

import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CTextarea,
  CInput,
  CLabel,
  CRow,
  CAlert
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const AddDelivery = () => {
  const [deliveryAdded, setDeliveryAdded] = useState(false);
  const [requestError, setRequestError] = useState(false);



  const accessToken = localStorage.getItem('access_token');


  const AddDeliveryFetch = e => {
    fetch(`https://eshopsmart.herokuapp.com/api/delivery/store?name=${titleInput}&time=${keywordsInput}&price=${priceInput}&terms=${descriptionInput}`, {
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
        if (res.message === "Delivery method added to database successfully") { ///////cia nekeisti lietuviskai
          setDeliveryAdded(true);
          setRequestError(false);
        } else {
          setRequestError(true);
          setDeliveryAdded(false);

        }
      })
      .catch(err => {
        setRequestError(true);
        setDeliveryAdded(false);

      })
  };

  const [titleInput, setTitle] = useState('');
  const [descriptionInput, setDescription] = useState('');
  const [keywordsInput, setKeywords] = useState('');
  const [priceInput, setPrice] = useState('');


  return (
    <CRow>
      <CCol xs="12" md="12">
        <CCard>
          <CCardHeader>
            {deliveryAdded ? <CAlert color="primary">Pristatymo metodas pridėta!</CAlert> : null}
            {requestError ? <CAlert color="warning" closeButton>Klaida!</CAlert> : null}
          Pridėti pristatymą:

        </CCardHeader>
          <CCardBody>
            <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Pristatymo pavadinimas</CLabel>
                </CCol>
                <CCol xs="12" md="9">

                  <CInput id="text-input" name="text-input" placeholder="Pavadinimas" value={titleInput} onInput={e => setTitle(e.target.value)} />

                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">

                  <CLabel htmlFor="textarea-input">Pristatymo sąlygos</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CTextarea
                    name="textarea-input"

                    id="textareaUncaught TypeError: Cannot read property 'id' of nul-input"
                    rows="9"
                    placeholder="Sąlygos..."

                    value={descriptionInput} onInput={e => setDescription(e.target.value)}
                  />
                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">

                  <CLabel htmlFor="email-input">Pristatymo laikas</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput type="tag" id="email-input" name="email-input" placeholder="Pristatymo laikas pvz.: 1-2 d.d." autoComplete="tag" value={keywordsInput} onInput={e => setKeywords(e.target.value)} />

                </CCol>
              </CFormGroup>



              <CFormGroup row>
                <CCol md="3">

                  <CLabel htmlFor="text-input">Pristatymo kaina</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="text-input" name="text-input" placeholder="Kaina" value={priceInput} onInput={e => setPrice(e.target.value)} />

                </CCol>
              </CFormGroup>










            </CForm>
          </CCardBody>
          <CCardFooter>

            <CButton type="submit" size="sm" color="primary" onClick={AddDeliveryFetch}><CIcon name="cil-scrubber" /> Sukurti naują</CButton>

          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  )
}


  export default AddDelivery


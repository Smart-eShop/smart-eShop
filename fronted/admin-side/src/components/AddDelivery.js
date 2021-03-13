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
  CFormText,
  CTextarea,
  CInput,
  CInputFile,
  CLabel,
  CSelect,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const AddDelivery = () => {
  console.log('Bandymas')
  const AddDeliveryFetch = e => {
    fetch(`https://eshopsmart.herokuapp.com/api/delivery/store?name=${titleInput}&time=${keywordsInput}&price=${priceInput}&terms=${descriptionInput}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }

    }
    )
      .then(response => response.json())
      .then(json => {
        console.log(json)
      })
  };
  const [titleInput, setTitle] = useState('');
  const [descriptionInput, setDescription] = useState('');
  const [keywordsInput, setKeywords] = useState('');
  const [priceInput, setPrice] = useState('');


  return (
    <CRow>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Pridėti pristatymą
        </CCardHeader>
          <CCardBody>
            <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Pristatymo pavadinimas</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="text-input" name="text-input" placeholder="Tekstas" value={titleInput} onInput={e => setTitle(e.target.value)} />
                  <CFormText></CFormText>
                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="textarea-input">Sąlygos</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CTextarea
                    name="textarea-input"
                    id="textarea-input"
                    rows="9"
                    placeholder="Turinys..."
                    value={descriptionInput} onInput={e => setDescription(e.target.value)}
                  />
                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="email-input">Laikas</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput type="tag" id="email-input" name="email-input" placeholder="Įveskite laiką" autoComplete="tag" value={keywordsInput} onInput={e => setKeywords(e.target.value)} />
                  <CFormText className="help-block">Įveskite pristatymo laiką</CFormText>
                </CCol>
              </CFormGroup>



              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Kaina</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="text-input" name="text-input" placeholder="Tekstas" value={priceInput} onInput={e => setPrice(e.target.value)} />
                  <CFormText>Įveskite kainą</CFormText>
                </CCol>
              </CFormGroup>










            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary" onClick={AddDeliveryFetch}><CIcon name="cil-scrubber" /> Pateikti</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  )
}
export default AddDelivery
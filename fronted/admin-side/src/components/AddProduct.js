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
  CRow,
  CAlert
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const AddProduct = () => {
 const [productAdded, setProductAdded] = useState(false);
 const [requestError, setRequestError] = useState(false);
 const accessToken = localStorage.getItem('access_token');
  const AddProductFetch = e => {
    fetch(`https://eshopsmart.herokuapp.com/api/addItem?title=${titleInput}&description=${descriptionInput}&keywords=${keywordsInput}&img=${imgInput}&price=${priceInput}&discount=${discountInput}&quantity=${quantityInput}&weight=${weightInput}&size=${sizeInput}`,{
      method: "POST",
      headers : { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
       }

    }
    )
    .then(response => response.json())
    .then(res =>{
      console.log(res.message);
        if (res.message === "Delivery method added to database successfully") { ///////cia nekeisti lietuviskai
          setProductAdded(true);
          setRequestError(false);
        } else {
          setRequestError(true);
          setProductAdded(false);

        }
      })
      .catch(err => {
        setRequestError(true);
        setProductAdded(false);
      })
  };
  const [titleInput, setTitle] = useState('');
  const [descriptionInput, setDescription] = useState('');
  const [keywordsInput, setKeywords] = useState('');
  const [imgInput, setImg] = useState([]);
  const [priceInput, setPrice] = useState('');
  const [discountInput, setDiscount] = useState('');
  const [quantityInput, setQuantity] = useState('');
  const [weightInput, setWeight] = useState('');
  const [sizeInput, setSize] = useState('');


  return(
    <CRow>
    <CCol xs="12" md="12">
      <CCard>
        <CCardHeader>
        {productAdded ? <CAlert color="primary">Produktas pridėtas!</CAlert> : null}
            {requestError ? <CAlert color="warning" closeButton>Klaida!</CAlert> : null}
          Pridėti naują produktą:
        </CCardHeader>
        <CCardBody>
          <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
          <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="text-input">Produkto pavadinimas:</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="Pavadinimas" value={titleInput} onInput={e =>setTitle(e.target.value)} />
              </CCol>
            </CFormGroup>


            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="textarea-input">Produkto aprašymas:</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CTextarea 
                  name="textarea-input" 
                  id="textarea-input" 
                  rows="9"
                  placeholder="Aprašymas..." 
                  value={descriptionInput} onInput={e =>setDescription(e.target.value)}
                />
              </CCol>
            </CFormGroup>


            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="email-input">Žymės:</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput type="tag" id="email-input" name="email-input" placeholder="Žymes..." autoComplete="tag"  value={keywordsInput} onInput={e =>setKeywords(e.target.value)}/>
                
              </CCol>
            </CFormGroup>
            
            {/* <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="select">Select category</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CSelect custom name="select" id="select">
                  <option value="0">Please select</option>
                  <option value="1">Option #1</option>
                  <option value="2">Option #2</option>
                  <option value="3">Option #3</option>
                </CSelect>
              </CCol>
            </CFormGroup> */}


            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="text-input">Kaina</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="Kaina"  value={priceInput} onInput={e =>setPrice(e.target.value)}/>
                
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="text-input">Nuolaida</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="Nuolaida"  value={discountInput} onInput={e =>setDiscount(e.target.value)}/>
                
              </CCol>
            </CFormGroup>


            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="text-input">Dydis</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="Dydis"  value={sizeInput} onInput={e =>setSize(e.target.value)}/>
                
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="text-input">Kiekis</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="Kiekis"  value={quantityInput} onInput={e =>setQuantity(e.target.value)}/>
                
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="text-input">Svoris</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="Svoris"  value={weightInput} onInput={e =>setWeight(e.target.value)}/>
                
              </CCol>
            </CFormGroup>
        
            
            



            <CFormGroup row>
              <CCol md="3">
                <CLabel>Nuotraukos:</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInputFile 
                  id="file-multiple-input" 
                  name="file-multiple-input" 
                  multiple
                  custom
                  value={imgInput} onInput={e =>setImg(e.target.value)}
                />
                <CLabel htmlFor="file-multiple-input" variant="custom-file">
                  Pasirinkite failus...
                </CLabel>
              </CCol>
            </CFormGroup>
            
            
            
            
            
            
            
            
        
          </CForm>
        </CCardBody>
        <CCardFooter>
          <CButton type="submit" size="sm" color="primary" onClick={AddProductFetch}><CIcon name="cil-scrubber" /> Pridėti produktą</CButton>
        </CCardFooter>
      </CCard>
  </CCol>
  </CRow>
  )
  }
  export default AddProduct
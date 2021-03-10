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


const AddProduct = () => {
  console.log('Bandymas')
  const AddProductFetch = e => {
    fetch(`https://eshopsmart.herokuapp.com/api/addItem?title=${titleInput}&description=${descriptionInput}&keywords=${keywordsInput}&img=${imgInput}&price=${priceInput}&discount=${discountInput}&quantity=${quantityInput}&weight=${weightInput}&size=${sizeInput}`,{
      method: "POST",
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    }
    )
    .then(response => response.json())
    .then(json =>{
      console.log(json)
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
  const [sizeInput, setsize] = useState('');
  // const [collapsed, setCollapsed] = React.useState(true)
  // const [showElements, setShowElements] = React.useState(true)

  return(
    <CRow>
    <CCol xs="12" md="6">
      <CCard>
        <CCardHeader>
          Add product
        </CCardHeader>
        <CCardBody>
          <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
          <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="text-input">Product name</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="Text" value={titleInput} onInput={e =>setTitle(e.target.value)} />
                <CFormText>This is a help text</CFormText>
              </CCol>
            </CFormGroup>


            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="textarea-input">Product description</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CTextarea 
                  name="textarea-input" 
                  id="textarea-input" 
                  rows="9"
                  placeholder="Content..." 
                  value={descriptionInput} onInput={e =>setDescription(e.target.value)}
                />
              </CCol>
            </CFormGroup>


            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="email-input">Enter keywords</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput type="tag" id="email-input" name="email-input" placeholder="Enter tags" autoComplete="tag"  value={keywordsInput} onInput={e =>setKeywords(e.target.value)}/>
                <CFormText className="help-block">Please enter your email</CFormText>
              </CCol>
            </CFormGroup>
            
            <CFormGroup row>
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
            </CFormGroup>


            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="text-input">Price</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="Text"  value={priceInput} onInput={e =>setPrice(e.target.value)}/>
                <CFormText>This is a help text</CFormText>
              </CCol>
            </CFormGroup>


            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="text-input">Size</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="Text"  value={sizeInput} onInput={e =>setsize(e.target.value)}/>
                <CFormText>This is a help text</CFormText>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
            <CCol xs="3">
                    <CLabel htmlFor="quantity">Quantity</CLabel>
                    </CCol>
                    <CCol xs="12" md='3'>
                    <CInput id="quantity" placeholder="12"  value={quantityInput} onInput={e =>setQuantity(e.target.value)}/>

                </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel>Multiple File input</CLabel>
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
                  Choose Files...
                </CLabel>
              </CCol>
            </CFormGroup>
            
            
            
            
            
            
            
            
        
          </CForm>
        </CCardBody>
        <CCardFooter>
          <CButton type="submit" size="sm" color="primary" onClick={AddProductFetch}><CIcon name="cil-scrubber" /> Submit</CButton>
          <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
        </CCardFooter>
      </CCard>
  </CCol>
  </CRow>
  )
  }
  export default AddProduct
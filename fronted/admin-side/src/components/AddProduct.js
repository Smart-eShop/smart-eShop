import React from 'react';
import { Link, Redirect, Route, BrowserRouter as Router } from 'react-router-dom';

import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const AddProduct = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

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
                <CInput id="text-input" name="text-input" placeholder="Text" />
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
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="email-input">Enter tags</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput type="tag" id="email-input" name="email-input" placeholder="Enter tags" autoComplete="tag"/>
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
                <CInput id="text-input" name="text-input" placeholder="Text" />
                <CFormText>This is a help text</CFormText>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="text-input">Size</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="Text" />
                <CFormText>This is a help text</CFormText>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
            <CCol xs="3">
                    <CLabel htmlFor="cvv">Units</CLabel>
                    </CCol>
                    <CCol xs="12" md='3'>
                    <CInput id="cvv" placeholder="12" required/>

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
                />
                <CLabel htmlFor="file-multiple-input" variant="custom-file">
                  Choose Files...
                </CLabel>
              </CCol>
            </CFormGroup>
            
            
            
            
            
            
            
            
        
          </CForm>
        </CCardBody>
        <CCardFooter>
          <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
          <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
        </CCardFooter>
      </CCard>
  </CCol>
  </CRow>
  )
  }
  export default AddProduct
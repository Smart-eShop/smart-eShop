import React, { useState } from 'react';
import TheLayout from '../containers/TheLayout'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'




const Login = () => {
  const [redir, setRedir] = useState(false);
  const [emailInput, setEmail] = useState('');
  const [passwordInput, setPassword] = useState('');

  const [userNameInput, userSetName] = useState('');
  const [userPasswordInput, userSetPassword] = useState('');




  async function userLoginFetch() {

    fetch(`https://eshopsmart.herokuapp.com/api/login?name=${userNameInput}&password=${userPasswordInput}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
    })

      .then(data => data.json())
      .then(data => JSON.parse(JSON.stringify(data.access_token)))
      .then(data => localStorage.setItem('access_token', data))
      .then(setRedir(true))
  }


  async function loginFetch() {
    fetch(`https://eshopsmart.herokuapp.com/api/login/admin?email=${emailInput}&password=${passwordInput}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
    })


      .then(data => data.json())
      .then(data => JSON.parse(JSON.stringify(data.access_token)))
      .then(data => localStorage.setItem('access_token', data))
      .then(setRedir(true))
  }





  if (redir) {
    return (<TheLayout />)
  }





  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-3">
                <CCardBody>
                  <CForm  >

                    <h3>Administratoriaus prisijungimas</h3>
                    <p className="text-muted">Prisijunkite prie savo paskyros</p>

                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="El.Paštas" autoComplete="email"
                        value={emailInput} onInput={e => setEmail(e.target.value)} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Slaptažodis" autoComplete="current-password"
                        value={passwordInput} onInput={e => setPassword(e.target.value)} />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" onClick={loginFetch} type='submit' className="px-4">Prisijungti</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Pamiršote slaptažodį?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>


              <CCard className="text-white bg-primary p-3 d-md-down" >


                <CCardBody>
                  <CForm  >
                    <h3> Pardavėjų prisijungimas</h3>
                    <p className="text-muted">Prisijunkite prie savo paskyros</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Vardas" autoComplete="Name"
                        value={userNameInput} onInput={e => userSetName(e.target.value)} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Slaptažodis" autoComplete="current-password"
                        value={userPasswordInput} onInput={e => userSetPassword(e.target.value)} />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="secondary" onClick={userLoginFetch} type='submit' className="px-4">Prisijungti</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>








                {/* <CCardBody className="text-center">
                  <div>
                    <h2>Registruotis</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}
                      >Registruokis dabar!</CButton>
                    </Link>
                  </div>
                </CCardBody> */}
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>

    </div>
  )
}


export default Login

import React, { useState } from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CModalFooter,
  CModalBody,
  CModalHeader,
  CModal
} from '@coreui/react'
import { DocsLink } from 'src/reusable'


const UserRoles = () => {



  fetch(`https://eshopsmart.herokuapp.com/api/users`, {
    method: "GET",
    headers: {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMWVmZDhiNjczOTA4MGVhZjFjNmJjYTU5OWRjM2NjY2VlZmI3NTFiY2MzZDc5MTRiMWVjNTQ3MDEzNDg0NzgwMjlkZmI4ZGYyNGY4ODI3ODEiLCJpYXQiOiIxNjE1MTUzNjI4Ljc2MzcyMiIsIm5iZiI6IjE2MTUxNTM2MjguNzYzNzMxIiwiZXhwIjoiMTY0NjY4OTYyOC43NTMwMDEiLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.raI1yRurKJrRUDasNqPic0oq6lDv8oGEBdh6T0oO62eiibtMqjwdGW3cOGFRq3OVnbErx6My1Q6WgZyiGkEAPXqa1qc_yjv - iLTRbCnF3w3OxzUF7caHq1K_ - wenNBOtKSL - UzpoTQEBWfYgEknsWA8Gf3Y - UR7uTSYbJq0HMkmI72aujgOhHxAXIhFQSRJdvqVqeDjC4uwea4yeUkt - Q - Knz24rirWk4byctwDiVFOBgQwAL8kb4TwmB_nhrKTO3e4_1TZGlRImkBaWaqgr1Xv - FL6hHQ_BMz2BLlki1dN9GEujf8hOSKUpyHI5hyNw7f0WvhNdp9mIZmn - J3X78XJTGiRL2_7aT7pdF2aBhcD3VOWIDuhkOTVj - KEnYZzqXe5Uuh7wl2ZmQql4toKjM9ERYDmvGmL2DlBH7ceKMtLns5hZOV__U0uc8cHF5PNHBwQBjjqx9w9Phlvqs4tF - pwVlwG - T9G_8PUy1BDFXK4bX0ExIMDcODmBZzCxEreCFtlOylE221gQmd_xF9O3cNmKeX - 5LkNcmFPyBlsY_LenxluSpLR6leNcFuBKIqjsPD6TzIRzghu2HxE71WFf5llTmyCWK6D_eOoOsRzInGicbBSh9- fQGWEcBjlnOhbY0NXbS - nhmyY9Z0veNiCm6RNNkuxpErfhtU9mQcnDyrY',
      'Content-Type': 'application/json'
    },

  }

  )
    .then(response => response.json())
    .then(json => {
      console.log(json)
    })




  const [modal, setModal] = useState(false)
  const [editModal, setEdit] = useState(false)
  const toggle = () => {
    setModal(!modal);
  }
  const toggleEdit = () => {
    setEdit(!modal);
  }


  return (
    <>
      <CCard>
        <CCardHeader>
          Vartotojai
          <DocsLink href="https://coreui.io/docs/content/typography/" />
        </CCardHeader>
        <CCardBody>


          <CModal
            show={modal}
            onClose={toggle}
          >
            <CModalHeader closeButton>Ar tikrai norite ištrinti vartotoją?</CModalHeader>
            {/* <CModalBody>
          Lorem ipsum dolor...
        </CModalBody> */}
            <CModalFooter>
              <CButton color="danger">Ištrinti</CButton>{' '}
              <CButton
                color="secondary"
                onClick={toggle}
              >Atšaukti
          </CButton>
            </CModalFooter>
          </CModal>
          <CModal
            show={editModal}
            onClose={toggleEdit}
          >
            <CModalHeader closeButton>Ar tikrai norite pakeisti vartotojo vaidmenį?</CModalHeader>
            <CModalBody>
              <select id="roles">
                <option value="Admin">Administratorius</option>
                <option value="Seler">Pardavėjas</option>
                <option value="User">Vartotojas</option>
              </select>
            </CModalBody>
            <CModalFooter>
              <CButton color="warning">Keisti</CButton>{' '}

              <CButton
                color="secondary"
                onClick={toggleEdit}
              >Atšaukti</CButton>
            </CModalFooter>
          </CModal>
          <p>Ištrinti vartotojus, pakeisti roles.</p>
          <table className="table">
            <thead>
              <tr>
                <th>Vartotojo ID</th>
                <th>Vartotojo vardas</th>
                <th>Rolė</th>
                <th>Pakeisti rolę</th>
                <th>Ištrinti</th>
              </tr>

            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="h5">1</span>
                </td>
                <td>
                  <span className="h5">Vartotojas</span>
                </td>
                <td>
                  <span className="h5">Vartotojas</span>
                </td>
                <td>
                  <CButton
                    color="warning"
                    onClick={toggleEdit}
                    className="mr-1"
                  >Pakeisti rolę</CButton>
                </td>
                <td>
                  <CButton
                    color="danger"
                    onClick={toggle}
                    className="mr-1"
                  >Ištrinti</CButton>
                </td>
              </tr>
            </tbody>
          </table>
        </CCardBody>
      </CCard>
    </>
  )
}

export default UserRoles

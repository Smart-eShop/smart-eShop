import React, { useState, useEffect } from 'react'
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
  const [list, setList] = useState({});


  useEffect(() => {
    let mounted = true;
    const accessToken = localStorage.getItem('access_token');

    fetch(`https://eshopsmart.herokuapp.com/api/users`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    })
      .then(users => users.json())
      .then(users => setList(users))
      .then(users => setList(users))
      .then(console.log(list))

    // .then(users => {
    //   if (mounted) {
    //     setList(users)
    //   }
    // })
    return () => mounted = false;
  }, [])





  // const data = getdata();
  // console.log(data);

  //   <

  // element.created_at

  // element.email

  // element.first_name

  // element.id

  // element.is_banned

  // element.last_name

  // element.name

  // element.role







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
          Users
          <DocsLink href="https://coreui.io/docs/content/typography/" />
        </CCardHeader>
        <CCardBody>


          <CModal
            show={modal}
            onClose={toggle}
          >
            <CModalHeader closeButton>Do you really want to delete user?</CModalHeader>
            {/* <CModalBody>
          Lorem ipsum dolor...
        </CModalBody> */}
            <CModalFooter>
              <CButton color="danger">Delete</CButton>{' '}
              <CButton
                color="secondary"
                onClick={toggle}
              >Cancel
          </CButton>
            </CModalFooter>
          </CModal>
          <CModal
            show={editModal}
            onClose={toggleEdit}
          >
            <CModalHeader closeButton>Do you really want to change user role?</CModalHeader>
            <CModalBody>
              <select id="roles">
                <option value="admin">Admin</option>
                <option value="Seler">Seler</option>
                <option value="User">User</option>
              </select>
            </CModalBody>
            <CModalFooter>
              <CButton color="warning">Change</CButton>{' '}

              <CButton
                color="secondary"
                onClick={toggleEdit}
              >Cancel</CButton>
            </CModalFooter>
          </CModal>
          <p>Delete users, change roles.</p>

          <ul>
            {/* {list.map(item => <li>{item.id}</li>)} */}
            {/* {list.forEach(element => <li>{element.id}</li>)} */}
          </ul>

          <table className="table">
            <thead>
              <tr>

                <th>User ID</th>
                <th>User Name</th>
                <th>Role</th>
                <th>Edit Role</th>
                <th>Delete</th>
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
                  <span className="h5">user</span>
                </td>
                <td>
                  <CButton
                    color="warning"
                    onClick={toggleEdit}
                    className="mr-1"
                  >Edit Role</CButton>
                </td>
                <td>
                  <CButton
                    color="danger"
                    onClick={toggle}
                    className="mr-1"
                  >Delete</CButton>
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

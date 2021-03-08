import React, { useState } from 'react';
import {
    CButton,
    CCard,
    CCol,
    CForm,
    CInput,
    CInputGroup,
    CRow,
    CCardHeader,
    CCardBody,
    CModalFooter,
    CModalBody,
    CModalHeader,
    CModal
} from '@coreui/react'


const AllCategories = () => {

    const [categoryInput, setCategory] = useState('');


    return (

        <>
            <CRow className="justify-content-left ml-1">
                <CForm>
                    <h2>Add new category</h2>
                    <CInputGroup className="mb-3">
                        <CInput type="text" placeholder="Category" autoComplete="category"
                            value={categoryInput} onInput={e => setCategory(e.target.value)} />
                    </CInputGroup>
                    <CRow>
                        <CCol xs="6">
                            <CButton color="primary" className="px-4 mb-5">Submit</CButton>
                        </CCol>
                    </CRow>
                </CForm>
            </CRow>
            <CCard>
                <CCardHeader>
                    <h3>All Categories</h3>
                </CCardHeader>
                <CCardBody>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Category ID</th>
                                <th>Category</th>
                                <th>Delete</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <span className="h5">1</span>
                                </td>
                                <td>
                                    <span className="h5">Category name</span>
                                </td>
                                <td>
                                    <CButton
                                        color="danger"
                                        //   onClick={toggle}
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

export default AllCategories
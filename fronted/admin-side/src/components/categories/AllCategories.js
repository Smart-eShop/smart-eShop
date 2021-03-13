import React, { useState, useEffect } from 'react';
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
    CLink,
    CAlert
} from '@coreui/react'
import CIcon from '@coreui/icons-react'



const AllCategories = () => {

    const [categoryAdded, setCategoryAdded] = useState(false);
    const [requestError, setRequestError] = useState(false);
    const accessToken = localStorage.getItem('access_token');

    const [printCategories, setPrintCategories] = useState([]);

    const printAllCategories = async () => {
        const url = 'https://eshopsmart.herokuapp.com/api/categories';
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.Categories);
        setPrintCategories(data.Categories);
        setLoading(false);
    }


    useEffect(() => {
        printAllCategories();
    }, [])

    const [deleteMessage, setDeleteMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const deleteCategory = async (id) => {
        const url = `https://eshopsmart.herokuapp.com/api/delete-category/category=${id}`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);

        if (data.message) {
            setDeleteMessage(data.message)
        }

    }
    useEffect(() => {
        deleteCategory();
    }, [])

    const categoryFetch = () => {
        fetch(`https://eshopsmart.herokuapp.com/api/create-category?category_name=${categoryInput}`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        }
        )
            .then(response => response.json())
            .then(res => {

                console.log(res.message);
                if (res.message === "Kategorija sėkmingai sukurta!") {
                    setCategoryAdded(true);
                    setRequestError(false);
                } else {
                    setRequestError(true);
                    setCategoryAdded(false);
                }
            })
            .catch(err => {
                setRequestError(true);
                setCategoryAdded(false);
            })
    };

    const [categoryInput, setCategory] = useState('');
    // const [delCatInput, setDelCatInput] = useState('');
    // printAllCategories();

    return (
        <>
            <CRow className="justify-content-left ml-1">
                <CForm>
                    {categoryAdded ? <CAlert color="primary" closeButton>Kategorija pridėta!</CAlert> : null}
                    {requestError ? <CAlert color="warning" closeButton>Klaida!</CAlert> : null}
                    <h2>Pridėti naują kategoriją</h2>
                    <CInputGroup className="mb-3">
                        <CInput type="text" placeholder="Kategorija" autoComplete="category"
                            value={categoryInput} onInput={e => setCategory(e.target.value)} />
                    </CInputGroup>
                    <CRow>
                        <CCol xs="6">
                            <CButton color="primary" className="px-4 mb-5" onClick={categoryFetch}>Pateikti</CButton>
                        </CCol>
                    </CRow>
                </CForm>
            </CRow>
            <CCard>
                <CCardHeader>
                    <h3>Visos kategorijos</h3>
                </CCardHeader>
                {deleteMessage ? <CAlert color="primary" closeButton>{deleteMessage}</CAlert> : null}
                <CCardBody>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Kategorijos ID</th>
                                <th>Kategorija</th>
                                <th>Ištrinti</th>
                            </tr>

                        </thead>
                        <tbody>
                            {printCategories.map((category) => (
                                <tr>
                                    <td>
                                        {category.id}
                                    </td>
                                    <td>
                                        {category.category_name}
                                    </td>
                                    <td>
                                        <CButton
                                            onClick={() => deleteCategory(category.id)}
                                            className="mr-1"
                                        ><CIcon size={'lg'} name={'cilTrash'}></CIcon></CButton>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </CCardBody>
            </CCard>
        </>
    )
}

export default AllCategories
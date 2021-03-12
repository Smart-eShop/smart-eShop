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
    console.log("bandymas")

    // const deleteFetch = e => {
    
    //     console.log("delete category")
    
    //     fetch(`https://eshopsmart.herokuapp.com/api/delete-category/category=${delCatInput}`, {
    //       method: "POST",
    //     }
    //     )
    //       .then(response => response.json())
         
    //       .then(json => console.log(json));
    //   }

    const [printCategories, setPrintCategories] = useState([]);

const printAllCategories = async() => {
    const url = 'https://eshopsmart.herokuapp.com/api/categories';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.Categories);
    setPrintCategories(data.Categories);
}


useEffect(()=>{
    printAllCategories();
}, [])

 const [idInput, setIdInput] = useState('');
 const [deleteCat, setDeleteCat] = useState(false);

const deleteCategory = async() => {
    const url = `https://eshopsmart.herokuapp.com/api/delete-category/category=${idInput}`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json();
    console.log(data);
    // setIdInput(true);
}
useEffect(()=>{
    deleteCategory();
}, [])

// const deleteCategory = () => {
//     fetch(`https://eshopsmart.herokuapp.com/api/delete-category/category=${idInput}`, {
//         method: "POST",
//         headers: {
//             'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTlmMWQzODUxODkzMDE4YTkwODg0MWZlMzJkZjUxNGVhZTMyMDI5ZTIzZmRkMTZiNjFjZmM3OWJkNDExZDk2NjNhMDU4ZmEzNzRkZWFiNTgiLCJpYXQiOiIxNjE1NTU5ODYyLjI2ODg3NSIsIm5iZiI6IjE2MTU1NTk4NjIuMjY4ODgxIiwiZXhwIjoiMTY0NzA5NTg2Mi4yNjI5MTciLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.tAU_ZIMr9gQC6Hb9e4W-D7eP_Ze_bgSrQ73Adm8y1jLJostCDHE_byHrLCpSEWRLM0F1uj5fsB9NXwLnIFLhEpi6kcBrjPMhhDgEdt-ca5HqzTKyoPLE29h4xiJ40ZRZMcAhfb6xJW9NG5yCRJahmJtWrsROuLOUOr00B7QWyUbgCSZ7ioa4_RDbn9tYO4ujEmf-hAHxvdg1416cTPCZF8zQCkR0rpo8tuMHeqB1iipeJElbjvijk_Kex-SsIk7v699PitL8ayYTDXSJaa0RizcE0g37r168S-MEbCICdpfRvbiDds2nSOn_0OoXVLZIX_dBYb6MxyzjwwdXVEEb5jTTDS0uKt0dGF6U_bULOUt8c5cWDaadMkimbgheClhxqllcnGW3KcddCLYFPXEn18YG5AX9A-QRR09snUCamrS8QrzlowpO7psJg1pWeasLdqxD7Vtn5BSDBngojuPyGPgatUdjoPtn5J_AiGSfQYVomFkcbVHQvQum24BAnXAYSjNWPiH2f7HLPnZCQIFIJap9npUkjWvv9TNc3DA70JwP_Ny8Wtue94hIzm2k9AFAfw42mtC70BQNjtme0debwQ2JniCowBJv-guADL9Pt0ahPB4E4DF04TedDa3RQuoKzyXl-azhBfb4e0cqNKiqx4rPZ2goe84Ou2R9P637lyI',
//             'Content-Type': 'application/json'
//         }
//     }
//     )
//         .then(response => response.json())
//         .then(res => {

//             console.log(res);
         
        //     if (res.message === "") {
        //         setCategoryAdded(true);
        //         setRequestError(false);
        //     } else {
        //         setRequestError(true);
        //         setCategoryAdded(false);
        //     }
        // })
        // .catch(err => {
        //     setRequestError(true);
        //     setCategoryAdded(false);
        // })
        
// })
// }

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
                if (res.message === "Category is created successfully!") {
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
                    <h2>Add new category</h2>
                    <CInputGroup className="mb-3">
                        <CInput type="text" placeholder="Category" autoComplete="category"
                            value={categoryInput} onInput={e => setCategory(e.target.value)} />
                    </CInputGroup>
                    <CRow>
                        <CCol xs="6">
                            <CButton color="primary" className="px-4 mb-5" onClick={categoryFetch}>Submit</CButton>
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
                            {printCategories.map((category)=>(
                                <tr>
                                    <td value={()=>setIdInput(category.id)} >
                                  {category.id}
                                    </td>
                                    <td>
                                  {category.category_name}
                                </td>
                                <td>  
                                    <CButton
                                          onClick={deleteCategory}
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
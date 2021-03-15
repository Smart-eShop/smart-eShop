import React, { useState, useEffect } from 'react';

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


const AllDelivery = () => {
  const [deliveryAdded, setDeliveryAdded] = useState(false);
  const [requestError, setRequestError] = useState(false);
  const [delivery, setDelivery] = useState([]);


  const accessToken = localStorage.getItem('access_token');
  // const [printDeliveries, setPrintDeliveries] = useState([]);

  useEffect(() => {
    fetch("https://eshopsmart.herokuapp.com/api/delivery/show", {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          setLoading(true);
          console.log(result);
          const show = result;
          setDelivery(show.delivery);
        },
        (error) => {
          setLoading(true);
          setRequestError(error);
        }
      )
  }, [accessToken])


  const [deleteMessage, setDeleteMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // const deleteDelivery = async () => {
  //   const url = 'smart.test/api/delivery/delete';
  //   setLoading(true);
  //   const response = await fetch(url);

  //   const data = await response.json();
  //   console.log(data);

  //   if (data.message) {
  //     setDeleteMessage(data.message)
  //   }
  // }
  // useEffect(() => {
  //   deleteDelivery();
  // }, [])


  const [titleInput, setTitle] = useState('');
  const [descriptionInput, setDescription] = useState('');
  const [keywordsInput, setKeywords] = useState('');
  const [priceInput, setPrice] = useState('');

  if(requestError){
    return <div>requestError:{requestError.message}</div>
  } else if (!loading){
    return <h1>Kraunama...</h1>
  } else if (loading){

  return (
    
        <CCard>
          <CCardHeader>
            <h3>Visi pristatymo būdai:</h3>
          </CCardHeader>
          {deleteMessage ? <CAlert color="primary" closeButton>{deleteMessage}</CAlert> : null}
          <CCardBody>
            delivery ={delivery}
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Pavadinimas</th>
                  <th>Pristatymo laikas</th>
                  <th>Kaina</th>
                  <th>Sąlygos</th>
                  <th>Naikinti</th>
                </tr>

              </thead>
              <tbody>
              
                <tr>
                  <td>
                    {/* {delivery.id} */}
                  </td>
                  <td>
                    {/* {delivery.name} */}
                  </td>
                  <td>
                    {/* {delivery.time} */}
                  </td>
                  <td>
                    {/* {delivery.price} */}
                  </td>
                  <td>
                    {/* {delivery.terms} */}
                  </td>
                  <td>
                    {/* <CButton
                      onClick={() => deleteDelivery(delivery.id)}
                      className="mr-1"
                    ><CIcon size={'lg'} name={'cilTrash'}></CIcon></CButton> */}

                  </td>

                </tr>
                
              </tbody>

            </table>
          </CCardBody>
        </CCard>
  )
}
}
export default AllDelivery
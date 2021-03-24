import React, { useState, useEffect } from "react";

import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CButton,
  CCard,
  CCardBody,
  CBadge,
  CDataTable,
  CCollapse,
} from "@coreui/react";
import AddDelivery from "./AddDelivery";
// import CIcon from '@coreui/icons-react'

const DeliveryTable = () => {
  // const [deliveryAdded, setDeliveryAdded] = useState(false);
  const [requestError, setRequestError] = useState(false);
  const [delivery, setDelivery] = useState([]);
  // const [deleteMessage, setDeleteMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [primary, setPrimary] = useState(false);
  const accessToken = localStorage.getItem("access_token");

  function fetchData() {
    fetch("https://eshopsmart.herokuapp.com/api/delivery/show", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setLoading(true);
          console.log(result);
          const object = result;
          setDelivery(object.Delivery);
        },
        (requestError) => {
          setLoading(true);
          setRequestError(requestError);
        }
      );
  }

  useEffect(() => {
    fetchData();
  }, [AddDelivery, primary]);

  function deleteDelivery(id) {
    fetch(`https://eshopsmart.herokuapp.com/api/delivery/delete/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        fetchData();
        console.log(data);
      });
  }

  const [details, setDetails] = useState([]);
  // const [items, setItems] = useState(usersData)

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  const fields = [
    { key: "id", _style: { width: "1%" } },
    { key: "name", _style: { width: "5%" } },
    { key: "time", _style: { width: "5%" } },
    { key: "price", _style: { width: "5%" } },
    // { key: 'Pristatymo sąlygos', _style: { width: '5%' } },

    {
      key: "show_details",
      label: "",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  const getBadge = (status) => {
    switch (status) {
      case "Active":
        return "success";
      case "Inactive":
        return "secondary";
      case "Pending":
        return "warning";
      case "Banned":
        return "danger";
      default:
        return "primary";
    }
  };

  if (requestError) {
    return <div>requestError:{requestError.message}</div>;
  } else if (!loading) {
    return <h1>Kraunama...</h1>;
  } else if (loading) {
    return (
      <>
        <CButton
          color="primary"
          onClick={() => setPrimary(!primary)}
          className="mr-1"
        >
          Sukurti naują pristatymą
        </CButton>

        <CModal
          show={primary}
          onClose={() => {
            setPrimary(!primary);
          }}
          color="primary"
        >
          <CModalHeader closeButton>
            <CModalTitle>Sukurti naują apmokėjimą</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <AddDelivery />
          </CModalBody>
        </CModal>

        <CDataTable
          items={delivery}
          fields={fields}
          columnFilter
          tableFilter
          footer
          itemsPerPageSelect
          itemsPerPage={20}
          hover
          sorter
          pagination
          scopedSlots={{
            status: (item) => (
              <td>
                <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
              </td>
            ),
            show_details: (item, index) => {
              return (
                <td className="py-2">
                  <CButton
                    color="primary"
                    variant="outline"
                    shape="square"
                    size="sm"
                    onClick={() => {
                      toggleDetails(index);
                    }}
                  >
                    {details.includes(index) ? "Paslėpti" : "Rodyti"}
                  </CButton>
                </td>
              );
            },
            details: (item, index) => {
              return (
                <CCollapse show={details.includes(index)}>
                  <CCardBody>
                    <h4>{item.name}</h4>
                    <p className="text-muted">{item.time}</p>
                    <p>{item.price}</p>
                    <p>{item.terms}</p>

                    {/* <CButton size="sm" color="info">
												Redaguoti
					  </CButton> */}
                    <CButton
                      onClick={() => deleteDelivery(item.id)}
                      size="sm"
                      color="danger"
                      className="ml-1"
                    >
                      Ištrinti pristatymo būdą
                    </CButton>
                  </CCardBody>
                </CCollapse>
              );
            },
          }}
        />
      </>
    );
  }
};

const AllDelivery = () => {
  return (
    <>
      <CCard>
        <CCardBody>
          <DeliveryTable />
        </CCardBody>
      </CCard>
    </>
  );
};

export default AllDelivery;

import React, { useState, useEffect } from "react";
import {
  CCard,
  CAlert,
  CCardBody,
  CButton,
  CBadge,
  CDataTable,
  CCollapse,
  CDropdown,
  CDropdownToggle,
  CDropdownItem,
  CDropdownMenu,
} from "@coreui/react";

const OrderTable = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [kart, setKart] = useState();

  const accessToken = localStorage.getItem("access_token");
  function getUserData() {
    fetch("https://eshopsmart.herokuapp.com/api/orders", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          console.log("data", data.orders);
          const userObj = data;
          setUsers(userObj.orders);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }

  useEffect(() => {
    getUserData();
  }, []);

  function changeStatus(id, status) {
    fetch(
      `https://eshopsmart.herokuapp.com/api/order/update-order-status/order=${id}?order_status_id=${status}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((data) => data.json())
      .then((data) => {
        getUserData();
        console.log(data);
        setMessage(data.message);
        getUserData();
        setTimeout(() => {
          setMessage("");
        }, 3000);
      });
  }

  function banUser(id) {
    fetch(
      `https://eshopsmart.herokuapp.com/api/ban/user_id=${id}?is_banned=1`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((data) => data.json())
      .then((data) => {
        getUserData();
        console.log(data);
        setMessage(data.message);
        getUserData();
        setTimeout(() => {
          setMessage("");
        }, 3000);
      });
  }
  function unBan(id) {
    fetch(`https://eshopsmart.herokuapp.com/api/unban/user_id=${id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        getUserData();
        console.log(data);
        setMessage(data.message);
        getUserData();
        setTimeout(() => {
          setMessage("");
        }, 3000);
      });
  }
  function deleteUser(id) {
    fetch(`https://eshopsmart.herokuapp.com/api/delete/user_id=${id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        getUserData();
        console.log(data);
        setMessage(data.message);
        getUserData();
        setTimeout(() => {
          setMessage("");
        }, 3000);
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
    { key: "id", _style: { width: "10%" } },
    {
      key: "billing_first_name",
      label: "Užsakovo vardas",
      _style: { width: "10%" },
    },
    {
      key: "user_id",
      label: "Užsakovo ID",
      _style: { width: "10%" },
    },
    {
      key: "delivery_id",
      label: "Užsakymo numeris",
      _style: { width: "10%" },
    },
    {
      key: "total_price",
      label: "Visa kaina",
      _style: { width: "10%" },
    },
    {
      key: "total_quantity",
      label: "Kiekis vnt.",
      _style: { width: "10%" },
    },
    {
      key: "total_price_without_tax",
      label: "Kaina be pvm.",
      _style: { width: "10%" },
    },
    {
      key: "billing_postcode",
      label: "Pašto kodas",
      _style: { width: "10%" },
    },
    {
      key: "billing_city",
      label: "Miestas",
      _style: { width: "10%" },
    },
    {
      key: "billing_street_number",
      label: "Gatvė",
      _style: { width: "10%" },
    },
    {
      key: "created_at",
      label: "Užsakymo laikas",
      _style: { width: "10%" },
    },
    {
      key: "delivery_id",
      label: "Pirstatymo ID",
      _style: { width: "10%" },
    },
    {
      key: "order_status_id",
      label: "Užsakymo statusas",
      _style: { width: "10%" },
    },
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

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <h1>Kraunama...</h1>;
  } else if (isLoaded) {
    return (
      <>
        {message ? (
          <CAlert color="primary" closeButton>
            {message}
          </CAlert>
        ) : null}
        <CDataTable
          items={users}
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
                    {details.includes(index) ? "Slėpti" : "Rodyti"}
                  </CButton>
                </td>
              );
            },
            details: (item, index) => {
              return (
                <CCollapse show={details.includes(index)}>
                  <CCardBody>
                    {console.log("show more", item)}
                    <h4>Užsakymo id: {item.id}</h4>
                    <h4>Užsakovo email: {item.billing_email}</h4>
                    <h5>{item.cart.id}</h5>
                    <CBadge color="primary">
                      <h5>
                        Užsakymo statusas:{" "}
                        {item.order_status_id == 1 ? "Užsakyta" : "apmokėta"}
                      </h5>
                    </CBadge>
                    <p className="text-muted">User since: {item.created_at}</p>

                    <CDropdown className="mt-2">
                      <CDropdownToggle caret color="info">
                        Keisti Užsakymo statusą
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem onClick={() => changeStatus(item.id, 1)}>
                          Užsakyta
                        </CDropdownItem>
                        <CDropdownItem onClick={() => changeStatus(item.id, 2)}>
                          Apmokėta
                        </CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CCardBody>
                </CCollapse>
              );
            },
          }}
        />
      </>
    );
  } else {
    return <h1>errror</h1>;
  }
};

const AllOrders = () => {
  return (
    <>
      <CCard>
        <CCardBody>
          <OrderTable />
        </CCardBody>
      </CCard>
    </>
  );
};

export default AllOrders;

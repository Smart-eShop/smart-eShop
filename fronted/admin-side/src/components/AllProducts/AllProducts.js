import { React, useState, useEffect } from "react";
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CCard,
  CCardBody,
  CAlert,
  CButton,
  CBadge,
  CDataTable,
  CCollapse,
  CDropdown,
  CDropdownToggle,
  CDropdownItem,
  CDropdownMenu,
} from "@coreui/react";
import AddProduct from "../AddProduct";

const ProductTable = () => {
  const accessToken = localStorage.getItem("access_token");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  const [primary, setPrimary] = useState(false);

  function fetchData() {
    fetch(`https://eshopsmart.herokuapp.com/api/items`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          const prodObj = result;
          setProducts(prodObj.items);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }

  useEffect(() => {
    fetchData();
  }, []);

  function deleteProduct(id) {
    fetch(`https://eshopsmart.herokuapp.com/api/item/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message);
        fetchData();
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
    { key: "id", _style: { width: "1%" } },
    { key: "title", label: "Pavadinimas", _style: { width: "5%" } },
    { key: "price", label: "Kaina", _style: { width: "5%" } },
    { key: "quantity", label: "Kiekis", _style: { width: "5%" } },
    { key: "discount", label: "Nuolaida", _style: { width: "5%" } },
    { key: "weight", label: "Svoris", _style: { width: "5%" } },
    { key: "category_name", label: "Kategorija", _style: { width: "5%" } },

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
        <CButton
          color="primary"
          onClick={() => setPrimary(!primary)}
          className="mr-1"
        >
          Sukurti naują prekę
        </CButton>

        <CModal
          show={primary}
          onClose={() => {
            setPrimary(!primary);
            fetchData();
          }}
          color="primary"
        >
          <CModalHeader closeButton>
            <CModalTitle>Sukurti naują apmokėjimą</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <AddProduct />
          </CModalBody>
        </CModal>

        <CDataTable
          items={products}
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
            category_name: (item) => <td>{item.category.category_name}</td>,
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
                    {message ? (
                      <CAlert color="primary" closeButton>
                        {message}
                      </CAlert>
                    ) : null}
                    <h4>{item.title}</h4>
                    <img
                      width="100"
                      src={
                        "https://eshopsmart.herokuapp.com/images/" + item.img[0]
                      }
                      alt=""
                    />
                    <img
                      width="100"
                      src={
                        "https://eshopsmart.herokuapp.com/images/" + item.img[1]
                      }
                      alt=""
                    />
                    <img
                      width="100"
                      src={
                        "https://eshopsmart.herokuapp.com/images/" + item.img[2]
                      }
                      alt=""
                    />
                    <img
                      width="100"
                      src={
                        "https://eshopsmart.herokuapp.com/images/" + item.img[3]
                      }
                      alt=""
                    />

                    <p className="text-muted">Created at: {item.created_at}</p>
                    <p>{item.description}</p>
                    <p>Kategorija: {item.category.category_name}</p>
                    <p>Kategorijos id: {item.category.id}</p>
                    <p>Dydis: {item.size}</p>
                    <p>Atnaujinta {item.updated_at}</p>
                    <p>Vartotojo slapyvardis: {item.user.name}</p>
                    <p> Vartotojo id: {item.user_id} </p>
                    <p className="text-muted">
                      Raktiniai žodžiai:{" "}
                      {item.keywords == null
                        ? "Nėra"
                        : item.keywords.map((a) => <li>{a}</li>)}
                    </p>

                    <CButton
                      onClick={() => deleteProduct(item.id)}
                      size="sm"
                      color="danger"
                      className="ml-1"
                    >
                      Ištrinti prekę
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

const AllProducts = () => {
  return (
    <>
      <CCard>
        <CCardBody>
          <ProductTable />
        </CCardBody>
      </CCard>
    </>
  );
};

export default AllProducts;

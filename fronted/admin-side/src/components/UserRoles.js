import { React, useState, useEffect } from "react";
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

const UserTable = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  const accessToken = localStorage.getItem("access_token");
  function getUserData() {
    fetch("https://eshopsmart.herokuapp.com/api/users", {
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
          // console.log(data);
          const userObj = data;
          setUsers(userObj.users);
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

  function changeRole(id, role) {
    fetch(
      `https://eshopsmart.herokuapp.com/api/updateRole/user_id=${id}?role_id=${role}`,
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
    { key: "name", _style: { width: "10%" } },
    { key: "first_name", _style: { width: "10%" } },
    { key: "last_name", _style: { width: "10%" } },
    { key: "email", _style: { width: "10%" } },
    { key: "role", _style: { width: "10%" } },
    { key: "created_at", _style: { width: "10%" } },
    { key: "is_banned", _style: { width: "10%" } },
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
                    {details.includes(index) ? "Hide" : "Show"}
                  </CButton>
                </td>
              );
            },
            details: (item, index) => {
              return (
                <CCollapse show={details.includes(index)}>
                  <CCardBody>
                    <h4>{item.username}</h4>
                    <p className="text-muted">User since: {item.created_at}</p>

                    <CButton
                      onClick={() => banUser(item.id, 1)}
                      size="sm"
                      color="danger"
                      className="ml-1"
                    >
                      Blokuoti
                    </CButton>
                    <CButton
                      onClick={() => deleteUser(item.id)}
                      size="sm"
                      color="danger"
                      className="ml-1"
                    >
                      Ištrinti
                    </CButton>

                    <CDropdown className="mt-2">
                      <CDropdownToggle caret color="info">
                        Keisti statusą
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem onClick={() => changeRole(item.id, 2)}>
                          Pardavėjas
                        </CDropdownItem>
                        <CDropdownItem onClick={() => changeRole(item.id, 3)}>
                          Pirkėjas
                        </CDropdownItem>
                        <CDropdownItem onClick={() => changeRole(item.id, 1)}>
                          Adminas
                        </CDropdownItem>
                        <CDropdownItem divider />
                        <CDropdownItem onClick={() => banUser(item.id, 1)}>
                          Blokuoti vartotoją
                        </CDropdownItem>
                        <CDropdownItem onClick={() => unBan(item.id)}>
                          Atblokuoti
                        </CDropdownItem>
                        <CDropdownItem onClick={() => deleteUser(item.id)}>
                          Ištrinti vartotoją
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

const UserRoles = () => {
  return (
    <>
      <CCard>
        <CCardBody>
          <UserTable />
        </CCardBody>
      </CCard>
    </>
  );
};

export default UserRoles;

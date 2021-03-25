import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CTextarea,
  CInput,
  CInputFile,
  CLabel,
  CSelect,
  CRow,
  CAlert,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const AddProduct = () => {
  // console.log("Bandymas");

 
  const [requestError, setRequestError] = useState(false);
  const accessToken = localStorage.getItem("access_token");
  const [file, setFile] = useState([]);
  const [fileName, setFileName] = useState("Pasirinkti failą");
  const [categoryInput, setCategory] = useState("");
  const [titleInput, setTitle] = useState("");
  const [descriptionInput, setDescription] = useState("");
  const [keywordsInput, setKeywords] = useState([]);
  const [imgInput, setImg] = useState([]);
  // console.log(imgInput);
  const [priceInput, setPrice] = useState("");
  const [discountInput, setDiscount] = useState("");
  const [quantityInput, setQuantity] = useState("");
  const [weightInput, setWeight] = useState("");
  const [sizeInput, setSize] = useState("");
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      file[i] = e.target.files[i];
      console.log(file[i]);
    }
    console.log(file[0]);
  };

  const onSubmit = async (e) => {
    const accessToken = localStorage.getItem("access_token");

    console.log("submit");
    console.log(file[1]);
    console.log(file.length);

    e.preventDefault();

    const formData = new FormData();

    formData.append("category_id", categoryInput);
    formData.append("title", titleInput);
    formData.append("description", descriptionInput);
    formData.append("keywords", keywordsInput);

    for (let i = 0; i < file.length; i++) {
      formData.append("img[]", file[i]);
    }

    formData.append("price", priceInput);
    formData.append("discount", discountInput);
    formData.append("quantity", quantityInput);
    formData.append("weight", weightInput);
    formData.append("size", sizeInput);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    fetch(`https://eshopsmart.herokuapp.com/api/addItem`, {
      method: "POST",
      // mode: 'no-cors',
      headers: {
        // 'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message);

        setTimeout(() => {
          setMessage("");
          setCategory("");
          setTitle("");
          setDescription("");
          setKeywords("");
          setImg([]);
          setPrice("");
          setDiscount("");
          setQuantity("");
          setWeight("");
          setSize("");
        }, 3000);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              {message ? (
                <CAlert color="primary" closeButton>
                  {message}
                </CAlert>
              ) : null}
              {requestError ? (
                <CAlert color="warning" closeButton>
                  Klaida!
                </CAlert>
              ) : null}
              Pridėti naują produktą:
            </CCardHeader>
            <CCardBody>
              <CForm
                action=""
                method="post"
                encType="multipart/form-data"
                className="form-horizontal"
              >
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Produkto pavadinimas:</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Pavadinimas"
                      value={titleInput}
                      onInput={(e) => setTitle(e.target.value)}
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">
                      Produkto aprašymas:
                    </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea
                      name="textarea-input"
                      id="textarea-input"
                      rows="9"
                      placeholder="Aprašymas..."
                      value={descriptionInput}
                      onInput={(e) => setDescription(e.target.value)}
                    />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Žymės:</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      type="tag"
                      id="email-input"
                      name="email-input"
                      placeholder="Žymes..."
                      autoComplete="tag"
                      value={keywordsInput}
                      onInput={(e) => setKeywords(e.target.value)}
                    />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Pasirinkite Kategoriją</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect
                      value={categoryInput}
                      onInput={(e) => setCategory(e.target.value)}
                      custom
                      name="select"
                      id="select"
                    >
                      <option selected disabled value="">
                        Pasirinkite
                      </option>
                      <option value="1">Kompiuterinė technika</option>
                      <option value="2">Buitinė technika</option>
                      <option value="3">Vaizdo technika</option>
                      <option value="4">Garso technika</option>
                      <option value="5">Mobilieji telefonai</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Kaina</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Kaina"
                      value={priceInput}
                      onInput={(e) => setPrice(e.target.value)}
                    />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Nuolaida</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Nuolaida"
                      value={discountInput}
                      onInput={(e) => setDiscount(e.target.value)}
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Dydis</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Dydis"
                      value={sizeInput}
                      onInput={(e) => setSize(e.target.value)}
                    />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Kiekis</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Kiekis"
                      value={quantityInput}
                      onInput={(e) => setQuantity(e.target.value)}
                    />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Svoris</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Svoris"
                      value={weightInput}
                      onInput={(e) => setWeight(e.target.value)}
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Nuotraukos:</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInputFile
                      multiple
                      type="file"
                      name="file-multiple-input"
                      custom
                      onChange={onChange}
                    />
                    <CLabel htmlFor="file-multiple-input" variant="custom-file">
                      {fileName}
                    </CLabel>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton
                type="submit"
                size="sm"
                color="primary"
                onClick={onSubmit}
              >
                <CIcon name="cil-scrubber" /> Pridėti produktą
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};
export default AddProduct;

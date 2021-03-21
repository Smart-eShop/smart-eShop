import { React, useState, useEffect } from 'react'
import {
    CCard,
    CCardBody,
    CButton,
    CBadge,
    CDataTable,
    CCollapse,
    CDropdown,
    CDropdownToggle,
    CDropdownItem,
    CDropdownMenu, CCardFooter,
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



const ProductTable = () => {

    const accessToken = localStorage.getItem('access_token');
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);

    const [productAdded, setProductAdded] = useState(false);
    const [requestError, setRequestError] = useState(false);
    const [file, setFile] = useState([]);
    const [fileName, setFileName] = useState('Pasirinkti failą');
    const [categoryInput, setCategory] = useState('');
    const [titleInput, setTitle] = useState('');
    console.log(titleInput);
    const [descriptionInput, setDescription] = useState('');
    const [keywordsInput, setKeywords] = useState([]);
    const [imgInput, setImg] = useState([]);
    const [priceInput, setPrice] = useState('');
    const [discountInput, setDiscount] = useState('');
    const [quantityInput, setQuantity] = useState('');
    const [weightInput, setWeight] = useState('');
    const [sizeInput, setSize] = useState('');
    const imgUrl = 'https://eshopsmart.herokuapp.com/images/'


    function fetchData() {

        fetch(`https://eshopsmart.herokuapp.com/api/items`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'

            }
        })
            .then(res => res.json())
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
            )
    }

    useEffect(() => {
        fetchData()
    }, [])



    function deleteProduct(id) {
        fetch(`https://eshopsmart.herokuapp.com/api/item/delete/${id}`, {

            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
        })

            .then(data => data.json())
            .then(data => console.log(data))
        fetchData()
        EditProduct()

    }

    const onChange = e => {

        for (let i = 0; i < e.target.files.length; i++) {
            file[i] = e.target.files[i];
            console.log(file[i]);
        }
        console.log(file[0]);
    }

    const onSubmit = async (item) => {



        console.log(item);
        console.log(file[0]);
        console.log(file.length);




        const formData = new FormData();

        formData.append('category_id', categoryInput ? categoryInput : item.category_id);
        formData.append('title', titleInput ? titleInput : item.title);
        formData.append('description', descriptionInput ? descriptionInput : item.description);
        formData.append('keywords', keywordsInput);

        for (let i = 0; i < file.length; i++) {
            formData.append('img[]', file[i]);
        }

        formData.append('price', priceInput ? priceInput : item.price);
        formData.append('discount', discountInput ? discountInput : item.discount);
        formData.append('quantity', quantityInput ? quantityInput : item.quantity);
        formData.append('weight', weightInput ? weightInput : item.weight);
        formData.append('size', sizeInput ? sizeInput : item.size);


        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        console.log('item.id', item.id);

        fetch(`https://eshopsmart.herokuapp.com/api/item/update/${item.id}`, {

            method: "POST",
            // mode: 'no-cors',
            headers: {
                // 'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${accessToken}`,
            },
            body: formData,
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }





    const [details, setDetails] = useState([])
    // const [items, setItems] = useState(usersData)

    const toggleDetails = (index) => {
        const position = details.indexOf(index)
        let newDetails = details.slice()
        if (position !== -1) {
            newDetails.splice(position, 1)
        } else {
            newDetails = [...details, index]
        }
        setDetails(newDetails)
    }


    const fields = [
        { key: 'id', _style: { width: '1%' } },
        { key: 'title', label: "Pavadinimas", _style: { width: '5%' } },
        { key: 'price', label: "Kaina", _style: { width: '5%' } },
        { key: 'quantity', label: "Kiekis", _style: { width: '5%', } },
        { key: 'discount', label: "Nuolaida", _style: { width: '5%' } },
        { key: 'weight', label: "Svoris", _style: { width: '5%' } },
        { key: 'category_name', label: "Kategorija", _style: { width: '5%' } },

        {
            key: 'show_details',
            label: '',
            _style: { width: '1%' },
            sorter: false,
            filter: false
        }
    ]

    const getBadge = (status) => {
        switch (status) {
            case 'Active': return 'success'
            case 'Inactive': return 'secondary'
            case 'Pending': return 'warning'
            case 'Banned': return 'danger'
            default: return 'primary'
        }
    }



    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {

        return <h1>Kraunama...</h1>;
    } else if (isLoaded) {

        return (
            <>
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
                        'category_name':
                            (item) => (
                                <td>{item.category.category_name}</td>
                            ),
                        'show_details':
                            (item, index) => {

                                return (
                                    <td className="py-2">
                                        <CButton
                                            color="primary"
                                            variant="outline"
                                            shape="square"
                                            size="sm"
                                            onClick={() => { toggleDetails(index) }}
                                        >
                                            {details.includes(index) ? 'Paslėpti' : 'Rodyti'}
                                        </CButton>
                                    </td>
                                )
                            },
                        'details':
                            (item, index) => {


                                return (
                                    <CCollapse show={details.includes(index)}>
                                        <CCardBody>





                                            <CRow>
                                                <CCol xs="12" md="12">
                                                    <CCard>
                                                        <CCardHeader>
                                                            {productAdded ? <CAlert color="primary">Produktas pridėtas!</CAlert> : null}
                                                            {requestError ? <CAlert color="warning" closeButton>Klaida!</CAlert> : null}
                                                                   Keisti produktą:
                                                                    </CCardHeader>
                                                        <CCardBody>
                                                            <CForm action="submit" className="form-horizontal">
                                                                <CFormGroup row>
                                                                    <CCol md="3">

                                                                    </CCol>
                                                                    <CCol xs="12" md="9">

                                                                        {(item.img?.length) ?
                                                                            <div>
                                                                                {
                                                                                    item.img.map(a => (
                                                                                        <img width="250" src={imgUrl + a} />))}
                                                                            </div>
                                                                            : false}
                                                                    </CCol>
                                                                </CFormGroup>
                                                                <CFormGroup row>
                                                                    <CCol md="3">
                                                                        <CLabel htmlFor="text-input">Produkto pavadinimas:</CLabel>
                                                                    </CCol>
                                                                    <CCol xs="12" md="9">
                                                                        <CInput id="text-input" name="name" defaultValue={item.title} onChange={e => setTitle(e.target.value)}

                                                                        />
                                                                    </CCol>
                                                                </CFormGroup>
                                                                <CFormGroup row>
                                                                    <CCol md="3">
                                                                        <CLabel htmlFor="textarea-input">Produkto aprašymas:</CLabel>
                                                                    </CCol>
                                                                    <CCol xs="12" md="9">
                                                                        <CTextarea
                                                                            name="description"
                                                                            id="textarea-input"
                                                                            rows="9"
                                                                            placeholder="Aprašymas..."
                                                                            defaultValue={item.description} onChange={e => setDescription(e.target.value)}

                                                                        />
                                                                    </CCol>
                                                                </CFormGroup>


                                                                <CFormGroup row>
                                                                    <CCol md="3">
                                                                        <CLabel htmlFor="keys">Žymės:</CLabel>
                                                                    </CCol>
                                                                    <CCol xs="12" md="9">
                                                                        <CInput type="tag" id="keyword" name="keyword" placeholder="Žymes..." autoComplete="tag" defaultValue={item.keywords} onChange={e => setKeywords(e.target.value)} />

                                                                    </CCol>
                                                                </CFormGroup>

                                                                <CFormGroup row>
                                                                    <CCol md="3">
                                                                        <CLabel htmlFor="select">Select category</CLabel>
                                                                    </CCol>
                                                                    <CCol xs="12" md="9">

                                                                        <CSelect defaultValue={categoryInput} onInput={e => setCategory(e.target.value)}
                                                                            custom name="select" id="select">
                                                                            <option value="0">Please select</option>
                                                                            <option value="1">Option #1</option>
                                                                            <option value="2">Option #2</option>
                                                                            <option value="3">Option #3</option>
                                                                        </CSelect>
                                                                    </CCol>
                                                                </CFormGroup>


                                                                <CFormGroup row>
                                                                    <CCol md="3">
                                                                        <CLabel htmlFor="text-input">Kaina</CLabel>
                                                                    </CCol>
                                                                    <CCol xs="12" md="9">
                                                                        <CInput id="price" name="price" placeholder="Kaina" defaultValue={item.price} onInput={e => setPrice(e.target.value)} />

                                                                    </CCol>
                                                                </CFormGroup>

                                                                <CFormGroup row>
                                                                    <CCol md="3">
                                                                        <CLabel htmlFor="text-input">Nuolaida</CLabel>
                                                                    </CCol>
                                                                    <CCol xs="12" md="9">
                                                                        <CInput id="text-input" name="discount" placeholder="Nuolaida" defaultValue={item.discount} onInput={e => setDiscount(e.target.value)} />
                                                                    </CCol>
                                                                </CFormGroup>
                                                                <CFormGroup row>
                                                                    <CCol md="3">
                                                                        <CLabel htmlFor="text-input">Dydis</CLabel>
                                                                    </CCol>
                                                                    <CCol xs="12" md="9">
                                                                        <CInput id="text-input" name="size" placeholder="Dydis" defaultValue={item.size} onInput={e => setSize(e.target.value)} />

                                                                    </CCol>
                                                                </CFormGroup>

                                                                <CFormGroup row>
                                                                    <CCol md="3">
                                                                        <CLabel htmlFor="text-input">Kiekis</CLabel>
                                                                    </CCol>
                                                                    <CCol xs="12" md="9">
                                                                        <CInput id="text-input" name="quanity" placeholder="Kiekis" defaultValue={item.quantity} onInput={e => setQuantity(e.target.value)} />

                                                                    </CCol>
                                                                </CFormGroup>

                                                                <CFormGroup row>
                                                                    <CCol md="3">
                                                                        <CLabel htmlFor="text-input">Svoris</CLabel>
                                                                    </CCol>
                                                                    <CCol xs="12" md="9">
                                                                        <CInput id="text-input" name="weight" placeholder="Svoris" defaultValue={item.weight} onInput={e => setWeight(e.target.value)} />

                                                                    </CCol>
                                                                </CFormGroup>
                                                                <CFormGroup row>
                                                                    <CCol md="3">
                                                                        <CLabel>Nuotraukos:</CLabel>
                                                                    </CCol>
                                                                    <CCol xs="12" md="9">
                                                                        <CInputFile multiple type="file" name="image" multiple custom onChange={onChange} />
                                                                        <CLabel htmlFor="file-multiple-input" variant="custom-file">
                                                                            {fileName}
                                                                        </CLabel>
                                                                    </CCol>
                                                                </CFormGroup>
                                                            </CForm>
                                                            <CCardFooter>
                                                                <CButton type="submit" size="sm" color="primary"
                                                                    onClick={() => onSubmit(item)}
                                                                >Patvirtinti pakeitimus</CButton>
                                                                <CButton
                                                                    onClick={() => deleteProduct(item.id)}
                                                                    size="sm" color="danger" className="ml-1">
                                                                    Ištrinti prekę
					                                             </CButton>
                                                            </CCardFooter>
                                                        </CCardBody>
                                                    </CCard>
                                                </CCol>
                                            </CRow>





                                        </CCardBody>
                                    </CCollapse>
                                )
                            }
                    }}
                />
            </>
        )


    }
}



const EditProduct = () => {

    return (
        <>
            <CCard>
                <CCardBody>




                    <ProductTable />

                </CCardBody>
            </CCard>
        </>
    )
}

export default EditProduct






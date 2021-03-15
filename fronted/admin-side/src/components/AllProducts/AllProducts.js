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
	  CDropdownMenu
	} from '@coreui/react'
	
	
	
const ProductTable = () => {
	
	const accessToken = localStorage.getItem('access_token');
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [products, setProducts] = useState([]);
	
	
	
	useEffect(() => {
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
	}, [accessToken])
	
	
	
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
		{ key: 'id', _style: { width: '1%'} },
		{ key: 'title', _style: { width: '5%'} },
		{ key: 'price', _style: { width: '5%'} },
		{ key: 'quanity', _style: { width: '5%'} },
		{ key: 'category_name', _style: { width: '5%'} },
		{ key: 'discount', _style: { width: '5%'} },
		{ key: 'weight', _style: { width: '5%'} },
		
		{
		  key: 'show_details',
		  label: '',
		  _style: { width: '1%' },
		  sorter: false,
		  filter: false
		}
	  ]
	
	  const getBadge = (status)=>{
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
		  itemsPerPage={5}
		  hover
		  sorter
		  pagination
		  scopedSlots = {{
			'status':
			  (item)=>(
				<td>
				  <CBadge color={getBadge(item.status)}>
					{item.status}
				  </CBadge>
				</td>
			  ),
			'show_details':
			  (item, index)=>{
				return (
				  <td className="py-2">
					<CButton
					  color="primary"
					  variant="outline"
					  shape="square"
					  size="sm"
					  onClick={()=>{toggleDetails(index)}}
					>
					  {details.includes(index) ? 'Hide' : 'Show'}
					</CButton>
				  </td>
				  )
			  },
			'details':
				(item, index)=>{
				  return (
				  <CCollapse show={details.includes(index)}>
					<CCardBody>
					  <h4>
						{item.username}
					  </h4>
					  <dt class="col-sm-3">{item.title}</dt>
					  <p className="text-muted">Created at: {item.created_at}</p>
					  <p>{item.description}</p>
					  <p>Kategorija: {item.category_name}</p>
					  <p>Dydis: {item.size}</p>
					  <p>Atnaujinta {item.updated_at}</p>
					  <p>Vartotojo slapyvardis: {item.user_username}</p>
					  <p> Vartotojo id: {item.user_id} </p>
					  <p className="text-muted">Raktiniai žodžiai: {(item.keywords == null)?"Nėra":item.keywords}</p>
					  <CButton size="sm" color="info">
						Edit
					  </CButton>
					  <CButton  
					  onClick={() => deleteProduct(item.id)}
					  size="sm" color="danger" className="ml-1">
						Ištrinti prekę
					  </CButton>
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
	


const AllProducts = () => {
	
	
	
	
	
	
	  return (
		<>
		  <CCard>
			<CCardBody>
	
	
	
			
	<ProductTable/>
	
			</CCardBody>
		  </CCard>
		</>
	  )
	}

	
export default AllProducts
	
	
	
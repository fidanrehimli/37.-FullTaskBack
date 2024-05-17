import React, { useContext, useEffect } from 'react'
import "./product.css"
import axios from "axios"
import { ProductsContext } from '../../../context/ProductsContext'
import { CiStar } from "react-icons/ci";
const Products = () => {

  const {data,setData,filter,setFilterData}=useContext(ProductsContext)
  const GetAllData = async(category)=>{
    const res = await axios  ("http://localhost:5000/products")
    setData(res?.data)
    setFilterData(res?.data)
  }
  useEffect(()=>{
    GetAllData()
  },[])

  const deleteData= async(id)=>{
    await axios.delete(`http://localhost:5000/products/${id}`)
    GetAllData()
  }
  return (
    <div>
    <div className='products'>
      <h1>Latest Products</h1>
      <ul>
        <li>All</li>
        <li>New</li>
        <li>Featured</li>
        <li>Offer</li>
      </ul>
    </div>
    <div className='datas'>
      {
        filter.map((elem)=>(
          <div className='productDiv' key={elem._id}>
            <img className='imgProduct' src={elem.imgSRC} alt=''/>
            <br/>
            <CiStar className='yellow'/>
            <CiStar className='yellow' />
            <CiStar className='yellow' />
            <CiStar className='gray' />
            <CiStar className='gray' />
            <p className='titletext'>{elem.title}</p>
            <p className='pricetext'>{elem.price}</p>
            <button className='deletebtn' onClick={()=>deleteData(elem._id)}>Delete</button>
          </div>
        ))
      }
    </div>
    <hr/>

    </div>
  )
}

export default Products
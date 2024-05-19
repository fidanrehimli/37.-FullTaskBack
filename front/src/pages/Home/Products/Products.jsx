import React, { useContext, useEffect } from "react";
import "./product.css";
import axios from "axios";
import { ProductsContext } from "../../../context/ProductsContext";
import { CiStar } from "react-icons/ci";
const Products = () => {
  const { data, setData, filter, setFilterData } = useContext(ProductsContext);
  const GetAllData = async (category) => {
    const res = await axios("http://localhost:8080/products");
    setData(res?.data);
    setFilterData(res?.data);
  };
  useEffect(() => {
    GetAllData();
  }, []);

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:8080/products/${id}`);
    GetAllData();
  };
  return (
    <div>
      <div className="products">
        <h1>Latest Products</h1>
        <ul>
          <input
            type="text"
            className="search"
            placeholder="Search..."
            onChange={(e) => {
              let search = filter.filter((elem) =>
                elem.title
                  .toLowerCase()
                  .includes(e.target.value.toLocaleLowerCase())
              );
              setFilterData(search);
            }}
          />
          <li>
            <button
              onClick={() => {
                let newarr = [...filter].sort((a, b) =>
                  a.title[0].localCompare(b.title[0])
                );
                setFilterData(newarr);
              }}
            >
              All
            </button>
          </li>
          <li>
            <button>New</button>
          </li>
          <li>
            <button>Featured</button>
          </li>
          <li>
            <button>Offer</button>
          </li>
        </ul>
      </div>
      <hr
        className="line"
        style={{ width: "1200px", marginLeft: "270px", marginTop: "20px" }}
      />
      <div className="datas">
        {filter.slice(0, 3).map((elem) => (
          <div className="productDiv" key={elem._id}>
            <img className="imgProduct" src={elem.imgSRC} alt="" />
            <br />
            <CiStar
              className="yellow"
              style={{ color: "yellow", marginLeft: "100px" }}
            />
            <CiStar className="yellow" />
            <CiStar className="yellow" />
            <CiStar className="gray" />
            <CiStar className="gray" />
            <p className="titletext">{elem.title}</p>
            <p className="pricetext">{elem.price}</p>
            <button className="deletebtn" onClick={() => deleteData(elem._id)}>
              Delete
            </button>
            <button className="detailbtn">Detail</button>
          </div>
        ))}
        <div className="datas">
          {filter.slice(3, 6).map((elem) => (
            <div className="productDiv" key={elem._id}>
              <img className="imgProduct" src={elem.imgSRC} alt="" />
              <br />
              <CiStar
                className="yellow"
                style={{ color: "yellow", marginLeft: "100px" }}
              />
              <CiStar className="yellow" />
              <CiStar className="yellow" />
              <CiStar className="gray" />
              <CiStar className="gray" />
              <p className="titletext">{elem.title}</p>
              <p className="pricetext">{elem.price}</p>
              <button
                className="deletebtn"
                onClick={() => deleteData(elem._id)}
              >
                Delete
              </button>
              <button className="detailbtn">Detail</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

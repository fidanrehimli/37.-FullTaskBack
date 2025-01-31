import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProductsContext } from "../../context/ProductsContext";
import SchemaProducts from "/src/schema/SchemaProducts";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import "./form.css";
const Form = () => {
  const {
    sortData,
    setSortData,
    titleInp,
    setTitleInp,
    priceInp,
    setPriceInp,
    imgInp,
    setImgInp,
    usernameInput,
    setUsernameInput
  } = useContext(ProductsContext);

  const GetAllData = async () => {
    const res = await axios.get("http://localhost:8080/products");
    setSortData(res?.data);
    console.log(res?.data);
  };
  useEffect(() => {
    GetAllData();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaProducts),
  });

  const createProduct = async () => {
    await axios.post("http://localhost:8080/products", {
      imgSRC: imgInp,
      title: titleInp,
      price: priceInp,
    });
    GetAllData();
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Form</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="tables">
        <form className="form" action="" onSubmit={handleSubmit(createProduct)}>
          <input
            className="inp"
            type="text"
            {...register("imgSRC")}
            placeholder="image"
            onChange={(e) => setImgInp(e.target.value)}
          />
          {errors.imgSRC?.message && (
            <p style={{ color: "red" }}>{errors.imgSRC?.message}</p>
          )}
          <br />
          <input
            className="inp"
            type="text"
            {...register("title")}
            placeholder="title"
            onChange={(e) => setTitleInp(e.target.value)}
          />
          {errors.title?.message && (
            <p style={{ color: "red" }}>{errors.title?.message}</p>
          )}
          <br />
          <input
            className="inp"
            type="number"
            {...register("price")}
            placeholder="price"
            onChange={(e) => setPriceInp(e.target.value)}
          />
          {errors.price?.message && (
            <p style={{ color: "red" }}>{errors.price?.message}</p>
          )}

          <button className="addbtn" type="submit">
            Add
          </button>
        </form>

        <TableContainer className="table" component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortData.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 1 } }}
                >
                  <TableCell>{row.imgSRC}</TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell><button onClick={()=>{
                 let newArr = sortData.filter((item)=>item.id != row._id);
                 axios.delete("http://localhost:8080/products"+'/'+row._id)
                 setSortData(newArr)
                 GetAllData()
                  }}>Delete</button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Form;

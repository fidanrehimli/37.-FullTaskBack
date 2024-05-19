import { createContext, useState } from "react";

export const ProductsContext = createContext();
export const ProductsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filter, setFilterData] = useState([]);
  const [active, setActive] = useState(null);
  const [sortData, setSortData] = useState([]);
  const [titleInp, setTitleInp] = useState("");
  const [priceInp, setPriceInp] = useState("");
  const [imgInp, setImgInp] = useState("");
  const [usernameInput, setUsernameInput] = useState("");

  return (
    <ProductsContext.Provider
      value={{
        data,
        setData,
        filter,
        setFilterData,
        active,
        setActive,
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
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

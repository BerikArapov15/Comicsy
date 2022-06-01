import { BottomNavigation, Grid, Pagination } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/CrudContextProvider";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products, getProducts } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  
  useEffect(() => {
    getProducts();
  }, []);
  
  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);
  
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const count = Math.ceil(products.length / itemsPerPage);

  const handleChange = (e, p) => {
    setPage(p);
  };

  // pagination

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  return (
    <>
      <div
        sx={{ justifyContent: "center", display: "flex", flexWrap: "wrap", flexDirection: 'column' }}
      >
        <Box
          sx={{
            maxWidth: '100%',
            display: "flex",
            flexWrap: "wrap",
            flexDirection: 'column',
            minHeight: "40vh",
            mb: "3.5vh",
          }}
        >
          {products ? (
            currentData().map((item) => (
              <ProductCard item={item} key={item.id} />
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </Box>
      </div>
      <Box
        sx={{display: 'flex', justifyContent: 'center', marginBottom: 3}}
      >
        <Pagination
          count={count}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
          page={page}
          align="center"
        />
      </Box>
    </>
  );
};

export default ProductList;

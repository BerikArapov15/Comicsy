import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductList from "../Components/crud/ProductList";
import SideBar from "../Components/Sidebar/Sidebar";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <>
      <Box
        justify="center"
        sx={{ width: "40vw", margin: "0 auto", marginY: 3 }}
      >
        <SideBar />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Grid justify="center" sx={{ display: "flex" }}>
          <Grid item md={12}>
            <ProductList />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductsPage;

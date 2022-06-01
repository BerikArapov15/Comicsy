import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/CrudContextProvider";

const EditCard = () => {
  const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();

  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(productDetails);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  useEffect(() => {
    getProductDetails(id);
  }, []);

  const handleInp = (e) => {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  };
  const handleInpFile = (e) => {
    let file = e.target.files[0];
    setProduct({
      ...product,
      image: file,
    });
  };
  return (
    <Box sx={{ width: "60vw", margin: "10vh auto" }}>
      <TextField
        sx={{
          marginBottom: "10px",
          borderColor: "black",
          backgroundColor: "whitesmoke",
        }}
        fullWidth
        id="outlined-basic"
        label="Title"
        value={product.title || ""}
        variant="outlined"
        name="title"
        size="small"
        onChange={handleInp}
      />
      <TextField
        sx={{
          marginBottom: "10px",
          borderColor: "black",
          backgroundColor: "whitesmoke",
        }}
        fullWidth
        id="outlined-basic"
        label="Price"
        value={product.price || ""}
        variant="outlined"
        name="price"
        size="small"
        onChange={handleInp}
      />
      {/* <TextField
        sx={{
          marginBottom: "10px",
          borderColor: "black",
          backgroundColor: "whitesmoke",
        }}
        fullWidth
        id="outlined-basic"
        label="Image"
        value={product.image || ""}
        variant="outlined"
        name="image"
        size="small"
        onChange={handleInpFile}
      /> */}

        <TextField
          sx={{
            marginBottom: "10px",
            borderColor: "black",
            backgroundColor: "whitesmoke",
          }}
          fullWidth
          id="outlined-helperText"
          name="image"
          size="small"
          onChange={handleInpFile}
          type="file"
        />

      <FormControl
        fullWidth
        sx={{
          marginBottom: "10px",
          borderColor: "black",
          backgroundColor: "whitesmoke",
        }}
      >
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={product.category || ""}
          label="Category"
          name="category"
          onChange={handleInp}
        >
          <MenuItem value={"Manga"}>manga</MenuItem>
          <MenuItem value={"МангаМанхва"}>МангаМанхва</MenuItem>
        </Select>
      </FormControl>
      <TextField
        sx={{
          marginBottom: "10px",
          borderColor: "black",
          backgroundColor: "whitesmoke",
        }}
        fullWidth
        id="outlined-basic"
        label="Descriptions"
        variant="outlined"
        name="descriptions"
        value={product.descriptions || ""}
        size="small"
        onChange={handleInp}
      />

      <Button
        sx={{
          marginBottom: "10px",
          borderColor: "black",
          color: "black",
          backgroundColor: "whitesmoke",
        }}
        variant="outlined"
        fullWidth
        size="large"
        onClick={() => {
          saveEditedProduct(product);
          navigate("/products");
        }}
      >
        Edit product
      </Button>
    </Box>
  );
};

export default EditCard;

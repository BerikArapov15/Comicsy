import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProducts } from "../../contexts/CrudContextProvider";
import { useNavigate } from "react-router-dom";

import ShoppingBag from "@mui/icons-material/ShoppingBag";
import { IconButton } from "@mui/material";
import { useCart } from "../../contexts/CartContextProvider";
import { ADMIN } from "../../helpers/consts";
import { useAuth } from "../../contexts/AuthContextProvider";
import { MoreHoriz } from "@mui/icons-material";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const { deleteProduct } = useProducts();
  const { addProductToCart, checkProductInCart } = useCart();

  const {
    handleLogout,
    user,
  } = useAuth();


  return (
    <div>
      <Card sx={{ height: 900, width: 900, m: 3 }}>
        <CardMedia
          sx={{ width: "300" }}
          component="img"
          height="700"
          image={item.image}
          alt={item.title}
        />
        <CardContent 
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{ display: "flex", textAlign: "center" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1}}>
            {item.category}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "black", fontWeight: "bold", }}
          >
            {item.price} $
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {user == ADMIN ? ( <>
          <Button size="small" onClick={() => deleteProduct(item.id)}>
            Delete
          </Button>
          <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
            Edit
          </Button>
          </>) : 
          ( <><IconButton onClick={() => addProductToCart(item)}>
            <ShoppingBag color={checkProductInCart(item.id) ? "warning" : ""} />
          </IconButton>
          <IconButton onClick={() => navigate(`/products/${item.id}`)}>
            <MoreHoriz />
          </IconButton></>)}
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;

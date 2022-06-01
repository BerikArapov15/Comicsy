import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../contexts/CartContextProvider";
import { useProducts } from "../../contexts/CrudContextProvider";
const ProductDetails = () => {
  const { details } = useCart();
  const { id } = useParams();
  const { getProductDetails, productDetails } = useProducts();
  const { addProductToCart, checkProductInCart } = useCart();
  useEffect(() => {
    if(Number(id)) {
      getProductDetails(id);
    }
  }, []);

  console.log(productDetails);

  const comments = productDetails.comments;


  return (
    <>
      <div id="product-details" style={{margin: '0 5vw'}}>
        <div className="left">
          <img
            className="product-details-image"
            src={productDetails.image}
            alt=""
          />
        </div>

        <div className="right">
          <h4 style={{marginBottom: 20}}>{productDetails.title}</h4>
          {/* <br /> */}
          <p style={{marginBottom: 20}}>{productDetails.descriptions}.</p>
          {/* <br /> */}
          <h2 style={{marginBottom: 20}}>€{productDetails.price}</h2>
          <button
            onClick={() => addProductToCart(productDetails)}
            className="cart-button"
          >
            ADD TO CART
          </button>

          <div className="wine-details" style={{marginBottom: 20}}>

            <div className="wine-details-right" style={{width: '100%', display:'flex', justifyContent: 'center'}}>
              <ul >
                {comments ? (comments.map((item) => <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20}}><h4 style={{marginBottom: 10}}>{item.user}</h4><li key={item.id}>{item.text}</li></div>)) : ''}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

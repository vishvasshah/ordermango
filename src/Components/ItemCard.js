
import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import React, { useState } from "react";
import { actionType } from "./reducer";
import { useStateValue } from "./StateProvider";
import { Items } from "./Data";
import { useEffect } from "react";
let cartData = [];

function ItemCard({ itemId, imgSrc, name, price }) {
  const [{}, dispatch] = useStateValue();
  const [isCart, setCart] = useState(null);

  useEffect(() => {
    if (isCart) {
      cartData.push(isCart);
      dispatch({
        type: actionType.SET_CART,
        cart: cartData,
      });
    }
  }, [isCart]);

  return (
    <div className="itemCard" id={itemId}>
      

      <div className="imgBox">
        <img src={imgSrc} alt="" className="itemImg" />
      </div>

      <div className="itemContent">
        <h3 className="itemName">{name}</h3>
        <div className="bottom">
        <h3 className="price">
              <span>$ </span>
              {price}
            </h3>
          
          <i
            className="addToCart"
            onClick={() => {
              setCart(Items.find((n) => n.id === itemId));
            }}
          >
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
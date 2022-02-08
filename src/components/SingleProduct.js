import React,{useContext} from "react";
import { app } from "../fb";
import "./SingleProduct.css";

import { useCart } from "react-use-cart";
import { CartContext } from "../contexts/CartContext";

export const SingleProduct = (props) => {
  const [{items},{addItem}] = useContext(CartContext);
  const { data } = props;
  const clave = "articulos";
  
  return (
    <div className="productCard" key={data.id}>
      <img className="productCardImg" src={data.imageURL} alt={data.name} />
      <p className="productCardName">{data.name}</p>
      <p className="productCardDescription">{data.description}</p>
      <p className="productCardPrice">S/.{data.price}</p>

      <button className="mainbutton" onClick={() => addItem(data)}>
        Comprar
      </button>
    </div>
  );
};

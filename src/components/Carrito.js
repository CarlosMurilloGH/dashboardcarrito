import React, {  useContext } from "react";
import "./Carrito.css";
import { CartContext } from "../contexts/CartContext";

export const Carrito = () => {
  const [{ items },{addItem,removeItem}] = useContext(CartContext);

  // eslint-disable-next-line
  //const { items } = useCart();
  const getString = () => {
    let object = {
      string: "",
      total: 0,
    };
    let total = 0;
    let newArray = [];
    let string = "";
    items.forEach((item) => {
      newArray.push();
      total = total + parseFloat(item.price*item.qnty);
      string = string + `*${item.name}* = *${item.price}** X*${item.qnty}** `;
    });
    let end = `Hola%2C+vengo+de+la+app+de+carlos+y+quiero+comprar%0D%0A${string}%0D%0A*Precio:*${total}**%0D%0A*Gracias*%21`;
    object.string = end;
    object.total = total;

    return object;
  };
  return (
    <div className="carritobox">
      {items.length === 0 && <p>carrito vacio</p>}
      {items.sort(function(a, b) {
  return a.order - b.order;
}).map((item, index) => {
        return (
          <div key={index} className="gridcart">
            <div>
              <p className="productocarrito">{item.name}</p> 
            </div>

            <div className="cantidadcarritos">
              <button onClick={()=>removeItem(item)} title="remover" className="BotonNegativo">-</button>
              <button  onClick={()=>addItem(item)} title="adicionar" className="BotonPositivo" >+</button>
            </div>

            <div className="qntyproducts">
              <p>x</p> 
              <p>{item.qnty}</p>
              <p className="preciocarrito">S/.{item.price}</p>
            </div>
            
          </div>
        );
      })}
      {items.length !== 0 && (
        <div className="totalcontainer">
          <hr></hr>
          <div className="totalcarrito">
            <p className="totallabel">Total:</p>
            <p className="totalnumero">S/.{ getString().total}</p>
          </div>
         
          <button className="BotonComprar">
            <a className="anchorcomprar"
            rel="noreferrer" target="_blank"
              href={`https://api.whatsapp.com/send?phone=51956348183&text=${
                getString().string
              }`}
            >
              Enviar pedido
            </a>{" "}
          </button>
        </div>
      )}
    </div>
  );
};

import './App.css';
import { useEffect, useState } from "react";
import CartItem from './Components/CartItem';
import Header from "./Components/Header";
import ItemCard from "./Components/ItemCard";
import SubMenuContainer from "./Components/SubMenuContainer";
import { Items } from "./Components/Data";
import { useStateValue } from "./Components/StateProvider";
function App() {
  const [isMainData, setMainData] = useState(Items);
  const [{ cart, total }, dispatch] = useStateValue();
  const [totalPrice, setTotalPrice] = useState(0);

  const closemenu= () =>{
    document.querySelector(".rightMenu").classList.remove("active");
  }

  return (
    <div className="App">
      <Header />

      <main>
        <div className='mainContainer'>
          <div className="banner">
            
          </div>



        </div>

        <div className='dishItemContainer'>

{isMainData &&
                isMainData.map((data) => (
                  <ItemCard
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    price={data.price}
                  />
                ))}


        </div>
        <div className='rightMenu'>
        <button className="back" onClick={closemenu}>Back To Home</button>
        {!cart ? (
            <div className="addSomeItem">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
                alt=""
                className="emptyCart"
              />
            </div>
          ) : (
            <div className="cartCheckOutContianer">
              <div className="cartContainer">
                <SubMenuContainer />

                <div className="cartItems">
                  {cart &&
                    cart.map((data) => (
                      <CartItem
                        key={data.id}
                        itemId={data.id}
                        name={data.name}
                        imgSrc={data.imgSrc}
                        qty={"4"}
                        price={data.price}
                      />
                    ))}
                </div>
              </div>
              <div className="totalSection">
                <h3>Total</h3>
                <p>
                  <span>$ </span> {total}
                </p>
              </div>
              <button className="checkOut">Check Out</button>
              <button className="back" onClick={closemenu}>Back To Home</button>


            </div>
          )}
        </div>
          
      </main>

      
    </div>
  );
}

export default App;

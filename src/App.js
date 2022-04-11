import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Orders from './Components/Orders'
import { useEffect, useState } from "react";
import CartItem from './Components/CartItem';
import Header from "./Components/Header";
import ItemCard from "./Components/ItemCard";
import SubMenuContainer from "./Components/SubMenuContainer";
import { Items } from "./Components/Data";
import Checkout from './Components/CheckOut';
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
            <div className="cartCheckOutContainer">
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
                <Checkout/>
              </div>
              
              
              <button className="back" onClick={closemenu}>Back To Home</button>


            </div>
          )}
        </div>
       {/* Left menu */}
      <div className="footer">
      © 2022  All rights reserved


      </div>       
      
       </main>
      

      
    </div>
    
    
  );
}

export default App;

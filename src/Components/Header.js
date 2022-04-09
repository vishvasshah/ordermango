import React, { useEffect } from "react";
import {} from "@mui/material";
import { useStateValue } from "./StateProvider";
import { BarChart, SearchRounded, ShoppingCartRounded } from "@mui/icons-material";

const openMenu= () =>{
    document.querySelector(".rightMenu").classList.add("active");
  }

  const closemenu= () =>{
    document.querySelector(".rightMenu").classList.remove("active");
  }

  
function Header() 
{
    const [{ cart }, dispatch] = useStateValue();
    return <header>
        <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/freshgro-6d248.appspot.com/o/chemical-mango-ora6y7i5w6yiwqhq55sw8wxlhsn4zlfb2307doe8sg.png?alt=media&token=6860f796-da53-4513-bccf-7eb21046eace" alt=""/>
        <div className="inputBox">
            <SearchRounded className="searchIcon"/>
            <input type="text" placeholder="search"/>
        </div>

        <div className="shoppingCart" onClick={openMenu}>
            <ShoppingCartRounded className="cart"/>
            <div className="cart_content">
                <p>{cart ? cart.length : ""}</p>
            </div>
            
        </div>

       
    </header>;
}
export default Header;
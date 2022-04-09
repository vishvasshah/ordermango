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
        <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/freshgro-6d248.appspot.com/o/1601881328936.jpg?alt=media&token=0eac3044-5498-4d64-8a16-5b81f70538a2" alt=""/>
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
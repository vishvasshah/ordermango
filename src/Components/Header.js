import React from "react";
import {} from "@mui/material"
import { BarChart, SearchRounded, ShoppingCartRounded } from "@mui/icons-material";

const openMenu= () =>{
    document.querySelector(".rightMenu").classList.add("active");
  }

  const closemenu= () =>{
    document.querySelector(".rightMenu").classList.remove("active");
  }

  
function Header() 
{
    return <header>
        <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/freshgro-6d248.appspot.com/o/1601881328936.jpg?alt=media&token=0eac3044-5498-4d64-8a16-5b81f70538a2" alt=""/>
        <div className="inputBox">
            <SearchRounded className="searchIcon"/>
            <input type="text" placeholder="search"/>
        </div>

        <div className="shoppingCart">
            <ShoppingCartRounded className="cart"/>
            <div className="cart_content">
                <p>2</p>
            </div>
            
        </div>

       <div className="profileContainer"><h4>vishwas shah</h4></div>
        <div className="toggleMenu" onClick={openMenu}>
            <BarChart className="toggleIcon"/>
        </div>
    </header>;
}
export default Header;
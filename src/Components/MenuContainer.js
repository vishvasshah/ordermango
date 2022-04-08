import React from "react";
function MenuContainer({icon , link}){
    return <li>
        <a href={link}>
            <span className="icon">{icon}</span>
        </a>
    </li>
}
export default MenuContainer;
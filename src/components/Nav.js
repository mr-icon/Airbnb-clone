import React from "react";
import logo from "../images/airbnb-logo.png"

function Nav() {
    return(
        <div>
            <nav>
                <img src={logo} alt="" className="logo" />
            </nav>
        </div>
    );
}

export default Nav;
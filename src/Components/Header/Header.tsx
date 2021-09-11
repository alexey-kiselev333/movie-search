import * as React from "react";
import Navigation from "../../Pages/Navigation";


const Header = () => {
    return <header>
        <div className="headerLeft">
            <img className="beer" src="/img/beer.jpg" alt="Logo"/>
            <div className="headerInfo">
                <h3 className="text-up">КИНО</h3>
                <p className="opacity">Поисковик фильмов</p>
            </div>
        </div>
        <ul className="headerRight">
            <li className="distance cu-p">
                <img width={18} height={18} src="/img/cart.svg" alt="Cart"/>
                <span>0 руб</span>
            </li>
            <li>
                <img width={18} height={18} src="/img/user.svg" alt="user"/>
            </li>
        </ul>
    </header>

}

export default Header
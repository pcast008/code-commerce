import { Component } from "react";
import "./NavBar.css";

export class NavBar extends Component {
    render() {
        const profile = this.props.loggedIn ? 
        <button className={"nav-link"} href="#" onClick={this.props.signOut}>Sign out</button> :
        <button className={"nav-link " + (this.props.page === "login" ? "active " : "")} href="#" onClick={() => {this.props.updatePage("login")}}>Login/Create Account</button>
        
        return (
            <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <div className="brand-nav">
                        <div className="navbar-brand"><i className="bi bi-code-square d-inline-block align-text-middle"></i> Code Commerce</div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {this.props.loggedIn ? <button className={"nav-link " + (this.props.page === "cart" ? "active " : "")} href="#" onClick={() => {this.props.updatePage("cart")}}>Cart</button> : ""}
                            </li>
                            <li className="nav-item">
                                <button className={"nav-link " + (this.props.page === "shop" ? "active " : "")} href="#" onClick={() => {this.props.updatePage("shop")}}>Shop</button>
                            </li>
                            <li className="nav-item">
                                {profile}
                            </li>
                        </ul>
                    </div>
                    <i onClick={() => {this.props.loggedIn && this.props.updatePage("cart")}} className="bi bi-bag">
                        <div className="cart-quantity">{this.props.cartTotalItems}</div>
                    </i>
                </div>
            </nav>
        )
    }
}













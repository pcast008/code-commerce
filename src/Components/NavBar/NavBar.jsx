import { Component } from "react";
import "./NavBar.css";

export class NavBar extends Component {
    render() {
        const profile = this.props.loggedIn ? 
        <a className={"nav-link"} href="#" onClick={this.props.signOut}>Sign out</a> :
        <a className={"nav-link " + (this.props.page === "login" ? "active " : "")} href="#" onClick={() => {this.props.updatePage("login")}}>Login/Create Account</a>
        
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" onClick={() => {this.props.updatePage("login")}}><i className="bi bi-code-square d-inline-block align-text-middle"></i> Code Commerce</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {this.props.loggedIn ? <a className={"nav-link " + (this.props.page === "cart" ? "active " : "")} href="#" onClick={() => {this.props.updatePage("cart")}}>Cart</a> : ""}
                            </li>
                            <li className="nav-item">
                                <a className={"nav-link " + (this.props.page === "shop" ? "active " : "")} href="#" onClick={() => {this.props.updatePage("shop")}}>Shop</a>
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













import { Component } from "react";
import { Button } from "../Button/Button";
import "./CartItem.css";

export class CartItem extends Component {
    render() {
        const btn = this.props.page === "cart" ? <Button buttonText="X" btnClass="btn-outline-secondary remove-cart-item" onClick={() => {this.props.removeFromCart(this.props.id)}} /> : <div></div>;

        return (
            <div id={this.props.id} className="cart-item-container bg-light">
                {btn}
                <div className="cart-item-content">
                    <div className="cart-item-image-container">
                        <img src={this.props.image} alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">Price: ${this.props.price}</p>
                            <p className="card-text"><small className="text-muted">Quantity: {this.props.quantity}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
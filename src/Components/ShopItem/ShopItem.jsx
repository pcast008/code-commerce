import { Component } from "react";
import { Button } from "../Button/Button";
import "./ShopItem.css";

export class ShopItem extends Component {
    render() {
        return (
            <div id={this.props.id} className="card bg-light">
                <img src={this.props.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">${this.props.price}</p>
                </div>               
                <Button
                    buttonText={<div><i className="bi bi-bag-plus"></i> Add to Cart</div>}
                    btnClass={"btn btn-outline-primary btn-sm"}
                    type={"button"}
                    onClick={() => {this.props.addToCart(this.props.id)}}
                />
            </div>
        )
    }
}
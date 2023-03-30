import { Component } from "react";
import { Button } from "../Button/Button";
import "./ShopItem.css";

export class ShopItem extends Component {
    render() {
        const disabledClass = this.props.findCartItem(this.props.id) ? "" : "disabled";

        return (
            <div id={this.props.id} className="card bg-light">
                <img src={this.props.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">${this.props.price}</p>
                </div>   
                <div className="card-buttons">
                    <div className="card-btn">
                        <Button
                            buttonText={<i className="bi bi-bag-plus"></i>}
                            btnClass={"btn btn-outline-primary btn-sm"}
                            type={"button"}
                            onClick={() => {this.props.addToCart(this.props.id)}}
                        />
                    </div>
                    <div className="card-btn">
                        <Button
                            buttonText={<i className="bi bi-bag-x"></i>}
                            btnClass={"btn btn-outline-danger btn-sm " + disabledClass}
                            type={"button"}
                            onClick={() => {this.props.removeFromCart(this.props.id)}}
                        />
                    </div>   
                </div>                
            </div>
        )
    }
}
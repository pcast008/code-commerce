import { Component } from "react";
import { ShopItem } from "../ShopItem/ShopItem";
import "./Shop.css";
import { data } from "../../data"

export class Shop extends Component {
    render() {
        const cardData = data.map((_card, index) => <ShopItem key={index + 1} addToCart={this.props.addToCart} { ...data[index] } />) 

        return (
            <div className="shop-container">{cardData}</div>
        )
    }
}
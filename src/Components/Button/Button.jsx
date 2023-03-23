import { Component } from "react";

export class Button extends Component {
    render() {
        return (
            <div className="d-grid">
                <button onClick={this.props.onClick} className={`btn ${this.props.btnClass}`} type={this.props.type}>{this.props.buttonText}</button>
            </div>
        )
    }
}
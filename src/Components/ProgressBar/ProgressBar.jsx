import { Component } from "react";
import "./ProgressBar.css";

export class ProgressBar extends Component {
    render() {
        return (
            <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar progress-bar-animated progress-bar-striped" style={{"width": this.props.width}}>{this.props.text}</div>
            </div>
        )
    }
}
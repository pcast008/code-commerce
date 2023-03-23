import { Component } from "react";
import "./FormInput.css";
import { CARDICON } from "../../constants";

export class FormInput extends Component {
    state = {
        inputType: "password"
    }

    onClick = (e) => {
        this.state.inputType === "password" ? this.setState({ inputType: "text" }) : this.setState({ inputType: "password" });     
    }

    render() {
        return (
            <div className={`form-floating input-container ${this.props.className}`}>
                <input 
                    name={this.props.id} 
                    type={this.props.type === "password" ? this.state.inputType : this.props.type} 
                    className={`form-control ${this.props.error ? "alert alert-danger" : ""}`} 
                    id={this.props.id} 
                    placeholder={this.props.placeholder} 
                    autoComplete="off" 
                    onChange={this.props.onChange} 
                    value={this.props.value}
                    maxLength={this.props.maxLength}
                >
                    
                </input>
                <label className="form-floating" htmlFor={this.props.id}>{this.props.label}</label>
                {this.props.error ? <div className="input-error-container"><i className="input-error bi bi-exclamation-circle"></i>{this.props.error}</div> : <div></div>}          
                {
                    this.props.type === "password" ?
                    (this.state.inputType === "password" ? <i onClick={this.onClick} className="bi bi-eye"></i> : <i onClick={this.onClick} className="bi bi-eye-slash"></i>) :
                    (this.props.value ? <i onClick={this.props.onClick} className="bi bi-x-lg"></i> : <i></i>)
                }     
                <div className="card-icon"><img src={CARDICON[this.props.cardType]} alt="" /></div>         
            </div>
        )
    }
}
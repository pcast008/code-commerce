import { Component } from "react";
import { FormInput } from "../FormInput/FormInput";
import { Button } from "../Button/Button";
import "./LoginForm.css";

export class LoginForm extends Component {
    render() {
        const inputData = [
            { id: "email", type: "email", label: "Email", placeholder: "Email", onChange: this.props.onChange, value: this.props.email, error: this.props.emailError, onClick: () => {this.props.clearInput("email")} },
            { id: "password", type: "password", label: "Password", placeholder: "Password", onChange: this.props.onChange, value: this.props.password, error: this.props.passwordError }
        ]

        const formInputs = inputData.map((input, index) => <FormInput key={index + 1} { ...input } />);

        return (
            <form className="form-container" onSubmit={this.props.onSubmit} noValidate>
                {this.props.loginFormError ? <div className="form-error input-error-container"><i className="input-error bi bi-exclamation-circle"></i>{this.props.loginFormError}</div> : <div></div>}
                {formInputs}
                <Button
                    buttonText={"Login"}
                    btnClass={"btn-outline-primary"}
                    type={"submit"}
                />
                <div className="separator-container">
                    <div className="divider"></div>
                    <div className="divider-text">or</div>
                    <div className="divider"></div>
                </div>
                <div className="d-grid">
                    <button id="fb" className="btn facebook-button" disabled>
                    <i className="bi bi-facebook"></i>
                        <div>Sign In with Facebook</div>
                    </button>
                </div>
            </form>
        )
    }
}
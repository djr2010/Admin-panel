import React, {Component} from "react";

export default class Login extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			pass: ""
		};
	}
	
	onPasswordChange(event) {
		this.setState({
			pass: event.target.value
		});
	}
	
	render() {
		const {pass} = this.state;
		const {login, lengthErr, logErr} = this.props;
		
		let renderLogErr, renderLengthErr;
		
		logErr ? renderLogErr = <span className="login-error">Введен неправильный пароль</span> : null;
		
		lengthErr ? renderLengthErr =
			<span className="login-error">Пароль должен содержать не менее 5 символов</span> : null;
		
		return (
			<div className="login-container">
				<div className="login">
					<h2 className="uk-modal-title uk-text-center">Авторизация</h2>
					<div className="uk-margin-top uk-text-lead">Пароль:</div>
					<input
						type="password"
						id=""
						name=""
						className="uk-input uk-margin-top"
						placeholder="Пароль"
						value={pass}
						onChange={(event) => this.onPasswordChange(event)}></input>
					{renderLogErr}
					{renderLengthErr}
					<button
						type="button"
						className="uk-button uk-button-primary uk-margin-top "
						onClick={() => login(pass)}>Вход
					</button>
				</div>
			</div>
		);
	}
}
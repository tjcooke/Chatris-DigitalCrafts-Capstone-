import React, { Component } from "react";
import axios from "axios";

import {
	StyleSheet,
	Keyboard,
	Text,
	View,
	TextInput,
	TouchableWithoutFeedback,
	Alert,
	KeyboardAvoidingView
} from "react-native";
import { Button } from "react-native";

// const appId = "609894231244-0qhicv602n7a56t35n4hmn4ahrd3mi7c.apps.googleusercontent.com"

export default class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			userName: "",
			password: "",
			signUp: false
		};
	}


	_signUpScreen = () => {
		const { firstName, lastName, userName, password } = this.state;

		return (
			<View style={styles.loginFormView}>

				<Text style={styles.logoText}>Chatris</Text>
				<Button
							
							onPress={this._changeScreen}
							title={'Already a user?'}
						
						></Button>
				<TextInput
					placeholder="First Name"
					placeholderColor="#c4c3cb"
					style={styles.loginFormTextInput}
					onChangeText={firstName => this.setState({ firstName })}
					value={firstName}
				/>
				<TextInput
					placeholder="Last Name"
					placeholderColor="#c4c3cb"
					style={styles.loginFormTextInput}
					onChangeText={lastName => this.setState({ lastName })}
					value={lastName}
				/>
				<TextInput
					placeholder="Email"
					placeholderColor="#c4c3cb"
					style={styles.loginFormTextInput}
					onChangeText={userName => this.setState({ userName })}
					value={userName}
				/>
				<TextInput
					placeholder="Password"
					placeholderColor="#c4c3cb"
					style={styles.loginFormTextInput}
					secureTextEntry={true}
					onChangeText={password => this.setState({ password })}
					value={password}
				/>
				<Button
					buttonStyle={styles.loginButton}
					onPress={() =>
						this.props.signUp(
							this.state.firstName,
							this.state.lastName,
							this.state.userName,
							this.state.password
						)
					}
					title="Sign Up"
				/>

			</View>
		);
	};

	_loginScreen = () => {
		const { userName, password } = this.state;

		return (
			<View style={styles.loginFormView}>
				<Text style={styles.logoText}>Chatris</Text>
				<Button
							onPress={this._changeScreen}
							title={'new user? sign-up'}
						
							>
							</Button>

				<TextInput
					placeholder="Email"
					placeholderColor="#c4c3cb"
					style={styles.loginFormTextInput}
					onChangeText={userName => this.setState({ userName })}
					value={userName}
				/>
				<TextInput
					placeholder="Password"
					placeholderColor="#c4c3cb"
					style={styles.loginFormTextInput}
					secureTextEntry={true}
					onChangeText={password => this.setState({ password })}
					value={password}
				/>
				<Button
					buttonStyle={styles.loginButton}
					onPress={() =>
						this.props.logInUser(
							this.state.userName,
							this.state.password
						)
					}
					title="Login"
				/>
			</View>
		);
	};

	_changeScreen = () => {
		this.setState({ signUp: !this.state.signUp });
	};

	render() {
		return (
			<KeyboardAvoidingView
				style={styles.containerView}
				behavior="padding"
			>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					
					<View style={styles.loginScreenContainer}>
						{this.state.signUp
							? this._signUpScreen()
							: this._loginScreen()}
							
							

					</View>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		);
	}

}
const styles = StyleSheet.create({
	containerView: {
		flex: 1,
		backgroundColor: "#96D2E0"
	},
	loginScreenContainer: {
		flex: 1,
		paddingBottom: 30
	},
	logoText: {
		fontSize: 40,
		fontWeight: "800",
		marginTop: 150,
		marginBottom: 30,
		textAlign: "center",
		color: "#E2F5FA"
	},
	loginFormView: {
		flex: 1
	},
	loginFormTextInput: {
		height: 43,
		fontSize: 14,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "#eaeaea",
		backgroundColor: "#fafafa",
		paddingLeft: 10,
		marginLeft: 15,
		marginRight: 15,
		marginTop: 5,
		marginBottom: 5
	},
	loginButton: {
		backgroundColor: "#3897f1",
		borderRadius: 5,
		height: 45,
		marginTop: 10
	},
	fbLoginButton: {
		height: 45,
		marginTop: 10,
		backgroundColor: "transparent"
	}
});

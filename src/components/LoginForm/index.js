import React, { useState } from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import AppleIcon from "@material-ui/icons/Apple";
import LockIcon from "@material-ui/icons/Lock";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

import styles from "./LoginForm.module.css";

const LoginForm = ({ price, timestamp, setResetPassword, setIsLoggedIn }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);

	// Login user
	const loginHandler = (event) => {
		event.preventDefault();
		if (!email || !password) {
			setError(true);
		} else {
			setIsLoggedIn(true);
		}
		/*
		TODO: Read email, password and verify.
		If authentication is successfull 
		redirect the user to next page
		*/
	};

	// Resest password and show password reset modal
	const forgotPasswordHandler = (event) => {
		event.preventDefault();
		setResetPassword(true);
	};

	// Register new user
	const signUpHandler = (event) => {
		event.preventDefault();
		/*
		TODO: Register a new user and 
		sign up user for start free trail
		*/
	};

	return (
		<div className={styles.login}>
			<form>
				<div className={styles.homeIconContainer}>
					<AccountBalanceIcon className={styles.homeIcon} />
				</div>

				<div className={styles.welcome}>
					<div>Welcome back.</div>
				</div>

				<div className={styles.signUp}>
					New to ORTEX?{"   "}
					<button className={styles.signUpBtn} onClick={signUpHandler}>
						{" "}
						Start a free trial
					</button>
				</div>

				<input
					placeholder="Your email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				{error && !email && <p>Email is required</p>}

				<input
					placeholder="Your password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				{error && !password && <p>Password is required</p>}
				<button
					type="button"
					className={styles.loginBtn}
					onClick={loginHandler}>
					<div className={styles.loginBtnValue}>
						<LockIcon className={styles.lockIcon} />
						Log in
					</div>
				</button>

				<div className={styles.forgotPassword}>
					<button
						className={styles.forgotPasswordBtn}
						onClick={forgotPasswordHandler}>
						Reset your password?
					</button>
				</div>

				<div className={styles.loginOption}>Or log in with</div>
				<div className={styles.loginOptionContainer}>
					<button className={styles.twitterBtn}>
						<TwitterIcon className={styles.icon} />
					</button>

					<button className={styles.fbBtn}>
						<FacebookIcon className={styles.icon} />
					</button>

					<button className={styles.appleBtn}>
						<AppleIcon className={styles.icon} />
					</button>
				</div>

				<div className={styles.privacyPolicy}>
					By continuing you accept our <span>Terms of Use</span> and{" "}
					<span>Privacy Policy.</span>
				</div>

				<div className={styles.results}>
					<h2>1 EUR = </h2>
					<span>{price}</span>
					<h2> USD</h2>
				</div>

				<h4 className={styles.timestamp}>
					Last updated: <span>{timestamp}</span>{" "}
				</h4>
			</form>
		</div>
	);
};

export default LoginForm;

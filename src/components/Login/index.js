import React, { useState } from "react";

import styles from "./Login.module.css";
import { Alert } from "@material-ui/lab";
import Grid from "@material-ui/core/Grid";
import LoginForm from "../LoginForm";
import ResetPasswordModal from "../ResetPasswordModal";

const Login = ({ price, timestamp }) => {
	const [resetPassword, setResetPassword] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<>
			<Grid container>
				<Grid item xs={12} md={6} className={styles.left} />

				<Grid item xs={12} md={6} className={styles.right}>
					{isLoggedIn ? (
						<Alert
							variant="outlined"
							severity="success"
							className={styles.loginAlert}>
							You are successfully logged in !
						</Alert>
					) : (
						<LoginForm
							price={price}
							timestamp={timestamp}
							setResetPassword={setResetPassword}
							setIsLoggedIn={setIsLoggedIn}
						/>
					)}
				</Grid>
			</Grid>

			{resetPassword && (
				<ResetPasswordModal setResetPassword={setResetPassword} />
			)}
		</>
	);
};

export default Login;

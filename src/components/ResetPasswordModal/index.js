import React, { useState } from "react";

import styles from "./ResetPasswordModal.module.css";

const ResetPasswordModal = ({ setResetPassword }) => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState(false);

	// Close the error modal by clicking the backdrop
	const closeModal = (e) => {
		if (e.target.id === "modal") {
			setResetPassword(false);
		}
	};

	// Reset the password and close the modal
	const resetPasswordHandler = (event) => {
		event.preventDefault();

		if (!email) {
			setError(true);
		} else {
			setResetPassword(false);
			/*
		TODO: Send an email to user with password reset link
		*/
		}
	};

	return (
		<div id="modal" className={styles.modal} onClick={closeModal}>
			<div className={styles.modalContent}>
				<h2 className={styles.title}>Reset password?</h2>
				<p className={styles.description}>
					Don't worry, just enter the email address you registered with and we
					will send you a link to reset your password.
				</p>

				<form className={styles.form}>
					<input
						placeholder="Enter your email address"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					{error && <p>Email cannot be empty</p>}

					<button
						className={styles.passwordResetBtn}
						onClick={resetPasswordHandler}>
						Send password reset link
					</button>
				</form>
			</div>
		</div>
	);
};

export default ResetPasswordModal;

//modules
import { useState, useEffect, useRef } from "react";
import { BiError } from "react-icons/bi";

//styles
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [isSent, setIsSent] = useState(false);

	//handlers
	const handleSubmit = (event) => {
		event.preventDefault(event);
	};

	return (
		<section className={styles.contactForm}>
			<h2>Contact us</h2>
			<div className={styles.wrapper}> 
				<form onSubmit={handleSubmit}>
					<label htmlFor='name'>
						Name*:
						<div className={styles.inputGroup}>
							<BiError />
							<input
								aria-required
								type='text'
								name='name'
								id='name'
								aria-label='name'
								value={name}
								onChange={(event) => setName(event.target.value)}
							/>
						</div>
					</label>
					<label htmlFor='email'>
						Email*:
						<div className={styles.inputGroup}>
							<BiError />
							<input
								aria-required
								type='email'
								name='email'
								id='email'
								aria-label='email'
								value={email}
								onChange={(event) => setEmail(event.target.value)}
							/>
						</div>
					</label>
					<label htmlFor='name'>
						Message*:
						<div className={styles.inputGroup}>
							<BiError />
							<textarea
								aria-required
								type='text'
								name='message'
								id='message'
								aria-label='message'
								value={message}
								onChange={(event) => setMessage(event.target.value)}
							/>
						</div>
					</label>
					<button>Submit</button>
				</form>
			</div>
		</section>
	);
}

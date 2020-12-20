//modules
import { useState } from "react";
import Link from "next/link";
import { BiError } from "react-icons/bi";
import { IoMdThumbsUp } from "react-icons/io";

//styles
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const statusValues = {
    initial: "INITIAL",
    valid: "VALID",
    invalid: "INVALID",
    submitted: "SUBMITTED",
  };

  const [name, setName] = useState({
    value: "",
    isValid: false,
    errorMessage: "minimum required letters: 3",
  });
  const [email, setEmail] = useState({
    value: "",
    isValid: false,
    errorMessage: "invalid email",
  });
  const [message, setMessage] = useState({
    value: "",
    isValid: false,
    errorMessage: "this field can not be empty",
  });
  const [submitStatus, setSubmitStatus] = useState(statusValues.initial);

  const emailRegex = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );

  //handlers
  const handleSubmit = (event) => {
    event.preventDefault(event);

    if (name.isValid && email.isValid && message.isValid) {
      // Do somthing with siccessfull submit
      setSubmitStatus(statusValues.submitted);
    } else {
      setSubmitStatus(statusValues.invalid);
    }
  };

  //validation
  const isValidName = () => name.value.length >= 3;
  const isValidMessage = () => message.value !== "";
  const isValidEmail = () => emailRegex.test(email.value);

  return (
    <section className={styles.contactForm}>
      <h2>Contact us</h2>
      <div className={styles.wrapper}>
        {submitStatus === statusValues.submitted ? (
          <div className={styles.submitted}>
            <IoMdThumbsUp className={styles.submittedIcon} /> Thank you, your
            form has been submitted. We will be in contact with you soon at:{" "}
            <span className={styles.submittedEmail}>{`${email.value}`}</span>
            <Link href="/">
              <a className={styles.link}>Back to Homepage</a>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              Name*:
              <div className={styles.inputGroup}>
                {!name.isValid && submitStatus !== statusValues.initial && (
                  <BiError className="error" />
                )}
                <input
                  aria-required
                  type="text"
                  name="name"
                  id="name"
                  aria-label="name"
                  value={name.value}
                  onChange={(event) =>
                    setName({
                      ...name,
                      value: event.target.value,
                      isValid: isValidName(event.target.value),
                    })
                  }
                />
              </div>
            </label>

            {!name.isValid && submitStatus !== statusValues.initial && (
              <div
                className={styles.errorMessage}
                aria-live={name.errorMessage}
              >
                {name.errorMessage}
              </div>
            )}

            <label htmlFor="email">
              Email*:
              <div className={styles.inputGroup}>
                {!email.isValid && submitStatus !== statusValues.initial && (
                  <BiError />
                )}
                <input
                  aria-required
                  type="email"
                  name="email"
                  id="email"
                  aria-label="email"
                  value={email.value}
                  onChange={(event) =>
                    setEmail({
                      ...email,
                      value: event.target.value,
                      isValid: isValidEmail(event.target.value),
                    })
                  }
                />
              </div>
            </label>

            {!email.isValid && submitStatus !== statusValues.initial && (
              <div className={styles.errorMessage}>{email.errorMessage}</div>
            )}

            <label htmlFor="name">
              Message*:
              <div className={styles.inputGroup}>
                {!message.isValid && submitStatus !== statusValues.initial && (
                  <BiError />
                )}

                <textarea
                  aria-required
                  type="text"
                  name="message"
                  id="message"
                  aria-label="message"
                  value={message.value}
                  onChange={(event) =>
                    setMessage({
                      ...message,
                      value: event.target.value,
                      isValid: isValidMessage(event.target.value),
                    })
                  }
                />
              </div>
            </label>

            {!message.isValid && submitStatus !== statusValues.initial && (
              <div
                className={styles.errorMessage}
                aria-live={message.errorMessage}
              >
                {message.errorMessage}
              </div>
            )}
            <button>Submit</button>
          </form>
        )}
      </div>
    </section>
  );
}

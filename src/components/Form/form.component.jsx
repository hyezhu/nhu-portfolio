import "./form.styles.scss";
import { NetlifyForm, Honeypot } from "react-netlify-forms";


export default function Form() {
    return (
      <NetlifyForm
        className="form"
        name="contact"
        action="/thanks"
        honeypotName="bot-field"
      >
        {({ handleChange, success, error }) => (
          <>
            <Honeypot />
            {success && <p className="submit-message">Thanks for contacting me!</p>}
            {error && (
              <p className="submit-message">
                Sorry, the servers could not be reached. Please try again later.
              </p>
            )}
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="name">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                type="text"
                name="message"
                id="message"
                rows="4"
                onChange={handleChange}
              />
            </div>
              <button className="btn-submit" type="submit">
                Submit
              </button>
          </>
        )}
      </NetlifyForm>
    );
}
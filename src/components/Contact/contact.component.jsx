import "./contact.styles.scss";

export default function Contact() {
    return (
      <div id="contact">
        <h2>Contact me</h2>
        
          <form className="form" name="contact" method="POST" data-netlify="true">
            <p>
              <label>
                Your Name <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Your Email <input type="email" name="email" />
              </label>
            </p>
            {/* <p>
              <label>
                Your Role:{" "}
                <select name="role[]" multiple>
                  <option value="leader">Leader</option>
                  <option value="follower">Follower</option>
                </select>
              </label>
            </p> */}
            <p>
              <label>
                Message <textarea name="message"></textarea>
              </label>
            </p>
            <p>
              <button className="btn-submit" type="submit">Send</button>
            </p>
          </form>
      </div>
    );
}
import React, { Component } from "react";
import Form from "../components/Form";
// import Utilities from "../components/Utilities";

class Contact extends Component {
  state = {};
  render() {
    return (
      <main>
        <h1 className="contact-intro display-2">Want to Hire Me?</h1>
        <p>Drop me a note about job opportunities or anything else!</p>
        <Form />
        {/* <form action="/my-handling-form-page" method="post">
          <input
            className="m-2"
            type="text"
            id="name"
            name="user_name"
            placeholder="Name"
          />

          <input
            className="m-2"
            type="email"
            id="mail"
            name="user_email"
            placeholder="Email"
          />

          <textarea
            className="m-2"
            id="msg"
            name="user_message"
            placeholder="Message"
          ></textarea>

          <button
            onMouseOver={Utilities.handleMouseOver}
            onMouseOut={Utilities.handleMouseOut}
            className="button gradient"
          >
            Submit
          </button>
        </form> */}
      </main>
    );
  }
}

export default Contact;
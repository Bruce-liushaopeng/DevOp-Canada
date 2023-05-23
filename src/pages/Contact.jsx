import React from "react";

function Contact() {
  return (
    <>
    <h1>
      Contact Page
    </h1>
    <p>Please fill out the form below to contact us.</p>
    <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default Contact;

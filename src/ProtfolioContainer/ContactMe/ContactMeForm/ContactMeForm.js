import React from "react";

export default function ContactMeForm() {
  return (
    <div className="contact-me-form">
      <form>
        <label for="name">
          name
          <input type={"text"} id="name" />
        </label>
      </form>
    </div>
  );
}

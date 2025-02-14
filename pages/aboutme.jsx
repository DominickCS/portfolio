import React from "react";
import Navbar from "/components/navbar.jsx";
import Header from "/components/header.jsx";

function AboutMe() {
  return (
    <div>
      <Navbar />
      <section>
        <h1>About Me</h1>
        <p>
          Hello, I'm Dominick, a Junior Software Engineering student attending
          Western Governors University.
        </p>
        <p>
          I have a passion for all things computers. Ever since I was a kid I
          have been trying to understand the inner mechanics of the world around
          me.
        </p>
      </section>
    </div>
  );
}

export default AboutMe;

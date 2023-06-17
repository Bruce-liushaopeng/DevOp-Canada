import { Card, CardContent, Typography } from "@mui/material";
import React from "react";


function About() {
  return (
    <>
      <h1>About Us </h1>
      <p>
        Here is a little about DevOps Community of Practice. Here is some dummy
        text. Here is some dummy text. Here is some dummy text. Here is some dummy
        text. Here is some dummy text. Here is some dummy text.
      </p>
      <h2>Contributors </h2>
      <ul>
        <li>
          <b>John Doe:</b> Director
        </li>
        <li>
          <b>Jane Doe:</b> Marketing
          </li>
        <li>
          <b>Jill Doe:</b> Tech Lead
          </li>
        <li>
          <b>Jane Doe:</b> Frontend Engineer
          </li>
        <li>
          <b>Jim Doe:</b> DevOps Engineer
          </li>
      </ul>
    </>
  );
}
export default About;

import React from "react";
import { Link } from "react-router-dom";
import "../Page/NotFound.css";
const NotFoundPage = () => {
  return (
    <div>
      <h1>404 Error Page </h1>
      <p class="zoom-area">
        <b>404</b> Lorem ipsum dolor sit amet consectetur adipisicing.{" "}
      </p>
      <section class="error-container">
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
        <span class="zero">
          <span class="screen-reader-text">0</span>
        </span>
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
      </section>
      <div class="link-container">
        <Link to="/" class="more-link">
          Visit the original article
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

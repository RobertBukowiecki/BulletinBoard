import React from "react";

import { Link } from "react-router-dom";

import styles from "./NotFound.module.scss";

const Component = () => (
  <div className={styles.root}>
    <h2>NotFound</h2>
    <h2>
      <Link styles={{ textDecoration: "none" }} to="/">
        Back to homepage
      </Link>
    </h2>
  </div>
);

export {
  Component as NotFound,
  // Container as NotFound,
  Component as NotFoundComponent,
};

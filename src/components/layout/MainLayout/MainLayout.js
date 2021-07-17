import React from "react";
import PropTypes from "prop-types";


import clsx from "clsx";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./MainLayout.module.scss";
import { Container } from "@material-ui/core";

const Component = ({ className, children }) => (
  <Container>
    <div className={clsx(className, styles.root)}>
      <h2>Main Layout</h2>
      {children}
    </div>
  </Container>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as MainLayout,
  // Container as MainLayout,
  Component as MainLayoutComponent,
};

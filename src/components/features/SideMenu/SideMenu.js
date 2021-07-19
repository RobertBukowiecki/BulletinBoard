import React from "react";
// import PropTypes from "prop-types";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";

import { getUserInfo } from "../../../redux/usersRedux";
import { useSelector } from "react-redux";

import styles from "./SideMenu.module.scss";
const Component = () => {
  const userInfo = useSelector((state) => getUserInfo(state));
  return (
    <div className={styles.root}>
      <div className={styles.contentWrapper}>
        {userInfo.isLogged ? (
          <Link to="/post/add">
            <h2>Add post</h2>
          </Link>
        ) : (
          <h2>Login to add post</h2>
        )}
        <h2>Categories</h2>
        <FormControlLabel
          control={<Checkbox color="primary" defaultChecked />}
          label="Cars"
        />
      </div>
    </div>
  );
};

// Component.propTypes = {};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as SideMenu,
  // Container as SideMenu,
  Component as SideMenuComponent,
};

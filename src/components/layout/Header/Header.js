import React, { useState } from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import styles from "./Header.module.scss";
import { Container, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ({ className }) => {
  const [logged, setLogged] = useState(false);

  const handleClick = () => {
    setLogged(!logged);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Container maxWidth="xl">
        <Toolbar className={styles.toolbar}>
          <div className={styles.wrapper}>
            <Link to="/" className={styles.logo}>
              MotoOto
            </Link>
          </div>
          <div> SEARCHBAR PLACEHOLDER </div>
          <div className={styles.wrapper}>
            {logged ? (
              <div>
                <Button
                  variant="contained"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                >
                  Menu
                </Button>
                <Menu id="simple-menu" keepMounted autoFocus={false}>
                  {
                    <MenuItem>
                      <Link to="/post/add">New post</Link>
                    </MenuItem>
                  }
                  {
                    <MenuItem>
                      <Link to={"/posts/my-posts"}>My posts</Link>
                    </MenuItem>
                  }
                  {
                    <MenuItem>
                      <a onClick={handleClick}>Logout</a>
                    </MenuItem>
                  }
                </Menu>
              </div>
            ) : (
              <Link
                variant="contained"
                component={Button}
                to={"/auth/google"}
                onClick={handleClick}
              >
                Login
              </Link>
            )}
          </div>
        </Toolbar>
      </Container>
    </div>
  );
};

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
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Select from "@material-ui/core/Select";

import styles from "./Header.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { getUserInfo, logIn, logOut } from "../../../redux/usersRedux";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.35),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.4),
    },
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Component = ({}) => {
  const classes = useStyles();

  const userInfo = useSelector((state) => getUserInfo(state));
  const dispatch = useDispatch();

  const login = (admin) => dispatch(logIn(admin));
  const logout = () => dispatch(logOut());

  const handleSelectChange = (e) => {
    e.preventDefault();
    switch (e.currentTarget.value) {
      case "loggedOut":
        return logout();
      case "loggedIn":
        return login(false);
      case "admin":
        return login(true);
    }
  };

  return (
    <div className={styles.root}>
      <Container maxWidth="xl">
        <Toolbar className={styles.toolbar}>
          <Link to="/" className={styles.logo}>
            Garage Sales
          </Link>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Select native onChange={handleSelectChange}>
            <option value={"loggedOut"}>Logged out</option>
            <option value={"loggedIn"}>Logged in as John</option>
            <option value={"admin"}>Admin</option>
          </Select>
          {userInfo.isLogged ? (
            <Select native>
              <option value="userPosts">My Post</option>
              <option value="logout">Logout</option>
            </Select>
          ) : (
            <Link> LOGIN WITH OAuth </Link>
          )}
        </Toolbar>
      </Container>
    </div>
  );
};

Component.propTypes = {
  changeUser: PropTypes.func,
};

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};

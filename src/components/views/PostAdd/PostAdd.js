import React from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

import { useSelector } from "react-redux";
import { getUserInfo } from "../../../redux/usersRedux";
import styles from "./PostAdd.module.scss";

const Component = () => {
  const userInfo = useSelector((state) => getUserInfo(state));

  const testCategories = ["asdads", "11111", "bbbbb"];

  return (
    <div className={styles.root}>
      {userInfo.isLogged ? (
        <div className={styles.form}>
          <h1>Add new post</h1>
          <form>
            <TextField
              id="outlined-basic"
              label="Your name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Your email"
              type="email"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Your telephone number"
              type="tel"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Post name"
              variant="outlined"
            />
            <Autocomplete
              multiple
              id="tags-filled"
              options={testCategories.map((option) => option)}
              freeSolo
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    key={index}
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Categories"
                  placeholder="Categories"
                />
              )}
            />
            <TextField
              id="outlined-basic"
              label="Price"
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              variant="outlined"
            />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={10}
              variant="outlined"
            />
            <div className={styles.buttons}>
              <input
                accept="image/*"
                className={styles.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
              <Button variant="contained" color="primary">
                Add post
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <div className={styles.addPost}> Log in to add post </div>
      )}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as PostAdd,
  // Container as PostAdd,
  Component as PostAddComponent,
};

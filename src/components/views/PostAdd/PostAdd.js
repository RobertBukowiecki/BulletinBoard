import React from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

import { v4 as uuidv4 } from "uuid";
import { Form as FormField, Field } from "react-final-form";

import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../../redux/usersRedux";
import styles from "./PostAdd.module.scss";
import { addPost } from "../../../redux/postsRedux";

const Component = () => {
  const userInfo = useSelector((state) => getUserInfo(state));

  const dispatch = useDispatch();
  const addingPost = (payload) => dispatch(addPost(payload));

  const testCategories = ["asdads", "11111", "bbbbb"];

  const onSubmit = (values) => {
    const { title, author, description, email, price, phone } = values;

    const output = {
      id: uuidv4(),
      title,
      author,
      description,
      email,
      price,
      phone,
      image:
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    };
    addingPost(output);
  };

  const required = (value) => (value ? undefined : "Required");

  return (
    <div className={styles.root}>
      {userInfo.isLogged ? (
        <div className={styles.form}>
          <h1>Add new post</h1>
          <FormField onSubmit={onSubmit}>
            {(prop) => (
              <form
                onSubmit={(e) => {
                  prop.handleSubmit(e);
                  prop.form.reset();
                }}
              >
                <Field name="author" validate={required}>
                  {(props) => {
                    const { name, value, onChange } = props.input;
                    return (
                      <TextField
                        name={name}
                        value={value}
                        onChange={onChange}
                        label="Your name"
                        variant="outlined"
                      />
                    );
                  }}
                </Field>
                <Field name="email" validate={required}>
                  {(props) => {
                    const { name, value, onChange } = props.input;
                    return (
                      <TextField
                        name={name}
                        value={value}
                        onChange={onChange}
                        label="Your email"
                        type="email"
                        variant="outlined"
                      />
                    );
                  }}
                </Field>
                <Field name="phone" validate={required}>
                  {(props) => {
                    const { name, value, onChange } = props.input;
                    return (
                      <TextField
                        name={name}
                        value={value}
                        onChange={onChange}
                        label="Your telephone number"
                        type="tel"
                        variant="outlined"
                      />
                    );
                  }}
                </Field>
                <Field name="title" validate={required}>
                  {(props) => {
                    const { name, value, onChange } = props.input;
                    return (
                      <TextField
                        name={name}
                        value={value}
                        onChange={onChange}
                        label="Post name"
                        variant="outlined"
                      />
                    );
                  }}
                </Field>
                <Autocomplete
                  multiple
                  options={testCategories.map((option) => option)}
                  freeSolo
                  renderTags={(value, getTagProps) => {
                    return value.map((option, index) => (
                      <Chip
                        key={index}
                        variant="outlined"
                        label={option}
                        {...getTagProps({ index })}
                      />
                    ));
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Categories"
                      placeholder="Categories"
                    />
                  )}
                />
                <Field name="price" validate={required}>
                  {(props) => {
                    const { name, value, onChange } = props.input;
                    return (
                      <TextField
                        name={name}
                        value={value}
                        onChange={onChange}
                        label="Price"
                        type="number"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">$</InputAdornment>
                          ),
                        }}
                        variant="outlined"
                      />
                    );
                  }}
                </Field>
                <Field name="description" validate={required}>
                  {(props) => {
                    const { name, value, onChange } = props.input;
                    return (
                      <TextField
                        name={name}
                        value={value}
                        onChange={onChange}
                        label="Description"
                        multiline
                        rows={10}
                        variant="outlined"
                      />
                    );
                  }}
                </Field>
                <div className={styles.buttons}>
                  <input
                    accept="image/*"
                    className={styles.input}
                    id="8"
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
                  <Button variant="contained" color="primary" type="submit">
                    Add post
                  </Button>
                </div>
              </form>
            )}
          </FormField>
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

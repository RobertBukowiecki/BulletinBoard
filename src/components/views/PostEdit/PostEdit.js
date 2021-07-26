import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { useSelector } from "react-redux";

import styles from "./PostEdit.module.scss";
import { getUserInfo } from "../../../redux/usersRedux";
import { getPostById } from "../../../redux/postsRedux";

const Component = (props) => {
  const post = useSelector((state) =>
    getPostById(state, props.match.params.id)
  );
  const userInfo = useSelector((state) => getUserInfo(state));
  const { isLogged, login, admin } = userInfo;

  const { image, title, author, price, date, description } = post;

  return (
    <>
      {(isLogged && login === author) || admin ? (
        <div className={styles.root}>
          <div className={styles.imageWrapper}>
            <img src={image} alt=""></img>
          </div>
          <div className={styles.wrapper}>
            <div>
              <div className={styles.infoWrapper}>
                <h3>
                  Title: <TextField value={title} />
                </h3>
                <h3>
                  Seller: <TextField value={author} />
                </h3>
                <h2>
                  Price: <TextField value={price} $ />
                </h2>
              </div>
              <div className={styles.favoritesWrapper}>
                <h4>Creation date {date}</h4>
              </div>
            </div>
            <div className={styles.descriptionWrapper}>
              <p>{description}</p>
            </div>
          </div>
          <Button color="secondary" className={styles.saveButton}>
            Save post
          </Button>
        </div>
      ) : (
        <h2>Please login to edit post</h2>
      )}
    </>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as PostEdit,
  // Container as PostEdit,
  Component as PostEditComponent,
};

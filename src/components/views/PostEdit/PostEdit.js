import React from "react";
import PropTypes from "prop-types";

import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
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

  const { image, title, author, price, date, description } = post;

  return (
    <div className={styles.root}>
      <div className={styles.imageWrapper}>
        <img src={image} alt=""></img>
      </div>
      <div className={styles.wrapper}>
        <div>
          <div className={styles.infoWrapper}>
            <h1>{title}</h1>
            <h3>
              Seller <TextField value={author} />
            </h3>
            <h2>{price} $</h2>
          </div>
          <div className={styles.favoritesWrapper}>
            <h4>Creation date {date}</h4>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
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

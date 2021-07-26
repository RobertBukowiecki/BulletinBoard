import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../../redux/usersRedux";
import { fetchAll, fetchPost, getPostById } from "../../../redux/postsRedux";

import styles from "./Post.module.scss";

const Component = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAll());
  }, []);

  const userInfo = useSelector((state) => getUserInfo(state));
  const post = useSelector((state) =>
    getPostById(state, props.match.params.id)
  );

  const [dropdownOn, setDropdownOn] = useState(false);
  const handleSetDropdownOn = () => {
    setDropdownOn(!dropdownOn);
  };

  console.log(post);

  const { title, author, price, description, email, tel, _id, image, date } =
    post;

  return (
    <div className={styles.root}>
      <div className={styles.imageWrapper}>
        {image !== undefined && (
          <img
            src={image}
            alt="https://www.geomar.net.pl/sites/default/files/default_images/default_product.png"
          ></img>
        )}
      </div>
      <div className={styles.wrapper}>
        <div>
          <div className={styles.infoWrapper}>
            <h1>{title}</h1>
            <h3>Seller {author}</h3>
            <h2>{price} $</h2>
          </div>
          <div className={styles.favoritesWrapper}>
            <h4>Creation date {date}</h4>
          </div>
        </div>
        <div className={styles.descriptionWrapper}>
          <p>{description}</p>
          <IconButton onClick={handleSetDropdownOn} className={styles.dropdown}>
            CONTACT
            <ExpandMoreIcon />
          </IconButton>
          <Collapse
            in={dropdownOn}
            timeout="auto"
            unmountOnExit
            className={styles.contact}
          >
            <h4>Tel: {tel}</h4>
            <h4>Email: {email}</h4>
          </Collapse>
        </div>
      </div>
      {(userInfo.isLogged && userInfo.login === author) || userInfo.admin ? (
        <Link
          component={Button}
          to={`/post/${_id}/edit`}
          color="secondary"
          className={styles.editButton}
        >
          Edit post
        </Link>
      ) : null}
      {(userInfo.isLogged && userInfo.login === author) || userInfo.admin ? (
        <Button color="secondary" className={styles.deleteButton}>
          Delete post
        </Button>
      ) : null}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Post,
  // Container as Post,
  Component as PostComponent,
};

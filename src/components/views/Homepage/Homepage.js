import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { PostCard } from "../../features/PostCard/PostCard";
import Grid from "@material-ui/core/Grid";
import { SideMenu } from "../../features/SideMenu/SideMenu";

import clsx from "clsx";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchPublished,
  getAll,
  getAllPublished,
} from "../../../redux/postsRedux";

import styles from "./Homepage.module.scss";

const Component = ({ className }) => {
  const postData = useSelector((state) => getAll(state));
  const postPublished = useSelector((state) => getAllPublished(state));
  const dispatch = useDispatch();
  const fetchPublishedPosts = (payload) => dispatch(fetchPublished(payload));

  useEffect(() => {
    fetchPublishedPosts();
  });

  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.wrapper}>
        <Grid container spacing={0} item xs={3}>
          <SideMenu />
        </Grid>
        <Grid container spacing={3} item xs={9}>
          <div className={styles.products}>
            {postData.products.map((data) => (
              <PostCard key={data.id} {...data} />
            ))}
          </div>
        </Grid>
      </div>
    </div>
  );
};
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};

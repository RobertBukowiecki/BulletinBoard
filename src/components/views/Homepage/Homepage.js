import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { PostCard } from "../../features/PostCard/PostCard";
import Grid from "@material-ui/core/Grid";
import { SideMenu } from "../../features/SideMenu/SideMenu";

import clsx from "clsx";

import { useDispatch, useSelector } from "react-redux";
import { fetchAll, getAllPublished, getAll } from "../../../redux/postsRedux";

import styles from "./Homepage.module.scss";

const Component = ({ className }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  const postData = useSelector(getAllPublished);

  console.log(postData);
  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.wrapper}>
        <Grid container spacing={0} item xs={3}>
          <SideMenu />
        </Grid>
        <Grid container spacing={3} item xs={9}>
          <div className={styles.products}>
            {postData.map((data) => (
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

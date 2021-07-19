import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { PostCard } from "../../features/PostCard/PostCard";
import Grid from "@material-ui/core/Grid";
import { SideMenu } from "../../features/SideMenu/SideMenu";

import clsx from "clsx";

import { connect } from "react-redux";
import { getAll } from "../../../redux/postsRedux";

import styles from "./Homepage.module.scss";

const Component = ({ className, postData }) => {
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

const mapStateToProps = (state) => ({
  postData: getAll(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};

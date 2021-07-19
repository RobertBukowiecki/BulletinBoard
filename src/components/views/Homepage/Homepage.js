import React from "react";
import PropTypes from "prop-types";
import { PostCard } from "../../features/PostCard/PostCard";
import Grid from "@material-ui/core/Grid";
import { SideMenu } from "../../features/SideMenu/SideMenu";

import clsx from "clsx";

import { useSelector } from "react-redux";
import { getAll } from "../../../redux/postsRedux";

import styles from "./Homepage.module.scss";

const Component = ({ className }) => {
  const postData = useSelector((state) => getAll(state));
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

// const mapStateToProps = (state) => ({
//   postData: getAll(state),
// });

// const Container = connect(mapStateToProps)(Component);

export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};

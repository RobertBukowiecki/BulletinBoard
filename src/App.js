import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserInfo } from "./redux/usersRedux";

import {
  createMuiTheme,
  StylesProvider,
  ThemeProvider,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import { MainLayout } from "./components/layout/MainLayout/MainLayout";
import { Homepage } from "./components/views/Homepage/Homepage";
import { Post } from "./components/views/Post/Post";
import { PostEdit } from "./components/views/PostEdit/PostEdit";
import { PostAdd } from "./components/views/PostAdd/PostAdd";
import { NotFound } from "./components/views/NotFound/NotFound";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#2B4C6F" },
  },
});

const App = () => {
  const userInfo = useSelector((state) => getUserInfo(state));
  const { isLogged } = userInfo;

  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route
                exact
                path="/post/add"
                component={isLogged ? PostAdd : NotFound}
              />
              <Route exact path="/post/:id" component={Post} />
              <Route
                exact
                path="/post/:id/edit"
                component={isLogged ? PostEdit : NotFound}
              />
              <Route path="*" component={NotFound} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
};

export { App };

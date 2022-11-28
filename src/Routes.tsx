import React from "react";
import { Route, Switch } from "react-router-dom";
import { Main, Profile, Settings, About } from "./pages";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={`/`} exact render={() => <Main />} />
      <Route path={`/profile`} render={() => <Profile />} />
      <Route path={`/settings`} render={() => <Settings />} />
      <Route path={`/about`} render={() => <About />} />
    </Switch>
  );
};

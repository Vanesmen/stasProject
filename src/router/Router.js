import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { PATHS } from '../constants';
import { LoginPage } from '../views';
import { AdminPage } from '../views';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path={PATHS.root} component={LoginPage} />
        <Route exact={true} path={PATHS.profile} component={AdminPage} />

        <Redirect to={PATHS.root} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

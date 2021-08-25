import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { PATHS } from '../constants';
import { LoginPage } from '../views';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path={PATHS.root} component={LoginPage} />

        <Redirect to={PATHS.root} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

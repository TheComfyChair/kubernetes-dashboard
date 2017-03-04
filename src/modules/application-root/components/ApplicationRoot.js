//@flow
import React from 'react';
import {
  App,
  MissedRoute,
} from 'common-ui-components/general';
import map from 'lodash/fp/map';
import { Navigation } from 'common-ui-components/navigation';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import helloWorld from 'hello-world';
import helloWorld2 from 'hello-world-2';
import styles from './styles.scss';


export const routerRoutes = map(({ route }) => ({
  path: route.pattern,
  component: route.components.content
}))([helloWorld, helloWorld2]);


export const navRoutes = map(module => ({
  title: module.title,
  link: module.route.link,
  clickable: module.route.clickable,
}))([helloWorld, helloWorld2]);


export const ApplicationRoot = () =>
  <BrowserRouter>
    <App>
      <Navigation
        modules={ navRoutes }
      />

      <Route
        pattern="/"
        exact
        component={ () => <Redirect to={ helloWorld.route.link } /> }
      />

      <main className={ styles.content }>
        <Switch>
          {
            map(route =>
              <Route
                key={ route.path }
                { ...route }
              />
            )(routerRoutes)
          }
          <Route component={ MissedRoute } />
        </Switch>
      </main>
    </App>
  </BrowserRouter>;
//@flow
import React from 'react';
import {
  App,
  MissedRoute,
} from 'common-ui-components/general';
import { Navigation } from 'common-ui-components/navigation';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import helloWorld from 'tools';

import styles from './styles.scss';

const ROUTES = [
  {
    path: helloWorld.route.pattern,
    component: helloWorld.route.components.content,
  },
];

export const ApplicationRoot = (props: { signoutUrl: string }) =>
  <BrowserRouter>
    <App>
      <Navigation
        modules={[
          {
            title: helloWorld.title,
            link: helloWorld.route.link,
            clickable: helloWorld.route.clickable,
          },
        ]}
      />

      <main className={ styles.content }>
        <Switch>
          {
            ROUTES.map((route, index) =>
              <Route
                key={ index }
                { ...route }
              />
            )
          }
          <Route component={ MissedRoute } />
        </Switch>
      </main>
    </App>
  </BrowserRouter>;
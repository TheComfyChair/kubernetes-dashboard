//@flow
import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
import { MissedRoute } from 'common-ui-components/general';

export type RouteDefinition = {
  link: string,
  pattern: string,
  components: {
    content: ReactClass<any>,
    sidebar?: ReactClass<any>
  },
  wideSidebar?: boolean,
};

export type SubModules = {
  route: RouteDefinition,
  title: string,
}[];

type RootComponentProps = {
  moduleRootRoutePattern: string,
  parentRoute: string,
};


export const createRoutes = (pathname: string) => map(subModule => ({
  pattern: `${ pathname }${ subModule.route.pattern || subModule.route.link }`,
  link: `${ pathname }${ subModule.route.link }`,
  sidebar: get('route.components.sidebar', '')(subModule),
  content: get('route.components.content', '')(subModule),
  title: subModule.title,
  indexRoute: subModule.route.indexRoute || false,
  wideSidebar: subModule.route.wideSidebar || false,
}));


export const rootComponentFactory = (
  moduleRootPattern: string,
  subModules: SubModules,
) => {
  const routeCreator = (pathname: string) => createRoutes(pathname, subModules);

  return (props: RootComponentProps) => {
    const currentRoute = `${ props.parentRoute || '' }${ moduleRootPattern }`;

    return (
      <div style={{ height: '100%', position: 'relative' }}>
        { routeCreator(currentRoute).find(route => route.indexRoute) &&
        <Route
          path={ moduleRootPattern }
          exact
          component={ () => <Redirect
            to={ (routeCreator(currentRoute).find(route => route.indexRoute) || {}).link }
          /> }
        /> }
        <Switch>
          { routeCreator(currentRoute).map(route =>
            <Route
              key={ route.pattern }
              path={ route.pattern }
              component={ routeProps =>
            <route.content
              { ...routeProps }
              parentRoute={ currentRoute }
            /> }
            />
          ) }
          <Route component={ MissedRoute } />
        </Switch>
      </div>
    );
  };
};
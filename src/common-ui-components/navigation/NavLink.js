//@flow
import React from 'react';
import {
  Link,
  Route,
} from 'react-router-dom';

export type Props = {
  to: string,
  children?: ReactClass<any>,
  activeClassName?: string,
  className?: string,
  onClick?: (event: Event) => void,
};

export const NavLink = (props: Props) =>
  <Route
    path={ props.to }
    children={ ({ match }) =>
      <Link
        to={ props.to }
        className={ match ? props.activeClassName : props.className }
        onClick={ props.onClick || (() => {}) }
      >
        { props.children }
      </Link>
    }
  />;
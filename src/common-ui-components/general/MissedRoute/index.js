//@flow
import React from 'react';
import styles from './styles.scss';

export type Props = {
  message?: string,
  children?: ReactClass<any>,
};

export const MissedRoute = (props: Props) =>
  <div
    className={ styles.container }
    data-test-missed-route
  >
    { (!props.children || props.message) &&
      <p className={ styles.message }>
        { props.message || "Oops! That page doesn't exist! :(" }
      </p> }
    { props.children }
  </div>;
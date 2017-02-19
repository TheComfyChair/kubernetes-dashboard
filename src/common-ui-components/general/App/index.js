//@flow
import React from 'react';
import styles from './styles.scss';

export const App = (props: any) =>
  <main className={ styles.app }>
    { props.children }
  </main>;
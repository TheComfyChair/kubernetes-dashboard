//@flow
import React from 'react';
import styles from './styles.scss';
import { NavigationLinks } from '../NavigationLinks';

import type Module from '../Navigation';

export const NavigationGroup = (props: Module) =>
  <div className={ styles.container }>
    { (props.subModuleLinks || []).map((subModule, index) =>
      <NavigationLinks
        key={ index }
        { ...subModule }
      />) }
  </div>;
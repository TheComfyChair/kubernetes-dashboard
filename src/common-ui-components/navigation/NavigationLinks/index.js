//@flow
import React from 'react';
import { NavLink } from '../NavLink';
import styles from './styles.scss';


export type Props = {
  title: string,
  subModuleLinks: {
    label: string,
    link: string,
  }[],
};


export const NavigationLinks = (props: Props) =>
  <div className={ styles.container }>
    { props.title &&
      <h3 className={ styles.title }>
        { props.title }
      </h3> }
      { props.subModuleLinks.map(link =>
        <NavLink
          key={ link.link }
          to={ link.link }
          className={ styles.link }
          activeClassName={ styles['active-link'] }
        >
          { link.label }
        </NavLink>
      )}
  </div>;
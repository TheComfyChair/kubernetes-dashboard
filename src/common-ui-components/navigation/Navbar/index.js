//@flow
import React from 'react';
import img from 'images/react_logo.svg';
import { NavLink } from '../NavLink';
import styles from './styles.scss';

export type NavbarProps = {
  modules: {
    title: string,
    link: string,
    clickable: boolean,
    expanded: boolean,
    subModules: Object[],
  }[],
  logoLink?: string,
  onModuleClick: (link: string) => void,
};

export const Navbar = (props: NavbarProps) =>
  <header>
    <nav
      className={ styles.container }
      data-test-primary-nav
    >
      <div
        className={ styles.logo }
        data-test-primary-logo
      >
        <NavLink to={ props.logoLink || '/' }>
          <img
            src={ img }
            alt="React logo"
          />
        </NavLink>
      </div>

      <div className={ styles.links }>
      { props.modules.map(module =>
        <NavLink
          className={ styles[`${ module.expanded ? 'expanded-' : ''}link`] }
          activeClassName={ styles['active-link'] }
          key={ module.link }
          to={ module.link }
          onClick={ (event: any) => {
            event.nativeEvent.stopPropagation();
            if (!module.clickable) {
              event.preventDefault();
            }
            props.onModuleClick(module.link);
          } }
        >
          { module.title }
        </NavLink>) }
      </div>
    </nav>
  </header>;

Navbar.defaultProps = {
  links: [],
};
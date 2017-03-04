//@flow
import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import { Navbar } from '../Navbar';
import { NavigationGroup } from '../NavigationGroup';
import styles from './styles.scss';


export type SubModule = {
  title: string,
  subModuleLinks: {
    label: string,
    link: string,
  }[],
}

export type Module = {
  title: string,
  link: string,
  clickable: boolean,
  expanded?: boolean,
  subModules?: SubModule[],
};


export type NavigationProps = {
  modules: Module[],
  signoutUrl: string,
  logoLink?: string,
};

export type NavigationState = {
  expanded: boolean,
  expandedModuleUrl: string,
};

export class Navigation extends Component {
  props: NavigationProps;
  state: NavigationState;

  constructor() {
    super();
    this.state = {
      expanded: false,
      expandedModuleUrl: '',
    };
  }

  componentWillMount() {
    // $FlowIgnore - typing document events is a pain!
    document.addEventListener('click', this._documentClickHandler);
  }

  componentWillUnmount() {
    // $FlowIgnore - typing document events is a pain!
    document.removeEventListener('click', this._documentClickHandler);
  }

  _documentClickHandler = (event: SyntheticInputEvent) => {
    if (event.target.className.indexOf('navigation') === -1) {
      this.setState({
        expanded: false,
      });
    }
  };

  _handleModuleExpansion = (moduleUrl: string) => {
    if (this.state.expanded && (moduleUrl === this.state.expandedModuleUrl)) {
      return this.setState({
        expanded: false,
      });
    }

    return this.setState({
      expanded: !!(this.props.modules.find(module => module.link === moduleUrl) || {}).subModules,
      expandedModuleUrl: moduleUrl,
    });
  };

  _mapModules = (modules: Module[], expandedModuleUrl: string, expanded: boolean): any =>
    modules.map(module => ({
      ...module,
      expanded: expanded && expandedModuleUrl === module.link,
    }));

  _activeModule = (modules: Module[], expandedModuleUrl: string): ?Module =>
    modules.find(module => module.link === expandedModuleUrl);


  render() {
    return (
      <div className={ styles.navigation } >
        <Navbar
          modules={ this._mapModules(
            this.props.modules,
            this.state.expandedModuleUrl,
            this.state.expanded) }
          onModuleClick={ this._handleModuleExpansion }
        />
          <Motion
            defaultStyle={{ transform: 0 }}
            style={{ transform: spring(this.state.expanded ? 100 : 0) }}
            children={ iStyles =>
              <div
                style={{
                  transform: `translateY(-${100 - iStyles.transform}%)`,
                  position: 'relative',
                }}
              >
                <NavigationGroup
                  { ...this._activeModule(this.props.modules, this.state.expandedModuleUrl) }
                />
              </div> }
          />
      </div>);
  }
}

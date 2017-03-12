import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  connectNamespacesSocketAction,
  disconnectNamespacesSocketAction,
} from '../sagas';
import { selectNamespaces } from '../selectors';


export const Namespaces = () =>
  <div>
    <p>Hello world! My name is the namespace details!</p>
  </div>;


type Props = {
  connectNamespacesSocket: () => void,
  disconnectNamespacesSocket: () => void;
}

export class NamespacesContainer extends Component {
  props: Props;

  componentWillMount() {
    this.props.connectNamespacesSocket();
  }

  componentWillUnmount() {
    this.props.disconnectNamespacesSocket();
  }

  render() {
    return <Namespaces />;
  }
}


const mapStateToProps = state => ({
  namespaces: selectNamespaces(state)
});


const mapDispatchToProps = dispatch => ({
  connectNamespacesSocket() {
    dispatch(connectNamespacesSocketAction());
  },
  disconnectNamespacesSocket() {
    dispatch(disconnectNamespacesSocketAction());
  }
});


export const HelloWorldContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NamespacesContainer);
import React from 'react';
import { connect } from 'react-redux';
import { selectNamespaces } from '../selectors';


type Props = {
  userName: string,
}

export const HelloWorld = (props: Props) =>
  <div>
    <p>Hello world! My name is the namespace details!</p>
  </div>;


const mapStateToProps = state => ({
  namespaces: selectNamespaces(state)
});


export const HelloWorldContainer = connect(
  mapStateToProps
)(HelloWorld);